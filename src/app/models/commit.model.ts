import {UserModel} from './user.model';
import {GitUserModel} from "./gitUser.model";

export class CommitModel {
    message: string;
    author: GitUserModel;
    committer: GitUserModel;
}
