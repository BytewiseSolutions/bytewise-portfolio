import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  imageLoading = {
    profile: true,
    agric: true,
    intern: true,
    fansdor: true
  };

  typedText = '';
  roles = ['Software Developer', 'Full Stack Developer', 'Mobile App Developer', 'Problem Solver'];
  currentRoleIndex = 0;
  isDeleting = false;
  selectedImage: string | null = null;

  stats = [
    { icon: 'fas fa-project-diagram', value: 15, label: 'Projects Completed', suffix: '+' },
    { icon: 'fas fa-code', value: 20, label: 'Technologies', suffix: '+' },
    { icon: 'fas fa-users', value: 10, label: 'Happy Clients', suffix: '+' },
    { icon: 'fas fa-clock', value: 3, label: 'Years Experience', suffix: '+' }
  ];

  ngOnInit() {
    this.typeEffect();
    this.animateStats();
  }

  typeEffect() {
    const currentRole = this.roles[this.currentRoleIndex];
    
    if (!this.isDeleting && this.typedText === currentRole) {
      setTimeout(() => {
        this.isDeleting = true;
        this.typeEffect();
      }, 2000);
      return;
    }
    
    if (this.isDeleting && this.typedText === '') {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      setTimeout(() => this.typeEffect(), 500);
      return;
    }

    this.typedText = this.isDeleting 
      ? currentRole.substring(0, this.typedText.length - 1)
      : currentRole.substring(0, this.typedText.length + 1);

    setTimeout(() => this.typeEffect(), this.isDeleting ? 50 : 100);
  }

  animateStats() {
    this.stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        stat.value = Math.floor(current);
      }, 30);
    });
  }

  onImageLoad(imageKey: string) {
    this.imageLoading[imageKey as keyof typeof this.imageLoading] = false;
  }

  onImageError(event: any) {
    event.target.src = '/logo.png';
  }

  openImage(imageSrc: string) {
    this.selectedImage = imageSrc;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
