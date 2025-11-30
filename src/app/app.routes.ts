import { Routes } from '@angular/router';
import { CounterPageComponent } from './Pages/Counter-Page.Component';
import { Index } from './Pages/Counter/Index';
import { Login } from './Pages/Counter/Login';
import { Registrarse } from "./Pages/Counter/registrarse";

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
];
