import { Routes } from '@angular/router';
import { CounterPageComponent } from './Pages/Counter-Page.Component';
import { Index } from './Pages/Counter/Index';
import { Login } from './Pages/Counter/Login';
import { Registrarse } from "./Pages/Counter/registrarse";
import { ProfileComponent } from './Pages/Counter/profile';
import { CoursesComponent } from './Pages/Counter/menu-cursos';
import { CourseDetailsComponent } from './Pages/Counter/course-details';

export const routes: Routes = [

  // Página principal
  {
    path: '',
    component: Index,
  },

  // Login
  {
    path: 'Login',
    component: Login,
  },

  // Registro
  {
    path: 'registrarse',
    component: Registrarse,
  },

  // Vista de cursos
  {
    path: 'menu-cursos',
    component: CoursesComponent,
  },

  // Perfil del usuario
  {
    path: 'perfil',
    component: ProfileComponent,
  },

  // ⭐⭐ Ruta dinámica para detalles del curso
  // cada curso será: /curso/1, /curso/2, /curso/3, etc.
  {
    path: 'curso/:id',
    component: CourseDetailsComponent,
  },

  // Redirección en caso de rutas inexistentes
  {
    path: '**',
    redirectTo: '',
  }

];
