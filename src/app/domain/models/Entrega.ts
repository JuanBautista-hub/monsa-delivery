import { Usuario } from "./Usuario";

export interface Entrega {
  EntregaID?:    number;
  NumeroGuia?: string,
  FolioEntrega?: string;
  DireccionID?:  null;
  Finalizado?:   boolean;
  Estatuses?:    Estatus[];
  Direccion?:    Direccion;
  Usuarios?:     Usuario[];
}

export interface Estatus {
  EstatusID?:      number;
  Descripcion?:    Descripcion;
  EntregaEstatus?: EntregaEstatus;
}

export enum Descripcion {
  Entregado = "Entregado",
  RecibidoEnBodega = "Recibido en bodega",
  RecibidoPorElCliente = "Recibido por el cliente",
  Trasnfer = "Trasnfer",
}

export interface EntregaEstatus {
  EntregaID?: number;
  EstatusID?: number;
  Fecha?:     Date;
}
export interface Direccion {
  PaisID: string;
  MunicipioID: string;
  EstadoID: string;
  Calle: string;
  NumeroInterior:string;
    NumeroExterior: string;
  Referencia: string;
  CP: string;
}








