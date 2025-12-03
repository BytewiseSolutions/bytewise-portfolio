import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name = 'Lebohang Monamane';
  title = 'Software Engineer & Developer';
  bio = `
    I am a passionate and solution-oriented software engineer with experience in 
    building web and mobile applications. I enjoy turning complex problems into simple, 
    elegant solutions, and I am always eager to learn new technologies and collaborate 
    on meaningful projects.
  `;

  skillsSummary = [
    'Full-stack development',
    'Agile methodology',
    'Database design',
    'Cloud technologies (Firebase & AWS Amazon)',
    'UI/UX principles'
  ];
}
