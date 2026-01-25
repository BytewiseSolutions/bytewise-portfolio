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
      title: 'Building Modern Web Applications with React',
      excerpt: 'Learn how to create scalable and maintainable web applications using React framework with Firebase backend.',
      content: 'React is a powerful library for building dynamic web applications with Firebase providing real-time database capabilities...',
      author: 'Lebohang Monamane',
      date: new Date().toISOString().split('T')[0],
      image: '/agric.png',
      tags: ['React', 'Web Development', 'JavaScript', 'Firebase']
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