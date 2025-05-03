import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // <-- Import RouterModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterModule]  
})
export class NavbarComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    const navbarLinks = document.querySelector('.navbar-links') as HTMLElement;
    if (this.isMenuOpen) {
      navbarLinks.classList.add('active');
    } else {
      navbarLinks.classList.remove('active');
    }
  }
}
