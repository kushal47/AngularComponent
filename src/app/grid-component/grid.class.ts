export class GridProperties {
    class?: string;
    rowData?: Array<any>;
    columnMode?: string;
    headerHeight?: string;
    footerHeight?: string;
    rowHeight?: string;
    limit?: string | any;
    columnDetail?: Array<ColumnDetail> | any;

    isServerSidePagination?: boolean;
    isCheckBoxNeed?: boolean;
}
export class ColumnDetail {
    prop?: string;
    name?: string;
    width?: number;
    resizeable?: boolean;
    sortable?: boolean;
    isAction?: boolean;
    icons?: Array<string>;
}
export class Page {
    //The number of elements in the page
    size: number = 0;
    //The total number of elements
    totalElements: number = 0;
    //The total number of pages
    totalPages: number = 0;
    //The current page number
    pageNumber: number = 0;
}
export class GridActions {
    gridData?: any;
    action?: string;
}





