import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { FormProductoComponent } from '../form-producto/form-producto.component';

import { Entrega } from '../../domain/models/Entrega';
import { EntregaUseCase } from '../../domain/usecase/usecase-entrega';
import { ProductoService } from '../../infraestructure/service/producto.service';
import { Product } from '../../shared/producto';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.scss'],
  providers: [ConfirmationService]
})
export class ListaProductoComponent implements OnInit {
  products: any;
  cols: any[] = []
  EntregaID: number = 0

  displayBasic: boolean = false;

  msgs: any[] = [];

  position: string = '';
  @ViewChild(FormProductoComponent) formulario!: FormProductoComponent
  constructor(private _productoService: ProductoService,
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService,
    private service: MessageService,

    private _EntregaUseCase: EntregaUseCase) { }

  ngOnInit() {

      this.primengConfig.ripple = true;
      this._EntregaUseCase.getAllEntrega(false).subscribe({
        next: (res) => {
          this.products = res.map((element: Entrega) => {
            return this.mapData(element)
          })
        }, error: (error) => { console.log(error) }
      })
      this.cols = [
        { field: 'FolioEntrega', header: 'Folio' },
        { field: 'Guia', header: 'Guía' },
        { field: 'Estatus', header: 'Estatus' },
        { field: 'Empleado', header: 'Empleado' },
        { field: 'Cliente', header: 'Cliente' },
        { field: 'Direccion', header: 'Direccion' },
        { field: 'Referencia', header: 'Referencia de entrega' },
      ];



  }

  mapData(data: Entrega) {
    let status = "Finalizado";
    console.log(data.Finalizado);
    if (!data.Finalizado) {
      status = "Activo";
    }
    let empleado = "Sin asignar";
    let cliente = "Sin asignar";
    if (data.Usuarios![0]?.RolID) {
      switch (data.Usuarios![0]?.RolID) {

        case 1:
          empleado = `${data.Usuarios![0].Perfil?.Nombre} ${data.Usuarios![0].Perfil?.Apellido1} ${data.Usuarios![0].Perfil?.Apellido2}`;

          break;
        case 2:
          cliente = `${data.Usuarios![0].Perfil?.Nombre} ${data.Usuarios![0].Perfil?.Apellido1} ${data.Usuarios![0].Perfil?.Apellido2}`;

          break;
        default:
          empleado = "Sin asignar";
          cliente = "Sin asignar";
          break;
      }
    }
    if (data.Usuarios![1]?.RolID) {
      switch (data.Usuarios![1]?.RolID) {

        case 1:
          empleado = `${data.Usuarios![1].Perfil?.Nombre} ${data.Usuarios![1].Perfil?.Apellido1} ${data.Usuarios![1].Perfil?.Apellido2}`;

          break;
        case 2:
          cliente = `${data.Usuarios![1].Perfil?.Nombre} ${data.Usuarios![1].Perfil?.Apellido1} ${data.Usuarios![1].Perfil?.Apellido2}`;

          break;
        default:
          empleado = "Sin asignar";
          cliente = "Sin asignar";
          break;
      }
    }
    return {
      EntregaID: data.EntregaID,
      FolioEntrega: data.FolioEntrega,
      Estatus: status,
      Empleado: empleado,
      Cliente: cliente,
      Direccion:`${data.Direccion?.PaisID || ""},
      ${data.Direccion?.EstadoID||""}
      ${data.Direccion?.MunicipioID||""},
      ${data.Direccion?.Calle|| ""}
      ${data.Direccion?.NumeroExterior||""}
      ${data.Direccion?.NumeroInterior||""}
      ${data.Direccion?.CP||""},
      ` ||"Sin direccion",
      Referencia:data.Direccion?.Referencia || "Sin refenrencia",
      Guia:data.NumeroGuia
    }
  }
  createProduct() {
    this.formulario.displayBasic = true;
    this.formulario.formProducto.reset()
    this.formulario.EntregaID = 0
  }
  editProduct(event: Entrega) {
    this.formulario.displayBasic = true;

    this.formulario.EntregaID = event.EntregaID || 0
    this.formulario.ProductEdit()
  }




  Reload(_event: any) {

    this.ngOnInit()
  }
}
