import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../../shared/producto';
import { UsuarioGateway } from 'src/app/domain/interface/UsuarioGateway';
import { Usuario } from 'src/app/domain/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends UsuarioGateway {
  constructor(private http: HttpClient) {super(); }

  getByID(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  getAll(tipo:number): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.API_KEY}/usuario?tipo=${tipo}`).pipe(
      map((data:Usuario[]) => {
        return data;
      }),
      catchError((err) => this.handlerError(err.error))
    );
  }
  GenerarGuia(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  Create(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  Update(): Observable<any> {
    throw new Error('Method not implemented.');
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
