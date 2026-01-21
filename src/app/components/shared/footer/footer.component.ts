import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NewsletterComponent } from '../newsletter/newsletter.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule, NewsletterComponent, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  showFollowDialog = false;
  followers = 0;
  isLoadingFollowers = true;
  footerEmail: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchFollowerCount();
  }

  async fetchFollowerCount() {
    try {
      // Set the actual current follower count
      this.followers = 19; // Current actual follower count
      
      // Simulate loading delay for better UX
      await new Promise(resolve => setTimeout(resolve, 800));
      this.isLoadingFollowers = false;
    } catch (error) {
      console.error('Failed to fetch follower count:', error);
      this.followers = 19; // Fallback to actual count
      this.isLoadingFollowers = false;
    }
  }

  openFollowDialog() {
    this.showFollowDialog = true;
  }

  closeFollowDialog() {
    this.showFollowDialog = false;
  }

  followPage() {
    window.open('https://www.facebook.com/profile.php?id=100094670365232', '_blank');
    this.closeFollowDialog();
  }

  sharePage() {
    const url = 'https://www.facebook.com/profile.php?id=100094670365232';
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
  
  subscribeFooterNewsletter(event: Event) {
    event.preventDefault();
    
    if (!this.footerEmail || !this.footerEmail.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    
    const subject = 'Newsletter Subscription';
    const body = `I would like to subscribe to your newsletter.%0D%0A%0D%0AMy email: ${this.footerEmail}`;
    window.location.href = `mailto:monamane.lebohang45@gmail.com?subject=${subject}&body=${body}`;
    
    this.footerEmail = '';
  }
}
