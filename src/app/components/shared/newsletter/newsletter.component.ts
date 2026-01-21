import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {
  email: string = '';
  subscribed: boolean = false;
  error: string = '';

  subscribe() {
    if (!this.email || !this.email.includes('@')) {
      this.error = 'Please enter a valid email address';
      return;
    }
    
    // Simulate subscription (in real app, call API)
    this.subscribed = true;
    this.error = '';
    
    setTimeout(() => {
      this.subscribed = false;
      this.email = '';
    }, 3000);
  }
}
