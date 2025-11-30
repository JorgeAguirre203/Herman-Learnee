import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.html',
  styleUrls: ['./registrarse.css']
})
export class Registrarse {


  
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/Login']);
  }
}
