import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './ui/cliente/cliente.component';
import { FormClienteComponent } from './ui/direccion/form-direccion.component';
import { FormProductoComponent } from './ui/form-producto/form-producto.component'
import { ListaProductoComponent } from './ui/lista-entregas/lista-producto.component';
import { ListaUsuarioComponent } from './ui/lista-usuario/lista-usuario.component';

const routes: Routes = [
{path:'producto',component:FormProductoComponent},
{path:'lista-producto',component:ListaProductoComponent},
{path:'lista-usuario',component:ListaUsuarioComponent},
{path:'lista-cliente',component:FormClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
