import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, firstValueFrom} from 'rxjs';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { HandleError, HttpErrorHandlerService } from '../../core/service/http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService extends UnsubscribeOnDestroyAdapter {
  private handleError: HandleError;
  private base_api = "https://localhost:7116/api/";

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService,
  ) { 
    super();
    this.handleError = httpErrorHandler.createHandleError('handler service');
  }

  getEmpresas(): Promise<any> {
    return firstValueFrom(this.http.get(`${this.base_api}Empresa/Index`));
  }
  deleteEmpresa(empresa): Promise<any> {
    console.log(empresa)
    return firstValueFrom(this.http.delete(`${this.base_api}Empresa/delete/${empresa.id}`)).catch((err) => {
      return err
    });
  }
  createEmpresa(empresa): Promise<any> {
    return firstValueFrom(this.http.post(`${this.base_api}Empresa`, empresa));
  }

}
