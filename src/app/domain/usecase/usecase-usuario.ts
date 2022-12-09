import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsuarioGateway } from "../interface/UsuarioGateway";
import { Usuario } from "../models/Usuario";

@Injectable({
  providedIn: 'root'
})

export class UsuarioUseCase {
  constructor(private _usuarioService: UsuarioGateway) {
  }

  getAllEntrega(tipo:number):Observable<Array<Usuario>>{
    return this. _usuarioService.getAll(tipo);
  }

}
