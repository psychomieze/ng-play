import {Component, OnInit} from '@angular/core';
import {GithubService} from './services/github.service';
import {GithubCommitModel} from './models/githubCommit.model';
import {FilterService} from './services/filter.service';
import {FilterModel} from './models/filter.model';
import {HttpResponse} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [GithubService, FilterService]
})
export class AppComponent implements OnInit {
    title = 'Core Mergers';
    data;
    filters = new FilterModel();

    constructor(private _githubService: GithubService, private _filterService: FilterService) {

    }
 
    ngOnInit() {
        // this.updateData();
    }

    updateData() {
        this._githubService
            .getGithubData(this.filters)
            .subscribe((response: HttpResponse<GithubCommitModel[]>) => {
                this.data = this._filterService.getUniqueWithCount(response.body);
                const link = response.headers.get('Link');
                const regExp = new RegExp(/page=(\d+)>;\srel="last".*$/);
                const matches = regExp.exec(link);
                if (matches != null) {
                    const numberOfPages = Number(matches[1]);
                    for (let i = 2; i <= numberOfPages; i++) {
                        this._githubService
                            .getGithubData(this.filters, i)
                            .subscribe(
                                (innerResponse: HttpResponse<GithubCommitModel[]>) => {
                                    this.data = this._filterService.getUniqueWithCount(this.data.concat(innerResponse.body));
                                 }
                            );
                    }
                }
            });
    }
}
