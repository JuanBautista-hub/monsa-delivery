import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EntregaGateway } from 'src/app/domain/interface/EntregaGateway';
import { Entrega } from 'src/app/domain/models/Entrega';
@Injectable({
  providedIn: 'root'
})
export class RecursoService {
  constructor(private http: HttpClient) { }

  getByID(ruta: string) {
    if(ruta==null){
      console.log('mi ruta',ruta)
      return   '../../../assets/img/avatar.png';
      }

    //const tokenn = JSON.parse(localStorage.getItem('session'))

    return `${environment.API_KEY}/recurso/${ruta}`

  }
  private handlerError(error: Error): Observable<never> {
    let errorMessage = 'An error ocurred retrienving data';
    if (error) {
      errorMessage = `Error: code ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(()=> errorMessage);
  }
}
