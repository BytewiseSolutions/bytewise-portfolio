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
      link: 'https://github.com/BytewiseSolutions/ls-agri-info',
      caseStudy: {
        challenge: 'Farmers in Lesotho lacked access to timely agricultural information and weather updates.',
        solution: 'Built a responsive web application with real-time data integration and SMS notifications.',
        results: '500+ active users, 40% increase in crop yield awareness',
        technologies: ['Angular', 'Node.js', 'MySQL', 'SMS API']
      }
    },
    {
      title: 'Fans Dor',
      description: 'A very minimal website with focus being on beautiful branding as we aim for the global market.',
      image: 'fansdor.png',
      link: 'https://github.com/BytewiseSolutions/voting-system',
      caseStudy: {
        challenge: 'Client needed a modern, minimalist brand presence to enter global markets.',
        solution: 'Designed and developed a clean, fast-loading website with focus on brand storytelling.',
        results: '95+ PageSpeed score, 60% increase in engagement',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
      }
    },
    {
      title: 'Total Free Lotto',
      description: 'TotalFreeLotto is a first-of-its-kind, web-based lottery platform where anyone can play completely free and still stand a chance to win real money',
      image: 'totalfree.png',
      link: 'https://github.com/BytewiseSolutions/primary-school',
      caseStudy: {
        challenge: 'School needed to digitize student records, attendance, and grade management.',
        solution: 'Developed comprehensive school management system with role-based access control.',
        results: '300+ students managed, 70% reduction in administrative time',
        technologies: ['Angular', 'PHP', 'MySQL']
      }
    },
    {
      title: 'Internship Management System',
      description: 'A system for managing stock levels in a small retail store.',
      image: 'internship_img.PNG',
      link: 'https://github.com/BytewiseSolutions/internship-system',
      caseStudy: {
        challenge: 'Organization struggled with manual internship application and tracking processes.',
        solution: 'Created automated system for application submission, review, and progress tracking.',
        results: '200+ applications processed, 80% faster processing time',
        technologies: ['Angular', 'Firebase', 'TypeScript']
      }
    }
  ];
  
  selectedProject: any = null;
  
  viewCaseStudy(project: any) {
    this.selectedProject = project;
  }
  
  closeCaseStudy() {
    this.selectedProject = null;
  }
}
