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
export class CatalogoService {
  constructor(private http: HttpClient) { }

  getEstados(): Observable<any> {
    return this.http.get<any[]>(`${environment.API_KEY}/catalogo/estado`).pipe(
      map((data:any[]) => {
        return data;
      }),
      catchError((err) => this.handlerError(err.error))
    );
  }

  getMunicipios(id: string): Observable<any> {
    return this.http.get<any[]>(`${environment.API_KEY}/catalogo/municipio?estado=${id}`).pipe(
      map((data:any[]) => {
        return data;
      }),
      catchError((err) => this.handlerError(err.error))
    );
  }
  getLocalidades(id: string): Observable<any> {
    return this.http.get<any[]>(`${environment.API_KEY}/catalogo/localidades?municipio=${id}`).pipe(
      map((data:any[]) => {
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
