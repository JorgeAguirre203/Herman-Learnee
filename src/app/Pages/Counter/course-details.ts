import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-course-details',
  imports: [CommonModule],
  templateUrl: './course-details.html',
  styleUrls: ['./course-details.css']
})
export class CourseDetailsComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // ⭐ Todos los cursos definidos aquí
  cursos = [
    {
      id: 1,
      titulo: 'Python - Para Principiantes',
      descripcion: 'Aprende instrucciones y algoritmos en Python.',
      video: 'https://www.youtube.com/embed/4KEiLt6BeKM',
      imagen: 'assets/imagenes/python.jpeg'
    },
    {
      id: 2,
      titulo: 'JavaScript Desde Cero',
      descripcion: 'Domina JS moderno con ejemplos reales.',
      video: 'https://www.youtube.com/embed/PkZNo7MFNFg',
      imagen: 'assets/imagenes/js.jpeg'
    },
    {
      id: 3,
      titulo: 'SQL Profesional',
      descripcion: 'Consultas, joins y bases de datos completas.',
      video: 'https://www.youtube.com/embed/27axs9dO7AE',
      imagen: 'assets/imagenes/sql.jpeg'
    },
    {
      id: 4,
      titulo: 'HTML y CSS Moderno',
      descripcion: 'Crea páginas web modernas paso a paso.',
      video: 'https://www.youtube.com/embed/mU6anWqZJcc',
      imagen: 'assets/imagenes/html.jpeg'
    },
    {
      id: 5,
      titulo: 'C++ Desde Cero',
      descripcion: 'Algoritmos, POO y estructuras de datos.',
      video: 'https://www.youtube.com/embed/vLnPwxZdW4Y',
      imagen: 'assets/imagenes/cpp.jpeg'
    },
    {
      id: 6,
      titulo: 'Redes y Comunicaciones',
      descripcion: 'TCP/IP, OSI y herramientas de red.',
      video: 'https://www.youtube.com/embed/IPv6XkR0O9I',
      imagen: 'assets/imagenes/redes.jpeg'
    }
  ];

  cursoSeleccionado: any = null;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Buscar curso según ID
    this.cursoSeleccionado = this.cursos.find(c => c.id === id);

    if (!this.cursoSeleccionado) {
      console.warn('Curso no encontrado, ID:', id);
    }
  }

  navigate() {
    this.router.navigate(['/menu-cursos']);
  }
}
