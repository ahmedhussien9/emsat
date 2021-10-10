import { ViewOptions } from '../models/view-options.model';

export class PaginationClass {
  private sortColumn: string = 'ID';
  private sortDirection: string = 'DESC';
  private page: number = 1;
  private size: number = 10;
  private search: string = '';

  constructor(
    sortColumn: string = 'ID',
    sortDirection: string = 'DESC',
    page: number = 1,
    size: number = 10,
    search: string = ''
  ) {
    this.sortColumn = sortColumn;
    this.sortDirection = sortDirection.toUpperCase() || '';
    this.page = page;
    this.size = size;
    this.search = search;
  }

  defualtOptions(sortColumn?, sortDirection?): ViewOptions {
    return {
      sortColumn: sortColumn || this.sortColumn,
      sortDirection: sortDirection || this.sortDirection,
      page: this.page,
      size: this.size,
      search: this.search,
    };
  }

  currentOptions(): ViewOptions {
    return {
      sortColumn: this.sortColumn,
      sortDirection: this.sortDirection,
      page: this.page + 1,
      size: this.size,
      search: this.search,
    };
  }
}
