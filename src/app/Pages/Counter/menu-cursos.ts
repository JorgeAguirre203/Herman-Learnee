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

  cursos = [1,2,3,4,5,6]; // ejemplo, puedes cambiarlo

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
