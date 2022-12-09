import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './ui/login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AdminInterceptor } from './interceptor/admin-interceptors';
import { SuscriptoresComponent } from './suscriptores/suscriptores.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

import { PasswordModule } from 'primeng/password';
import { FormProductoComponent } from './ui/form-producto/form-producto.component';
import { ListaProductoComponent } from './ui/lista-entregas/lista-producto.component';
import { DialogModule } from "primeng/dialog";
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabMenuModule} from 'primeng/tabmenu';

import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ToolbarComponent } from './ui/toolbar/toolbar.component';

import { ToolbarModule } from 'primeng/toolbar';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

import { PanelMenuModule } from 'primeng/panelmenu';
import { EntregaGateway,  } from './domain/interface/EntregaGateway';
import { ProductoService } from './infraestructure/service/producto.service';
import { ListaUsuarioComponent } from './ui/lista-usuario/lista-usuario.component';
import { UsuarioGateway } from './domain/interface/UsuarioGateway';
import { UsuarioService } from './infraestructure/service/usuario.service';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';
import { DatePipe } from '@angular/common';
import { ClienteComponent } from './ui/cliente/cliente.component';
import { FormClienteComponent } from './ui/direccion/form-direccion.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuscriptoresComponent,
    FormProductoComponent,
    ListaProductoComponent,
    ToolbarComponent,
    ListaUsuarioComponent,
    ClienteComponent,
    FormClienteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule,
    TabMenuModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ToolbarModule,
    MegaMenuModule,
 MenuModule,
MenubarModule,
PanelMenuModule,
TimelineModule,
CardModule,
AvatarModule
  ],
  providers: [DatePipe,{provide: HTTP_INTERCEPTORS, useClass: AdminInterceptor, multi: true, },{provide:EntregaGateway ,useClass:ProductoService},
    {provide:UsuarioGateway ,useClass:UsuarioService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
