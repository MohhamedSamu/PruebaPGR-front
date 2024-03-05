import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { EmpleadosRoutingModule } from './empleados-routing.module';



@NgModule({
  declarations: [
    NewComponent,
    ListComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
