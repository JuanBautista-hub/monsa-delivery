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
export class ProductoService extends EntregaGateway {
  constructor(private http: HttpClient) {super(); }

  getByID(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  getAll(status:boolean): Observable<Entrega[]> {
    return this.http.get<Entrega[]>(`${environment.API_KEY}/entrega?status=${status}`).pipe(
      map((data:Entrega[]) => {
        return data;
      }),
      catchError((err) => this.handlerError(err.error))
    );
  }
  Create(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  Update(): Observable<any> {
    throw new Error('Method not implemented.');
  }



  VincularEntrega(data: any): Observable<any> {
    return this.http.post<any>(`${environment.API_KEY}/entrega/vincular`, data).pipe(
      map((userResponse:any) => {
        return userResponse;
      }),
      catchError((err) => this.handlerError(err.error))
    );
  }

   getProducto(): Observable<any> {
    return this.http.get<any>(`${environment.API_KEY}/entrega`).pipe(
      map((data:any) => {
        return data;
      }),
      catchError((err) => this.handlerError(err.error))
    );
  }

  getProductoByID(id:number): Observable<any> {
    return this.http.get<any>(`${environment.API_KEY}/entrega/${id}`).pipe(
      map((data:any) => {
        return data;
      }),
      catchError((err) => this.handlerError(err.error))
    );
  }

  pachtProducto(body:any, id:number): Observable<any> {
    return this.http.patch<any>(`${environment.API_KEY}/producto/${id}`,body).pipe(
      map((data:any) => {
        return data;
      }),
      catchError((err) => this.handlerError(err.error))
    );
  }

 deleteProducto(id:number): Observable<any> {
    return this.http.delete<any>(`${environment.API_KEY}/producto/${id}`).pipe(
      map((data:any) => {
        return data;
      }),
      catchError((err) => this.handlerError(err.error))
    );
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
