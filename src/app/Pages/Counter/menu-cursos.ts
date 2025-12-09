import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-courses',
  templateUrl: './menu-cursos.html',
  styleUrls: ['./menu-cursos.css']
  
})

export class CoursesComponent {

   selectedFilter = 'recent';

  // ⭐ Arreglo SIN backend: cada curso tiene su imagen
  cursos = [
    { id: 1, titulo: "Curso de Python", precio: 0, imagen: "/imagenes/python.jpeg" },
    { id: 2, titulo: "JavaScript Básico", precio: 0, imagen: "/imagenes/images.jpeg" },
    { id: 3, titulo: "HTML & CSS", precio: 0, imagen: "assets/imagenes/html.jpeg" },
    { id: 4, titulo: "SQL para Principiantes", precio: 0, imagen: "assets/imagenes/sql.jpeg" },
    { id: 5, titulo: "C++ Desde Cero", precio: 0, imagen: "assets/imagenes/cpp.jpeg" },
    { id: 6, titulo: "Redes y TCP/IP", precio: 0, imagen: "assets/imagenes/redes.jpeg" }
  ];



  constructor(private router: Router) {}

  setFilter(type: string) {
    this.selectedFilter = type;
  }

  goTomenu() {
    this.router.navigate(['/menu-cursos']);
  }

  goToLogin() {
    this.router.navigate(['/Login']);
  }

  goToRegistrarse() {
    this.router.navigate(['/registrarse']);
  }

  navigate() {
    this.router.navigate(['/']); // index
  }

  // ⭐ NUEVO: función que se ejecuta al hacer click en una card
  openCard(id: number) {
    console.log("Card seleccionada:", id);
    this.router.navigate(['/curso', id]);   // cambia la ruta a lo que tú uses
  }

}
