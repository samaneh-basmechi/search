import {LinksInterface} from './links.interface';

export interface PaginationInterface {
  total: number;
  pages: number;
  page: number;
  limit: number;
  links: LinksInterface;
}
