import { Component } from '@angular/core';
import { GridProperties, ColumnDetail, GridActions } from './grid-component/grid.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  gridData?: GridProperties = {};
  testData: Array<any> = [
    { age: 22, city: null, country: "india", firstName: "kushal", gender: "male", id: 1, lastName: "shah" },
    { age: 20, city: "Ahmedabad nknfjnlfjnjlflkfdmlfndjfdlknfd fdnkfdknfdlfd kfdjhkuhfdldfljlfd dfhkjfdjfd", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
    { age: 20, city: "Ahmedabad", country: "india", firstName: "shah", gender: "male", id: 2, lastName: "saheb" },
  ];
  columns: Array<ColumnDetail> | any = [
    { prop: 'firstName', name: 'First Name bab', width: 100, resizeable: false, sortable: true, isAction: false },
    { prop: 'lastName', name: 'Last Name', width: 100, resizeable: false, sortable: true, isAction: false },
    { prop: 'age', name: 'Age', width: 100, resizeable: false, sortable: true, isAction: false },
    { prop: 'city', name: 'City', width: 100, resizeable: false, sortable: true, isAction: false },
    { prop: 'country', name: 'Country', width: 200, resizeable: false, sortable: true, isAction: false },
    { prop: 'gender', name: 'Gender', width: 200, resizeable: false, sortable: true, isAction: false },
    { prop: 'action', name: 'Actions', width: 200, resizeable: false, sortable: true, isAction: true, icons: ["first", "second", "thired"] },
  ];
  constructor() {
    this.gridData = {
      class: "material",
      columnDetail: this.columns,
      columnMode: "force",
      footerHeight: "50",
      headerHeight: "50",
      isCheckBoxNeed: true,
      isServerSidePagination: true,
      rowData: this.testData,
      rowHeight: "auto",
      limit: 6
    }
  }

  gridDatabyRow = (data: GridActions) => {
    switch (data.action) {
      case "first": {
        console.log(data);
        break;
      }
      case "second": {
        console.log(data);
        break;
      }
      case "thired": {
        console.log(data);
        break;
      }
      case "PageChange": {
        console.log(data);
        break;
      }
      case "Selection": {
        console.log(data);
        break;
      }
      default: {
        console.log("Invalid choice");
        break;
      }
    }
  }
  
}
