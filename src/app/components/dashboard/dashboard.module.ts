import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportesComponent } from './reportes/reportes.component';
import { InicioComponent } from './inicio/inicio.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    NavbarComponent,
    ReportesComponent,
    InicioComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
