import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';



//Componentes
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';
import { FourFourComponent } from './components/four-four/four-four.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FourFourComponent
  ],
  imports: [
    AuthModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-n7di-wym.us.auth0.com',
      clientId: 'J2nbsGEjeLHa4c5V9eLwnHmhnJNp7eBz'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
