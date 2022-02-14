export interface PageInfo {
  page: number;
  size: number;
  search?: string;
}

export type PageList = PageInfo & {
  data: any[];
  total: number;
};
