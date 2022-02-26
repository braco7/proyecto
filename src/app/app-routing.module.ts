import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FourFourComponent } from './components/four-four/four-four.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent
  },
  {
    path: "", redirectTo: "login", pathMatch: "full"
  },
  {
    path: "dashboard",
    loadChildren: () => import("../app/components/dashboard/dashboard.module").then(x => x.DashboardModule)
  },
  {
    path: "**", component: FourFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
