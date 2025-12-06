import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
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
  

}
