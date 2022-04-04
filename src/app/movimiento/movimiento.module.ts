import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimientoRoutingModule } from './movimiento-routing.module';
import { NewEditComponent } from './new-edit/new-edit.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    NewEditComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MovimientoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule, 
  ]
})
export class MovimientoModule { }
