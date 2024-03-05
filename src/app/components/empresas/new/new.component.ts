import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { EmpresasService } from '../empresas.service';
import { empresa } from '../empresas.interface';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandlerService } from 'src/app/core/service/http-error-handler.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.sass'],
  providers: [MessageService]
})
export class NewComponent implements OnInit {

  empresasService: EmpresasService | null;
  empresa:empresa={
    Direccion:'',
    Nombre:'',
    Telefono:'',
    id:0,
  };
  constructor(
    public httpClient: HttpClient,
    httpErrorHandler: HttpErrorHandlerService,
    private messageService: MessageService
    ) { 
    this.empresasService = new EmpresasService(this.httpClient,httpErrorHandler);
  }

  ngOnInit(): void {
  }

  ingresarEmpresa(){
    console.log("this.empresa", this.empresa)
    this.empresasService.createEmpresa(this.empresa).then((result: any) => {
      console.log(JSON.stringify(result));
      //En este caso sabemos que se ejecuto correctamente
      if (result == "1"){
        this.ngOnInit();
        this.messageService.add({severity:'success', life:5000, summary:'Creacion de empresa', detail:'La creacion fue exitosa!'});
      }else{
        this.messageService.add({severity:'error', life:5000, summary:'Creacion de empresa', detail:'No se pudo crear la empresa'});
      }
    });
  }

}
