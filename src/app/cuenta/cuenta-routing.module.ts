import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEditComponent } from './new-edit/new-edit.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path:'',
  component:ListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentaRoutingModule { }
