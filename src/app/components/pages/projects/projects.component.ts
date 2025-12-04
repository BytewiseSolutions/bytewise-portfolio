import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Agricultural Info Web App',
      description: 'A platform providing real-time agricultural updates for Lesotho farmers.',
      image: 'agric.PNG',
      link: 'https://github.com/BytewiseSolutions/ls-agri-info'
    },
    {
      title: 'Fans Dor',
      description: 'A very minimal website with focus being on beautiful branding as we aim for the global market.',
      image: 'fansdor.PNG',
      link: 'https://github.com/BytewiseSolutions/voting-system'
    },
    {
      title: 'Primary School',
      description: 'A full web-based school management system.',
      image: 'primary.PNG',
      link: 'https://github.com/BytewiseSolutions/primary-school'
    },
    {
      title: 'Internship Management System',
      description: 'A system for managing stock levels in a small retail store.',
      image: 'internship_img.PNG',
      link: 'https://github.com/BytewiseSolutions/internship-system'
    }
  ];
}
