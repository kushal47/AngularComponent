import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { GridProperties, Page } from './grid.class';


@Component({
    selector: 'app-grid-component',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnChanges, OnInit {

    limit?: string;
    selected = [];
    page = new Page();

    @Input() gridProperties: GridProperties;

    @Output() getDataFromGrid: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnChanges() {
    }
    ngOnInit(): void {
        if (!this.gridProperties.limit || this.gridProperties.limit == "") {
            this.gridProperties.limit = this.limit
        }

        this.page.pageNumber = 0;
        this.page.size = this.gridProperties.limit;
        this.page.totalElements = this.gridProperties.rowData.length;

        this.setPage({ offset: 0 });
    }
    setPage(pageInfo) {
        this.page.pageNumber = pageInfo.offset;
        this.giveData({ pageNumber: this.page.pageNumber + 1, pageSize: this.page.size, total: this.page.totalElements }, 'PageChange');
    }
    onSelect(row) {
        debugger;
        this.giveData(row.selected, "Selection");
    }
    giveData = (data, action: string) => {
        this.getDataFromGrid.emit({ data: data, action: action });
    }
}
