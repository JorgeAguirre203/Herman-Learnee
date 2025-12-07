import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterModule],
  styleUrls: ['./index.css'],
  template: `
  <div class="container">

  <!-- Barra superior -->
  <header class="top-bar">
    <div class="logo-placeholder">Learne</div>

    <input type="text" placeholder="Buscar cursos" class="search-input" aria-label="Buscar cursos">

    <div class="top-buttons">
      <button class="btn" (click)="toggleDarkMode()">
        {{ isDarkMode ? 'Modo claro' : 'Modo oscuro' }}
      </button>
      <button class="btn black" (click)="goTomenu()">Cursos</button>
      <button class="btn black" (click)="goToRegistrarse()">Registrarse</button>
      <button class="btn black" (click)="goToLogin()">Iniciar sesión</button>
    </div>
  </header>

  <!-- Layout principal -->
  <div class="main-layout">

    <!-- Izquierda: Banner -->
    <div class="main-banner">
      <div class="tag">¡Completamente Gratis!</div>
      <div class="banner-content">
        <div class="banner-title">Minijuegos de programación<br>Desde 0</div>
        <div class="banner-sub">Empieza hoy y aprende jugando</div>
        <button class="cta-button" (click)="goTomenu()" aria-label="Comenzar ahora">Comenzar ahora</button>
      </div>
    </div>

    <!-- Derecha: Aprende / Enseña -->
    <div class="side-boxes">

      <div class="card-learn">
        <h2>Aprende</h2>
        <p>✔ Rápido</p>
        <p>✔ Intuitivo</p>
        <p>✔ Divertido</p>
        <p>✔ Progresivo</p>
      </div>

      <div class="card-teach">
        <h2>Enseña</h2>
        <p>Crea tus cursos</p>
        <p>Estructura tus temas</p>
        <p>Con herramientas sencillas</p>
      </div>

    </div>
  </div>

  <!-- Tarjetas de cursos -->
  <section class="course-cards">

    <div class="course-card">
      <h3>Java</h3>
      <p>Curso de Java para principiantes</p>
      <small>Por [Autor]</small>
    </div>

    <div class="course-card">
      <h3>POO</h3>
      <p>Curso de programación orientada a objetos</p>
      <small>Por [Autor]</small>
    </div>

  </section>

  <!-- Botones inferiores -->
  <section class="bottom-buttons">
    <button class="big-button black">Crear cursos</button>
    <button class="big-button black">Mis cursos</button>
  </section>

</div>
  `
})
export class Index {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/Login']);
  }

  goToRegistrarse() {
    this.router.navigate(['/registrarse']);
  }

  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  goTomenu() {
    this.router.navigate(['/menu-cursos']);
  }
}
