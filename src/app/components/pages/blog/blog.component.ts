import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles = [
    {
      id: 1,
      title: 'Building Modern Web Applications with Angular',
      excerpt: 'Learn how to create scalable and maintainable web applications using Angular framework.',
      content: 'Angular is a powerful framework for building dynamic web applications...',
      author: 'Lebohang Monamane',
      date: '2024-01-15',
      image: '/agric.PNG',
      tags: ['Angular', 'Web Development', 'TypeScript']
    },
    {
      id: 2,
      title: 'Mobile App Development with Flutter',
      excerpt: 'Discover the power of Flutter for cross-platform mobile development.',
      content: 'Flutter allows developers to create beautiful native apps for mobile, web, and desktop...',
      author: 'Lebohang Monamane',
      date: '2024-01-10',
      image: '/intern.PNG',
      tags: ['Flutter', 'Mobile Development', 'Dart']
    },
    {
      id: 3,
      title: 'Database Design Best Practices',
      excerpt: 'Essential principles for designing efficient and scalable databases.',
      content: 'Good database design is crucial for application performance and maintainability...',
      author: 'Lebohang Monamane',
      date: '2024-01-05',
      image: '/primary.PNG',
      tags: ['Database', 'MySQL', 'Design Patterns']
    }
  ];

  selectedArticle: any = null;
  filteredArticles: any[] = [];
  searchQuery: string = '';
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.filteredArticles = this.articles;
    
    this.route.queryParams.subscribe(params => {
      if (params['q']) {
        this.searchQuery = params['q'];
        this.filterArticles();
      }
    });
  }
  
  filterArticles() {
    if (!this.searchQuery) {
      this.filteredArticles = this.articles;
      return;
    }
    
    const query = this.searchQuery.toLowerCase();
    this.filteredArticles = this.articles.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.tags.some((tag: string) => tag.toLowerCase().includes(query))
    );
  }

  viewArticle(article: any) {
    this.selectedArticle = article;
  }

  backToList() {
    this.selectedArticle = null;
  }
}