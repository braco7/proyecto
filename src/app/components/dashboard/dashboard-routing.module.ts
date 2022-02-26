import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent, children: [
      {
        path: "", component: InicioComponent
      },
      {
        path: "usuarios", component: UsuariosComponent
      },
      {
        path: "reportes", component: ReportesComponent
      },
      {
        path: "edituser", component: EditUserComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
