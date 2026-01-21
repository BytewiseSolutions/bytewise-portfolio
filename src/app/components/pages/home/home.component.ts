import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent {
  imageLoading = {
    profile: true,
    agric: true,
    intern: true,
    fansdor: true
  };

  onImageLoad(imageKey: string) {
    this.imageLoading[imageKey as keyof typeof this.imageLoading] = false;
  }

  onImageError(event: any) {
    event.target.src = '/logo.png';
  }
}
