import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ViewComponent } from './view/view.component';

import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-router.module";


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
