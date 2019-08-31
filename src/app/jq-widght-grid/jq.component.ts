import { Component, Input, OnChanges, OnInit, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { ColumnDetailModel, ColumngroupModel, JqWidghtModel, SourceModel } from './jq.class';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxCheckBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox';
// declare $ as any;

@Component({
    selector: 'app-jqgrid-component',
    templateUrl: './jq.component.html',
    styleUrls: ['./jq.component.scss']
})
export class JqGridComponent implements OnChanges, OnInit, AfterViewInit {


    @Input() jqGridDataMain: JqWidghtModel;
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
    @Output() gridDataToEmit: EventEmitter<any> = new EventEmitter<any>();

    dataAdapter: any;
    constructor() {
    }
    ngOnChanges() {
    }
    ngOnInit(): void {
        if (!!this.jqGridDataMain) {
            let source: SourceModel = {
                datafields: this.jqGridDataMain.dataField,
                datatype: this.jqGridDataMain.typeOfData,
                id: this.jqGridDataMain.sourceId,
                localdata: this.jqGridDataMain.actualData
            };
            this.dataAdapter = new jqx.dataAdapter(source);
            this.jqGridDataMain.pagermode = (!this.jqGridDataMain.pagermode) ? "simple" : this.jqGridDataMain.pagermode;
        };
    }

    ngAfterViewInit(): void {
        this.createButtons();
    }
    // AFter Grid ready
    ready = () => {
        this.myGrid.showsortcolumnbackground(this.jqGridDataMain.isSortbackGroungColor);
    }

    rendertoolbar = (toolbar: any): void => {
        if (this.jqGridDataMain.isShowToolbar && this.jqGridDataMain.actionsIn === "Toolbar" && this.jqGridDataMain.actionsArray.length >= 1) {
            let buttonsContainer = document.createElement('div');
            this.jqGridDataMain.actionsArray.forEach(a => {
                buttonsContainer.style.cssText = 'overflow: hidden; position: relative; margin: 5px;';
                let actionButtonContainer = document.createElement('div');
                actionButtonContainer.id = a.name;
                actionButtonContainer.style.cssText = 'float: left; margin-left: 5px;';
                buttonsContainer.appendChild(actionButtonContainer);
            });
            toolbar[0].appendChild(buttonsContainer);
        }
    }
    renderstatusbar(statusbar: any): void {
    }
    createButtons(): void {
        this.jqGridDataMain.actionsArray.forEach(a => {
            let actionButton = {
                width: a.buttonWidth, height: a.buttonHeight, value: a.buttonValue,
                imgSrc: 'https://www.techextensor.com/wp-content/uploads/2018/11/imgonline-com-ua-Transparent-background-KxnWEyDNFPi-100x100.png',
                imgPosition: a.imgPosition, textPosition: a.textPosition,
                textImageRelation: a.textImageRelation
            };
            let addButton = jqwidgets.createInstance('#' + a.name, 'jqxButton', actionButton);
            addButton.addEventHandler('click', (event: any): void => {
                let selectedrowindex = this.myGrid.getselectedrowindex();
                let rowData = this.myGrid.getrowdata(selectedrowindex);
                this.gridDataToEmit.emit({ data: rowData, action: event.currentTarget.id });
            });
        });
    }

    myGridOnRowSelect(event: any): void {
        let selectedRowIndexes = this.myGrid.getselectedrowindexes();
        if (selectedRowIndexes.length >= 1) {
            let rowData = [];
            selectedRowIndexes.forEach(a => {
                let data = this.myGrid.getrowdata(a);
                rowData.push(data);
            });
            this.gridDataToEmit.emit({ data: rowData, action: "SelectedRowData" });
        }
    };
    myGridOnRowUnselect(event: any): void {
        let selectedRowIndexes = this.myGrid.getselectedrowindexes();
        if (selectedRowIndexes.length >= 1) {
            let rowData = [];
            selectedRowIndexes.forEach(a => {
                let data = this.myGrid.getrowdata(a);
                rowData.push(data);
            });
            this.gridDataToEmit.emit({ data: rowData, action: "SelectedRowData" });
        }
    };
    onPageSizeChanged(event: any): void {
        let paginginformation = this.myGrid.getpaginginformation();
        this.gridDataToEmit.emit({ data: paginginformation, action: "pageSizeChange" });
    }
    onPageChanged(event: any): void {
        let paginginformation = this.myGrid.getpaginginformation();
        this.gridDataToEmit.emit({ data: paginginformation, action: "pageChange" });
    }

    cellBeginEditEvent(event: any): void {
        let args = event.args;
        let rowData = this.myGrid.getrowdata(args.rowindex);
        let data: any = {
            data: rowData, action: "cellbeginedit"
        };
        this.gridDataToEmit.emit(data);
    }
    cellEndEditEvent(event: any): void {
        let args = event.args;
        let rowData = this.myGrid.getrowdata(args.rowindex);
        let data: any = {
            data: rowData, action: "cellendedit"
        };
        this.gridDataToEmit.emit(data);
    }


}
