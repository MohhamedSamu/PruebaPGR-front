import { Component, OnInit } from '@angular/core';
import { EjemploService } from '../core/service/ejemplo.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandlerService } from '../core/service/http-error-handler.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {
  ejemplo: EjemploService | null;

  constructor(
    public httpClient: HttpClient,
    httpErrorHandler: HttpErrorHandlerService
    ) { 
    this.ejemplo = new EjemploService(this.httpClient,httpErrorHandler);
  }

  ngOnInit(): void {
    this.ejemplo.getEjemplo().then((result: any[]) => {
      console.log('Este es un ejemplo para conectar con el backend');
      console.log(result);
      });
  }

}
