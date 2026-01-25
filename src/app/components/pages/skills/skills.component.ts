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
  selectedSkill: any = null;

  skillGroups = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML & CSS', iconClass: 'fab fa-html5', level: 'Expert', years: 5, color: '#E34F26', description: 'Building responsive and accessible web interfaces', projectCount: 15, trend: 'stable', tags: ['Web', 'UI', 'Responsive'] },
        { name: 'JavaScript', iconClass: 'fab fa-js', level: 'Expert', years: 5, color: '#F7DF1E', description: 'Modern ES6+ JavaScript development', projectCount: 18, trend: 'growing', tags: ['Web', 'Frontend', 'Backend'] },
        { name: 'React JS', iconClass: 'fab fa-react', level: 'Expert', years: 3, color: '#61DAFB', description: 'Building dynamic single-page applications', projectCount: 8, trend: 'growing', tags: ['Web', 'SPA', 'Frontend'] },
        { name: 'Angular', iconClass: 'fab fa-angular', level: 'Expert', years: 4, color: '#DD0031', description: 'Enterprise-level web applications', projectCount: 12, trend: 'stable', tags: ['Web', 'Enterprise', 'TypeScript'] },
        { name: 'Flutter', iconClass: 'fas fa-mobile-alt', level: 'Expert', years: 2, color: '#02569B', description: 'Cross-platform mobile app development', projectCount: 6, trend: 'growing', tags: ['Mobile', 'Cross-platform', 'Dart'] },
        { name: 'WordPress', iconClass: 'fab fa-wordpress', level: 'Advanced', years: 3, color: '#21759B', description: 'Custom themes and plugin development', projectCount: 10, trend: 'stable', tags: ['CMS', 'Web', 'PHP'] },
        { name: 'Bootstrap', iconClass: 'fab fa-bootstrap', level: 'Expert', years: 4, color: '#7952B3', description: 'Rapid UI development with Bootstrap framework', projectCount: 14, trend: 'stable', tags: ['CSS', 'Framework', 'UI'] },
        { name: 'Material UI', iconClass: 'fas fa-palette', level: 'Advanced', years: 2, color: '#0081CB', description: 'Material Design implementation', projectCount: 5, trend: 'growing', tags: ['React', 'UI', 'Design'] }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', iconClass: 'fab fa-node-js', level: 'Advanced', years: 3, color: '#339933', description: 'Server-side JavaScript development', projectCount: 10, trend: 'growing', tags: ['Backend', 'JavaScript', 'API'] },
        { name: 'Java', iconClass: 'fab fa-java', level: 'Expert', years: 4, color: '#007396', description: 'Enterprise Java applications', projectCount: 9, trend: 'stable', tags: ['Backend', 'Enterprise', 'OOP'] },
        { name: 'C++', iconClass: 'fas fa-code', level: 'Intermediate', years: 2, color: '#00599C', description: 'System programming and algorithms', projectCount: 3, trend: 'stable', tags: ['Systems', 'Performance', 'OOP'] },
        { name: 'C#', iconClass: 'fas fa-code', level: 'Intermediate', years: 2, color: '#239120', description: '.NET application development', projectCount: 4, trend: 'stable', tags: ['.NET', 'Backend', 'OOP'] },
        { name: 'Python (Flask)', iconClass: 'fab fa-python', level: 'Expert', years: 3, color: '#3776AB', description: 'Web APIs and data processing', projectCount: 7, trend: 'growing', tags: ['Backend', 'API', 'Data'] },
        { name: 'SQL', iconClass: 'fas fa-database', level: 'Expert', years: 5, color: '#4479A1', description: 'Database design and optimization', projectCount: 16, trend: 'stable', tags: ['Database', 'Query', 'Data'] },
        { name: 'PHP', iconClass: 'fab fa-php', level: 'Expert', years: 4, color: '#777BB4', description: 'Server-side web development', projectCount: 11, trend: 'stable', tags: ['Backend', 'Web', 'Server'] },
        { name: 'Oracle', iconClass: 'fas fa-database', level: 'Intermediate', years: 2, color: '#F80000', description: 'Oracle database management', projectCount: 2, trend: 'stable', tags: ['Database', 'Enterprise', 'SQL'] },
        { name: 'DynamoDB', iconClass: 'fas fa-database', level: 'Intermediate', years: 1, color: '#4053D6', description: 'NoSQL database on AWS', projectCount: 3, trend: 'growing', tags: ['NoSQL', 'AWS', 'Cloud'] },
        { name: 'MongoDB', iconClass: 'fas fa-leaf', level: 'Advanced', years: 3, color: '#47A248', description: 'Document-based NoSQL database', projectCount: 8, trend: 'growing', tags: ['NoSQL', 'Database', 'JSON'] },
        { name: 'MySQL', iconClass: 'fas fa-database', level: 'Expert', years: 5, color: '#4479A1', description: 'Relational database management', projectCount: 13, trend: 'stable', tags: ['Database', 'SQL', 'Relational'] },
        { name: 'Spring Boot', iconClass: 'fab fa-java', level: 'Advanced', years: 3, color: '#6DB33F', description: 'Java microservices framework', projectCount: 6, trend: 'growing', tags: ['Java', 'Microservices', 'API'] }
      ]
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Android', iconClass: 'fab fa-android', level: 'Expert', years: 3, color: '#3DDC84', description: 'Native Android app development', projectCount: 7, trend: 'stable', tags: ['Mobile', 'Java', 'Kotlin'] },
        { name: 'Git & GitHub', iconClass: 'fab fa-github', level: 'Expert', years: 5, color: '#181717', description: 'Version control and collaboration', projectCount: 20, trend: 'stable', tags: ['VCS', 'Collaboration', 'DevOps'] },
        { name: 'VS Code', iconClass: 'fas fa-code', level: 'Expert', years: 5, color: '#007ACC', description: 'Primary development environment', projectCount: 20, trend: 'stable', tags: ['IDE', 'Development', 'Tools'] },
        { name: 'Firebase', iconClass: 'fas fa-fire', level: 'Expert', years: 3, color: '#FFCA28', description: 'Backend-as-a-Service platform', projectCount: 9, trend: 'growing', tags: ['BaaS', 'Cloud', 'Real-time'] },
        { name: 'AWS', iconClass: 'fab fa-aws', level: 'Intermediate', years: 2, color: '#FF9900', description: 'Cloud infrastructure and services', projectCount: 4, trend: 'growing', tags: ['Cloud', 'Infrastructure', 'DevOps'] }
      ]
    }
  ];

  skillStacks = [
    { name: 'MEAN Stack', skills: ['MongoDB', 'Angular', 'Node.js'], icon: 'fas fa-layer-group', color: '#DD0031' },
    { name: 'MERN Stack', skills: ['MongoDB', 'React JS', 'Node.js'], icon: 'fas fa-layer-group', color: '#61DAFB' },
    { name: 'Full Stack Web', skills: ['Angular', 'PHP', 'MySQL'], icon: 'fas fa-server', color: '#777BB4' },
    { name: 'Mobile Development', skills: ['Flutter', 'Android', 'Firebase'], icon: 'fas fa-mobile-alt', color: '#02569B' }
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

  viewSkillDetails(skill: any) {
    this.selectedSkill = skill;
  }

  closeSkillDetails() {
    this.selectedSkill = null;
  }

  getTrendIcon(trend: string): string {
    return trend === 'growing' ? 'fas fa-arrow-up' : 'fas fa-minus';
  }

  getTrendColor(trend: string): string {
    return trend === 'growing' ? '#10b981' : '#64748b';
  }

  getTrendLabel(trend: string): string {
    return trend === 'growing' ? 'High Demand' : 'Stable';
  }
}
