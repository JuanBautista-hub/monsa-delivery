import { Observable } from "rxjs";
import { Usuario } from "../models/Usuario";

export abstract class UsuarioGateway{
  abstract getByID(id:string):Observable<Usuario>;
  abstract getAll(tipo:number):Observable<Array<Usuario>>;
  abstract Create():Observable<Usuario>;
  abstract Update():Observable<Usuario>;

}
