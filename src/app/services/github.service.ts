import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {GithubCommitModel} from '../models/githubCommit.model';
import {FilterModel} from '../models/filter.model';

@Injectable()
export class GithubService {
    // sha=TYPO3_8-7&until=2017-07-01T00:00:00Z&since=2017-01-01T00:00:00Z
    private _apiUrl = 'https://api.github.com/repos/typo3/typo3.cms/commits?';

    constructor(private _httpClient: HttpClient) {

    }

    getGithubData(filters: FilterModel, page = 0) {
        let params: HttpParams = new HttpParams();
        params = params.append('sha', filters.sha);
        params = params.append('since', filters.since.toISOString());
        params = params.append('until', filters.until.toISOString());
        if (page !== 0) {
            const value = page.toString();
            params = params.append('page', value);
        }
        return this
            ._httpClient
            .get<GithubCommitModel[]>(
                this._apiUrl,
                {params: params, observe: 'response'}
            );
    }
}
