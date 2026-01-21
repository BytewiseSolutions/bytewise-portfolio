import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterModule, CommonModule, FormsModule]  
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  showSearch: boolean = false;
  searchQuery: string = '';

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    const navbarLinks = document.querySelector('.navbar-links') as HTMLElement;
    if (this.isMenuOpen) {
      navbarLinks.classList.add('active');
    } else {
      navbarLinks.classList.remove('active');
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    const navbarLinks = document.querySelector('.navbar-links') as HTMLElement;
    navbarLinks.classList.remove('active');
  }
  
  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchQuery = '';
    }
  }
  
  search() {
    if (this.searchQuery.trim()) {
      // Navigate to blog with search query
      this.router.navigate(['/blog'], { queryParams: { q: this.searchQuery } });
      this.showSearch = false;
      this.searchQuery = '';
    }
  }

  openWhatsApp() {
    const message = "Hi! I'd like to connect with you.";
    window.open(`https://wa.me/26659181664?text=${encodeURIComponent(message)}`, '_blank');
  }
}
