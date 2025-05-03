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
        { name: 'Flutter', iconClass: 'fab fa-google' }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Java', iconClass: 'fab fa-java' },
        { name: 'C++', iconClass: 'fas fa-code' },
        { name: 'C#', iconClass: 'fas fa-code' },
        { name: 'Python', iconClass: 'fab fa-python' },
        { name: 'SQL', iconClass: 'fas fa-database' },
        { name: 'PHP', iconClass: 'fab fa-php' },
        { name: 'Oracle', iconClass: 'fas fa-database' },
                { name: 'SQL', iconClass: 'fas fa-database' },
        { name: 'PHP', iconClass: 'fab fa-php' },
        { name: 'Oracle', iconClass: 'fas fa-database' }
      ]
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Android', iconClass: 'fab fa-android' },
        { name: 'Git & GitHub', iconClass: 'fab fa-github' },
        { name: 'VS Code', iconClass: 'fas fa-code' },
        { name: 'Firebase', iconClass: 'fas fa-fire' }
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
