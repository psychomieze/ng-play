import {CommitModel} from './commit.model';
import {UserModel} from "./user.model";

export class GithubCommitModel {
    commit: CommitModel;
    sha: string;
    html_url: string;
    author: UserModel;
    committer: UserModel;
    count: Number = 0;
}
