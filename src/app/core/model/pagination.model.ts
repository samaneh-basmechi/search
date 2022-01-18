import {LinksModel} from './links.model';

export interface PaginationModel {
  total: number;
  pages: number;
  page: number;
  limit: number;
  links: LinksModel;
}
