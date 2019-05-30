import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from "./table/table.component";
import {ViewComponent} from "./view/view.component";



//noinspection TypeScriptValidateTypes
const appRoutes: Routes=[
  {path:'', component: TableComponent},
  {path:'view', component: ViewComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
