import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { EmpresasRoutingModule } from './empresas-routing.module';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';



@NgModule({
  declarations: [
    NewComponent,
    ListComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    ToastModule
  ]
})
export class EmpresasModule { }
