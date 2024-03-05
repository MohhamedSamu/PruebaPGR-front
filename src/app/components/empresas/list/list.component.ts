import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../empresas.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandlerService } from '../../../core/service/http-error-handler.service';
import { empresa } from "../empresas.interface";
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [MessageService]
})
export class ListComponent implements OnInit {
  empresasService: EmpresasService | null;
  empresas:empresa[]=[];
  constructor(
    public httpClient: HttpClient,
    httpErrorHandler: HttpErrorHandlerService,
    private messageService: MessageService
    ) { 
    this.empresasService = new EmpresasService(this.httpClient,httpErrorHandler);
  }

  ngOnInit(): void {
    this.empresasService.getEmpresas().then((result: any[]) => {
      console.log(result);
      this.empresas=result
    });
  }

  deleteEmpresa(empresa){
    this.empresasService.deleteEmpresa(empresa).then((result: any) => {
      console.log(JSON.stringify(result));
      //En este caso sabemos que se ejecuto correctamente
      if (result == "1"){
        this.ngOnInit();
        this.messageService.add({severity:'success', life:5000, summary:'Eliminacion de empresa', detail:'La eliminacion fue exitosa!'});
      }else{
        this.messageService.add({severity:'error', life:5000, summary:'Eliminacion de empresa', detail:'La eliminacion no se puede efectuar porque ya hay un empleado en la empresa'});
      }
    });
  }

}
