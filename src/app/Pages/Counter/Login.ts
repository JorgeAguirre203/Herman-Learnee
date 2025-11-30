import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Registrarse } from "./registrarse";
@Component({
    standalone: true,
    template: `
<div class="header">
  <input type="text" class="search-bar" placeholder="Buscar cursos">
</div>

<h1 class="title">Inicio de sesión</h1>

<div class="login-card">
  <label class="label">Correo:</label>
  <input type="email" class="input">

  <label class="label">Contraseña:</label>
  <input type="password" class="input">

  <button class="btn-primary">Iniciar sesión</button>
  <button class="btn-secondary">Volver</button>
</div>

<div class="register-box">
  <span>¿No tienes una cuenta?</span>
<a class="register-link" (click)="goToRegistrarse()">Registrarte</a>

</div>
`,
    styleUrls: ['./login.css']
})
export class Login {

  constructor(private router: Router) {}

  goToRegistrarse() {
    this.router.navigate(['/registrarse']);
  }
}

