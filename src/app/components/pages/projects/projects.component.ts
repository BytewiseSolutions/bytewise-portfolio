import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Agricultural Info Web App',
      description: 'A platform providing real-time agricultural updates for Lesotho farmers.',
      image: 'agric.png',
      link: 'https://github.com/BytewiseSolutions/ls-agri-info',
      shareUrl: 'https://github.com/BytewiseSolutions/ls-agri-info',
      category: 'Web',
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
      shareUrl: 'https://fansdor.com/',
      category: 'Web',
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
      link: 'https://github.com/BytewiseSolutions/lottery-system',
      shareUrl: 'http://totalfreelotto.com',
      category: 'Web',
      caseStudy: {
        challenge: 'Traditional lotteries require payment, limiting participation for many users.',
        solution: 'Built a free-to-play lottery platform with ad-supported revenue model and secure random number generation.',
        results: 'Completely free participation, real money prizes, fair and transparent draws',
        technologies: ['Angular', 'PHP', 'MySQL']
      }
    },
    {
      title: 'Internship Management System',
      description: 'Connecting students, companies, and universities in Lesotho for seamless internship management.',
      image: 'internship_img.png',
      link: 'https://github.com/BytewiseSolutions/internship-system',
      shareUrl: 'https://github.com/BytewiseSolutions/internship-system',
      category: 'Web',
      caseStudy: {
        challenge: 'Organization struggled with manual internship application and tracking processes.',
        solution: 'Created automated system for application submission, review, and progress tracking.',
        results: '200+ applications processed, 80% faster processing time',
        technologies: ['Angular', 'Firebase', 'TypeScript']
      }
    }
  ];
  
  filteredProjects: any[] = [];
  selectedProject: any = null;
  selectedImage: string | null = null;
  searchQuery: string = '';
  selectedCategory: string = 'All';
  selectedTech: string = 'All';
  categories: string[] = ['All', 'Web', 'Mobile'];
  technologies: string[] = [];
  itemsPerPage: number = 6;
  currentPage: number = 1;
  
  constructor(private meta: Meta, private title: Title) {}
  
  ngOnInit() {
    this.setMetaTags();
    this.extractTechnologies();
    this.filterProjects();
  }
  
  setMetaTags() {
    this.title.setTitle('Projects - Lebohang Monamane | Portfolio');
    this.meta.updateTag({ name: 'description', content: 'Explore my portfolio of web and mobile applications including agricultural platforms, lottery systems, and internship management solutions.' });
    this.meta.updateTag({ name: 'keywords', content: 'web development, Angular, projects, portfolio, Lesotho developer, full stack' });
    this.meta.updateTag({ property: 'og:title', content: 'Projects - Lebohang Monamane' });
    this.meta.updateTag({ property: 'og:description', content: 'Explore my portfolio of web and mobile applications' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
  
  extractTechnologies() {
    const techSet = new Set<string>();
    this.projects.forEach(p => p.caseStudy.technologies.forEach(t => techSet.add(t)));
    this.technologies = ['All', ...Array.from(techSet).sort()];
  }
  
  filterProjects() {
    this.filteredProjects = this.projects.filter(project => {
      const matchesSearch = !this.searchQuery || 
        project.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        project.caseStudy.technologies.some(t => t.toLowerCase().includes(this.searchQuery.toLowerCase()));
      
      const matchesCategory = this.selectedCategory === 'All' || project.category === this.selectedCategory;
      
      const matchesTech = this.selectedTech === 'All' || 
        project.caseStudy.technologies.includes(this.selectedTech);
      
      return matchesSearch && matchesCategory && matchesTech;
    });
    this.currentPage = 1;
  }
  
  get paginatedProjects() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProjects.slice(start, start + this.itemsPerPage);
  }
  
  get totalPages() {
    return Math.ceil(this.filteredProjects.length / this.itemsPerPage);
  }
  
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  
  resetFilters() {
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.selectedTech = 'All';
    this.filterProjects();
  }
  
  viewCaseStudy(project: any) {
    this.selectedProject = project;
  }
  
  closeCaseStudy() {
    this.selectedProject = null;
  }
  
  viewImage(image: string) {
    this.selectedImage = image;
  }
  
  closeImage() {
    this.selectedImage = null;
  }
  
  shareProject(project: any, platform: string) {
    const url = encodeURIComponent(project.shareUrl || project.link);
    const title = encodeURIComponent(project.title);
    const description = encodeURIComponent(project.description);
    
    let shareUrl = '';
    
    switch(platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${title}%20${url}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  }
  
  copyLink(project: any) {
    const url = project.shareUrl || project.link;
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    });
  }
}