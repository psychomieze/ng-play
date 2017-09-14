import {Injectable} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Injectable()
export class FilterService {
    getUniqueWithCount(data) {
        const list = {};
        data.forEach(function (item) {
            if (list[item.commit.committer.email] === undefined) {
                list[item.commit.committer.email] = {};
                list[item.commit.committer.email]['item'] = item;
                if (isNullOrUndefined(item.count)) {
                    list[item.commit.committer.email]['count'] = 1;
                } else {
                    list[item.commit.committer.email]['count'] = item.count;
                }
            } else {
                list[item.commit.committer.email]['count'] += 1;
            }
        });
        return Object.keys(list).map(function (key) {
            const newItem = list[key].item;
            newItem.count = list[key].count;
            return newItem;
        });
    }
}
