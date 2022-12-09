import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EntregaGateway } from "../interface/EntregaGateway";
import { Entrega } from "../models/Entrega";

@Injectable({
  providedIn: 'root'
})

export class EntregaUseCase {
  constructor(private _entregaService: EntregaGateway) {
  }

  getAllEntrega(status:boolean):Observable<Array<Entrega>>{
    return this. _entregaService.getAll(status);
  }
}
