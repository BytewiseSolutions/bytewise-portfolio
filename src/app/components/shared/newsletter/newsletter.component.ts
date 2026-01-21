import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

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
  loading: boolean = false;

  subscribe() {
    if (!this.email || !this.email.includes('@')) {
      this.error = 'Please enter a valid email address';
      return;
    }

    this.loading = true;
    this.error = '';

    const templateParams = {
      subscriber_email: this.email,
      to_email: 'monamane.lebohang45@gmail.com',
      message: `New newsletter subscription from: ${this.email}`
    };

    emailjs.send(
      'service_8knychp',
      'template_me3eahn',
      templateParams,
      'Tgpg5Y0bWXYlsH458'
    )
    .then(() => {
      this.subscribed = true;
      this.loading = false;

      setTimeout(() => {
        this.subscribed = false;
        this.email = '';
      }, 5000);
    })
    .catch((error) => {
      console.error('Newsletter subscription failed:', error);
      this.error = 'Subscription failed. Please try again.';
      this.loading = false;
    });
  }
}
