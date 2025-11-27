import { Routes } from '@angular/router';
import { CounterPageComponent } from './Pages/Counter-Page.Component';
import { Index } from './Pages/Counter/Index';
import { Login } from './Pages/Counter/Login';
export const routes: Routes = [

  {
    path: '',
    component: Index,
  },
  {
    path: 'login',
    component: Login,
  },
  
]
