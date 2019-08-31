import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid-component/grid.component';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CommonModule } from '@angular/common';
import { JqGridComponent } from './jq-widght-grid/jq.component';



@NgModule({
  declarations: [
    AppComponent,
    jqxGridComponent,
    GridComponent,
    JqGridComponent,
  
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxDatatableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
