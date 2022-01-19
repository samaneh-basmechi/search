import {UserDataInterface} from './user-data.interface';
import {UserMetaInterface} from './user-meta.interface';

export interface UsersModel {
  meta: UserMetaInterface;
  data: Array<UserDataInterface>;
}
