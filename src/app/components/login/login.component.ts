import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  mensajeError: string = "Usuario o Contraseña inválido"
  accionBoton: string = "Ok"
  loading: boolean = false

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public auth: AuthService,
    private router: Router,
    @Inject(DOCUMENT) private doc: Document) {

    this.form = this.fb.group({
      user: ["", Validators.required],
      pw: ["", Validators.required]

    })
  }

  ngOnInit(): void {
  }

  ingresar() {
    const usuario = this.form.value.user
    const pw = this.form.value.pw
    if (usuario == "fran" && pw == "123") {
      console.log("exitoso")
      this.fakeloading()
      //this.auth.loginWithRedirect()
      this.form.reset()
      this.router.navigate(['dashboard'])
    } else {
      this._snackBar.open(this.mensajeError, this.accionBoton);
      this.form.reset()
    }

  }

  fakeloading() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 3000);
  }

  openSnackBar(message: string, action: string) {

  }

  logout() {
    this.auth.logout({ returnTo: this.doc.location.origin })
  }


}
