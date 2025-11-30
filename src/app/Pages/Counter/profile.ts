import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  
  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/']); // te lleva al index principal
  }

}
