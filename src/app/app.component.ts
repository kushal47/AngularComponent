import { Component } from '@angular/core';
import { GridProperties, ColumnDetail, GridActions } from './grid-component/grid.class';
import { ColumnDetailModel, ColumngroupModel, JqWidghtModel, ActionModel } from './jq-widght-grid/jq.class';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  gridData?: GridProperties = {};
  jqGridDataFromBackEnd: JqWidghtModel = {};
  testData: Array<any> = [
    { age: 22, city: "test", country: "india", firstName: "kushal", gender: "male", id: 1, lastName: "shah", birthDate: new Date() },
    { age: 20, city: "Ahmedabad dfhkjfdjfd", country: "india", firstName: "Bhavik", gender: "male", id: 2, lastName: "thakkar" },
    { age: 20, city: "Baroda", country: "india", firstName: "gaurav", gender: "male", id: 3, lastName: "thakkar" },
    { age: 65, city: "Surat", country: "india", firstName: "hina", gender: "female", id: 4, lastName: "Thallar" },
    { age: 55, city: "Surat", country: "india", firstName: "preeti", gender: "female", id: 5, lastName: "Sharma" },
  ];
  cellsrendererActions = function (row: number, columnfield: string, value: string | number, defaulthtml: string, columnproperties: any, rowdata: any) {
    // return `<button (click)='buttonClick('ActionOne',rowdata)'>ActionOne</button>
    //         <button (click)='buttonClick('ActionTwo',rowdata)'>ActionTwo</button>
    //         <button (click)='buttonClick('ActionThree',rowdata)'>ActionThree</button>
    //         `;

    // return '<input role="deleteUser" type="button" class="btn btn-default" id="rowBtn" value="Delete User"/>'
    return '&nbsp;<button id="ed' + row + '" onclick="editScene(' + row + ');">Edit</button>'
  };



  columnsFromComponent: Array<ColumnDetailModel> = [
    { text: "Age", dataField: "age", width: 250, editable: true },
    { text: "City", dataField: "city", editable: false },
    { text: "Country", dataField: "country", editable: false },
    { text: "First Name", dataField: "firstName", columnGroup: "FullName", editable: false },
    { text: "Last Name", dataField: "lastName", columnGroup: "FullName", editable: false },
    { text: "Gender", dataField: "gender", editable: false },
    { text: "Id", dataField: "id", editable: false },
    { text: "Birth Date", dataField: "birthDate", width: 250, editable: false, cellsformat: "dd-MMMM-yyyy", filtertype: "date" },
    // {
    //   dataField: 'action', renderer: (defaultText, alignment, height) => {
    //     return '<input type="checkbox" value="false" />'
    //   }
    // }
    // { renderer: this.cellsrendererActions }
  ];
  dataFields = [
    { name: 'age', type: 'int' },
    { name: 'city', type: 'string' },
    { name: 'country', type: 'string' },
    { name: 'firstName', type: 'string' },
    { name: 'lastName', type: 'string' },
    { name: 'gender', type: 'string' },
    { name: 'id', type: 'int' },
    { name: 'birthDate', type: 'date' },
  ];
  columngroups: ColumngroupModel[] =
    [
      { text: 'Full Name', align: 'center', name: 'FullName' }
    ];
  actionArray: ActionModel[] = [
    { name: "edit", buttonHeight: 25, buttonValue: "edit", buttonWidth: 80, imgPosition: "center", textImageRelation: "imageBeforeText", textPosition: 'center' },
    { name: "delete", buttonHeight: 25, buttonValue: "delete", buttonWidth: 80, imgPosition: "center", textImageRelation: "imageBeforeText", textPosition: 'center' }
  ];
  // columns: Array<ColumnDetail> | any = [
  //   { prop: 'firstName', name: 'First Name bab', width: 100, resizeable: false, sortable: true, isAction: false },
  //   { prop: 'lastName', name: 'Last Name', width: 100, resizeable: false, sortable: true, isAction: false },
  //   { prop: 'age', name: 'Age', width: 100, resizeable: false, sortable: true, isAction: false },
  //   { prop: 'city', name: 'City', width: 100, resizeable: false, sortable: true, isAction: false },
  //   { prop: 'country', name: 'Country', width: 200, resizeable: false, sortable: true, isAction: false },
  //   { prop: 'gender', name: 'Gender', width: 200, resizeable: false, sortable: true, isAction: false },
  //   { prop: 'action', name: 'Actions', width: 200, resizeable: false, sortable: true, isAction: true, icons: ["first", "second", "thired"] },
  // ];
  constructor() {
    // this.gridData = {
    //   class: "material",
    //   columnDetail: this.columns,
    //   columnMode: "force",
    //   footerHeight: "50",
    //   headerHeight: "50",
    //   isCheckBoxNeed: true,
    //   isServerSidePagination: true,
    //   rowData: this.testData,
    //   rowHeight: "auto",
    //   limit: 6
    // }

    this.jqGridDataFromBackEnd = {
      width: '100%',
      columns: this.columnsFromComponent,
      isPageable: true,
      isAutoheight: true,
      isSortable: true,
      selectionmode: "checkbox",
      columngroups: this.columngroups,
      isAltRow: true,
      isenabletooltips: true,
      iseditable: true,
      sourceId: "TestData",
      typeOfData: "json",
      actualData: this.testData,
      dataField: this.dataFields,
      actionsArray: this.actionArray,
      isShowStatusBar: false,
      isShowToolbar: true,
      actionsIn: "Toolbar",
      isFilterable: true,
      isSortbackGroungColor: true,
      isautoshowfiltericon: true,
      isshowfilterrow: true,
      pagermode: 'simple',
      isGroupable: true
    };

  }

  // gridDatabyRow = (data: GridActions) => {
  //   switch (data.action) {
  //     case "first": {
  //       console.log(data);
  //       break;
  //     }
  //     case "second": {
  //       console.log(data);
  //       break;
  //     }
  //     case "thired": {
  //       console.log(data);
  //       break;
  //     }
  //     case "PageChange": {
  //       console.log(data);
  //       break;
  //     }
  //     case "Selection": {
  //       console.log(data);
  //       break;
  //     }
  //     default: {
  //       console.log("Invalid choice");
  //       break;
  //     }
  //   }
  // }


  jqGridTakeActions = (data: GridActions) => {
    console.log(data);
  }

  

}
