import {UserDataModel} from './user-data.model';
import {UserMetaModel} from './user-meta.model';

export interface UsersModel {
  meta: UserMetaModel;
  data: Array<UserDataModel>;
}
