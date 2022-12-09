import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { FormProductoComponent } from '../form-producto/form-producto.component';
import { Usuario } from '../../domain/models/Usuario';
import { UsuarioUseCase } from '../../domain/usecase/usecase-usuario';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css'],
  providers:[ConfirmationService]
})
export class ListaUsuarioComponent implements OnInit {
  usuarios:Usuario[]=[];
  cols: any[] = []
  ProductoID: number = 0
  displayBasic: boolean = false;
  msgs: any[] = [];
  position: string = '';

  @ViewChild(FormProductoComponent) formulario!: FormProductoComponent
  constructor(  private _usuarioUseCase:UsuarioUseCase) { }

  ngOnInit() {
this._usuarioUseCase.getAllEntrega(1).subscribe({
  next: (res) => {
    this.usuarios = res.map((element: Usuario) => {
      return this.mapData(element)
    });
  }, error: (error) => { console.log(error) }
})
this.cols = [
  { field: 'Nombre', header: 'Nombre Completo' },
  { field: 'Telefono', header: 'Telefono' },
  { field: 'TipoUsuario', header: 'Tipo de usuario' },

];
}

mapData(data: Usuario) {

  return {
    Nombre: `${data.Perfil?.Nombre} ${data.Perfil?.Apellido1} ${data.Perfil?.Apellido2}`,
    Telefono:  data.Telefono,
    TipoUsuario:data.Rol?.Descripcion
  }
}

  Reload(_event: any) {
    this.ngOnInit()
  }
}
