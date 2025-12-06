import { Routes } from '@angular/router';
import { CounterPageComponent } from './Pages/Counter-Page.Component';
import { Index } from './Pages/Counter/Index';
import { Login } from './Pages/Counter/Login';
import { Registrarse } from "./Pages/Counter/registrarse";
import { ProfileComponent } from './Pages/Counter/profile';
import { CoursesComponent } from './Pages/Counter/menu-cursos';
export const routes: Routes = [
  {
    path: '',
    component: Index,
  },
  {
    path: 'Login',
    component: Login,
  },
  {
    path: 'registrarse',
    component: Registrarse,
  },
   {
    path: 'menu-cursos',
    component: CoursesComponent,
  },
  {
  path: "perfil",
  component: ProfileComponent,
  
},

];
