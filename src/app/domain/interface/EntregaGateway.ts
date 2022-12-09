import { Observable } from "rxjs";
import { Entrega } from "../models/Entrega";

export abstract class EntregaGateway{
  abstract getByID(id:string):Observable<Entrega>;
  abstract getAll(status:boolean):Observable<Array<Entrega>>;
  abstract Create():Observable<Entrega>;
  abstract Update():Observable<Entrega>;
}
