import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-skills',
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  selectedCategory = 'All';
  searchQuery = '';

  skillGroups = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML & CSS', iconClass: 'fab fa-html5', level: 'Expert', years: 5, color: '#E34F26', description: 'Building responsive and accessible web interfaces' },
        { name: 'JavaScript', iconClass: 'fab fa-js', level: 'Expert', years: 5, color: '#F7DF1E', description: 'Modern ES6+ JavaScript development' },
        { name: 'React JS', iconClass: 'fab fa-react', level: 'Expert', years: 3, color: '#61DAFB', description: 'Building dynamic single-page applications' },
        { name: 'Angular', iconClass: 'fab fa-angular', level: 'Expert', years: 4, color: '#DD0031', description: 'Enterprise-level web applications' },
        { name: 'Flutter', iconClass: 'fas fa-mobile-alt', level: 'Expert', years: 2, color: '#02569B', description: 'Cross-platform mobile app development' },
        { name: 'WordPress', iconClass: 'fab fa-wordpress', level: 'Advanced', years: 3, color: '#21759B', description: 'Custom themes and plugin development' },
        { name: 'Bootstrap', iconClass: 'fab fa-bootstrap', level: 'Expert', years: 4, color: '#7952B3', description: 'Rapid UI development with Bootstrap framework' },
        { name: 'Material UI', iconClass: 'fas fa-palette', level: 'Advanced', years: 2, color: '#0081CB', description: 'Material Design implementation' }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', iconClass: 'fab fa-node-js', level: 'Advanced', years: 3, color: '#339933', description: 'Server-side JavaScript development' },
        { name: 'Java', iconClass: 'fab fa-java', level: 'Expert', years: 4, color: '#007396', description: 'Enterprise Java applications' },
        { name: 'C++', iconClass: 'fas fa-code', level: 'Intermediate', years: 2, color: '#00599C', description: 'System programming and algorithms' },
        { name: 'C#', iconClass: 'fas fa-code', level: 'Intermediate', years: 2, color: '#239120', description: '.NET application development' },
        { name: 'Python (Flask)', iconClass: 'fab fa-python', level: 'Expert', years: 3, color: '#3776AB', description: 'Web APIs and data processing' },
        { name: 'SQL', iconClass: 'fas fa-database', level: 'Expert', years: 5, color: '#4479A1', description: 'Database design and optimization' },
        { name: 'PHP', iconClass: 'fab fa-php', level: 'Expert', years: 4, color: '#777BB4', description: 'Server-side web development' },
        { name: 'Oracle', iconClass: 'fas fa-database', level: 'Intermediate', years: 2, color: '#F80000', description: 'Oracle database management' },
        { name: 'DynamoDB', iconClass: 'fas fa-database', level: 'Intermediate', years: 1, color: '#4053D6', description: 'NoSQL database on AWS' },
        { name: 'MongoDB', iconClass: 'fas fa-leaf', level: 'Advanced', years: 3, color: '#47A248', description: 'Document-based NoSQL database' },
        { name: 'MySQL', iconClass: 'fas fa-database', level: 'Expert', years: 5, color: '#4479A1', description: 'Relational database management' },
        { name: 'Spring Boot', iconClass: 'fab fa-java', level: 'Advanced', years: 3, color: '#6DB33F', description: 'Java microservices framework' }
      ]
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Android', iconClass: 'fab fa-android', level: 'Expert', years: 3, color: '#3DDC84', description: 'Native Android app development' },
        { name: 'Git & GitHub', iconClass: 'fab fa-github', level: 'Expert', years: 5, color: '#181717', description: 'Version control and collaboration' },
        { name: 'VS Code', iconClass: 'fas fa-code', level: 'Expert', years: 5, color: '#007ACC', description: 'Primary development environment' },
        { name: 'Firebase', iconClass: 'fas fa-fire', level: 'Expert', years: 3, color: '#FFCA28', description: 'Backend-as-a-Service platform' },
        { name: 'AWS', iconClass: 'fab fa-aws', level: 'Intermediate', years: 2, color: '#FF9900', description: 'Cloud infrastructure and services' }
      ]
    }
  ];

  certifications = [
    { name: 'Python Programming Certificate', issuer: 'Programming Certification', year: 2023, icon: 'fab fa-python' }
  ];

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.setMetaTags();
  }

  setMetaTags() {
    this.title.setTitle('Skills - Lebohang Monamane | Portfolio');
    this.meta.updateTag({ name: 'description', content: 'Explore my technical skills including frontend, backend, and tools. Expert in Angular, React, Java, PHP, and more.' });
    this.meta.updateTag({ name: 'keywords', content: 'Angular, React, Java, PHP, Node.js, MySQL, MongoDB, AWS, skills, expertise' });
    this.meta.updateTag({ property: 'og:title', content: 'Skills - Lebohang Monamane' });
    this.meta.updateTag({ property: 'og:description', content: 'Technical skills and expertise in web and mobile development' });
  }

  get filteredGroups() {
    let groups = this.selectedCategory === 'All' ? this.skillGroups : this.skillGroups.filter(group => group.category === this.selectedCategory);
    
    if (this.searchQuery) {
      groups = groups.map(group => ({
        ...group,
        skills: group.skills.filter(skill => 
          skill.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          skill.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      })).filter(group => group.skills.length > 0);
    }
    
    return groups;
  }

  get categories() {
    return ['All', ...this.skillGroups.map(group => group.category)];
  }

  getLevelPercentage(level: string): number {
    const levels: any = { 'Beginner': 33, 'Intermediate': 66, 'Advanced': 85, 'Expert': 100 };
    return levels[level] || 0;
  }

  getLevelColor(level: string): string {
    const colors: any = { 'Beginner': '#94a3b8', 'Intermediate': '#3b82f6', 'Advanced': '#8b5cf6', 'Expert': '#10b981' };
    return colors[level] || '#94a3b8';
  }

  get hasNoResults(): boolean {
    return this.filteredGroups.length === 0 || this.filteredGroups.every(g => g.skills.length === 0);
  }
}
