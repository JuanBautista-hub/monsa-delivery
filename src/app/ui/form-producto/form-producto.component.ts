import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { ProductoService } from 'src/app/infraestructure/service/producto.service';
import { PrimeIcons } from "primeng/api";
import { DatePipe } from '@angular/common'
import { Entrega, Estatus } from 'src/app/domain/models/Entrega';
import { Usuario } from 'src/app/domain/models/Usuario';
import { RecursoService } from 'src/app/infraestructure/service/recurso.service';
import { UsuarioUseCase } from 'src/app/domain/usecase/usecase-usuario';
@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss']
})
export class FormProductoComponent implements OnInit {
  events1: any[] = [];

  products?: Entrega;
  empleado?: Usuario;
  cliente?: Usuario;
  asignarcliente: boolean = false;
  asignarempleado: boolean = false;
  submitted: boolean = false;
  formProducto: FormGroup = new FormGroup({});
  fotoEmpleado: string = "";
  fotoCliente: string = ""
  @Input('EntregaID') EntregaID: number = 0

  @Output() action = new EventEmitter<string>();
  displayBasic: boolean = false;
  usuariosempleados: any[] = [];
  usuariosclientes: any[] = [];
  position: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private primengConfig: PrimeNGConfig,
    private productoService: ProductoService,
    private service: MessageService, public datepipe: DatePipe,
    private recurso: RecursoService, private _usuarioUseCase: UsuarioUseCase,
    private confirmationService: ConfirmationService,) { }

  ngOnInit(): void {

    this.formProducto = this.formBuilder.group({
      empleado: ["",],
      cliente: ["",],
    });
  }

  mapData(data: Usuario) {

    return {
      Nombre: `${data.Perfil?.Nombre} ${data.Perfil?.Apellido1} ${data.Perfil?.Apellido2}`,
      Telefono: data.Telefono,
      TipoUsuario: data.RolID,
      UsuarioID: data.UsuarioID
    }
  }
GenerarGuia(){


}
  listaClientes() {
    this._usuarioUseCase.getAllEntrega(2).subscribe({
      next: (res) => {
        this.usuariosclientes = res.map((element: Usuario) => {
          return this.mapData(element)
        });
      }, error: (error) => { console.log(error) }
    })
    this.asignarcliente = true;
  }

  listaUsuarios() {
    this._usuarioUseCase.getAllEntrega(1).subscribe({
      next: (res) => {
        this.usuariosempleados = res.map((element: Usuario) => {
          return this.mapData(element)
        });
      }, error: (error) => { console.log(error) }
    })
    this.asignarempleado = true;

  }
  Save() {
    this.confirmationService.confirm({
      message: 'Los datos son correctos?',
      header: 'Confirmación',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.onSubmit()
      },
      reject: () => {

        this.service.add({ key: 'info', severity: 'info', summary: 'Se ha cancelado correctamente la vinculación de usuarios', detail: '' });
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    if(this.formProducto.value.empleado >0){
      let saveempleado = {
        UsuarioID: this.formProducto.value.empleado,
        EntregaID: this.products?.EntregaID

      }
      this.productoService.VincularEntrega(saveempleado).subscribe((res)=>{
        this.displayBasic = false
        this.action.emit();
        this.service.add({ key: 'info', severity: 'info', summary: 'Repuesta', detail: "Empleado vinculado correctamente"});

      })
    }
    if(this.formProducto.value.cliente >0){
      let savecliente = {
        UsuarioID: this.formProducto.value.cliente,
        EntregaID: this.products?.EntregaID
      }
      this.productoService.VincularEntrega(savecliente).subscribe((res)=>{
        this.displayBasic = false
        this.action.emit();
        this.service.add({ key: 'info', severity: 'info', summary: 'Repuesta', detail: "Empleado vinculado correctamente" });

      })
    }



  }

  ProductEdit() {

    this.productoService.getProductoByID(this.EntregaID).subscribe((res: Entrega) => {
      this.products = res;

      this.empleado = res.Usuarios?.find((em) => em.RolID == 1);
      this.cliente = res.Usuarios?.find((em) => em.RolID == 2);
      this.fotoEmpleado = "assets/default.png"//this.recurso.getByID(this.empleado?.Avatar||"");
      this.events1 = res!.Estatuses!.map((data: Estatus) => {
        if (!this.cliente) {
          this.asignarcliente = false;
        }
        if (!this.cliente) {
          this.asignarempleado = false;
        }
        return {
          status: data.Descripcion,
          date: this.datepipe.transform(data.EntregaEstatus?.Fecha, 'yyyy-MM-dd hh:mm a'),
          icon: PrimeIcons.CAR,
          color: "#607D8B"
        }
      })
      console.log(res)
    })
  }
}

