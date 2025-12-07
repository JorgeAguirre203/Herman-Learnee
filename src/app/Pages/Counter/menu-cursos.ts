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

  setFilter(type: string) {
    this.selectedFilter = type;
  }

    constructor(private router: Router) {}

  goTomenu() {
    this.router.navigate(['/menu-cursos']);
  }
  goToLogin() {
    this.router.navigate(['/Login']);
  }

  goToRegistrarse() {
    this.router.navigate(['/registrarse']);
  }



  
  }
  


