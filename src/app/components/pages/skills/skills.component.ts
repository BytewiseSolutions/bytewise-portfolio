import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  selectedCategory = 'All';

  skillGroups = [
    {
      category: 'Frontend',
      skills: [
         { name: 'HTML & CSS', iconClass: 'fab fa-html5' },      
        { name: 'JavaScript', iconClass: 'fab fa-js' },         
        { name: 'React JS', iconClass: 'fab fa-react' },        
        { name: 'Angular', iconClass: 'fab fa-angular' },       
        { name: 'Flutter', iconClass: 'fas fa-mobile-alt' },    
        { name: 'WordPress', iconClass: 'fab fa-wordpress' },  
        { name: 'Bootstrap', iconClass: 'fab fa-bootstrap' },   
        { name: 'Material UI', iconClass: 'fas fa-palette' } 
      ]
    },
    {
      category: 'Backend',
      skills: [
         { name: 'Node Js', iconClass: 'fab fa-node-js' },       // Node.js
        { name: 'Java', iconClass: 'fab fa-java' },              // Java
        { name: 'C++', iconClass: 'fas fa-code' },               // Generic code
        { name: 'C#', iconClass: 'fas fa-code' },                // Generic code
        { name: 'Python (Flask)', iconClass: 'fab fa-python' },  // Python
        { name: 'SQL', iconClass: 'fas fa-database' },           // Database
        { name: 'PHP', iconClass: 'fab fa-php' },                // PHP
        { name: 'Oracle', iconClass: 'fas fa-database' },        // Database
        { name: 'DynamoDB', iconClass: 'fas fa-database' },      // No official icon
        { name: 'MongoDB', iconClass: 'fas fa-leaf' },           // MongoDB (leaf icon as alternative)
        { name: 'MySQL', iconClass: 'fas fa-database' },         // MySQL
        {name: 'Spring Boot', iconClass: 'fab fa-java'}          // Spring boot 
      ]
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Android', iconClass: 'fab fa-android' },
        { name: 'Git & GitHub', iconClass: 'fab fa-github' },
        { name: 'VS Code', iconClass: 'fas fa-code' },
        { name: 'Firebase', iconClass: 'fas fa-fire' },
        { name: 'AWS Amazon', iconClass: 'fas fa-fire' }
      ]
    }
  ];

  get filteredGroups() {
    if (this.selectedCategory === 'All') return this.skillGroups;
    return this.skillGroups.filter(group => group.category === this.selectedCategory);
  }

  get categories() {
    return ['All', ...this.skillGroups.map(group => group.category)];
  }
}
