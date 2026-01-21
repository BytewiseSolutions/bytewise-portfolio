import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  pricingPlans = [
    {
      name: 'Basic Website',
      price: 'M1,500',
      period: 'one-time',
      description: 'Perfect for small businesses and personal portfolios',
      features: [
        'Responsive Design',
        '5 Pages Maximum',
        'Contact Form',
        'Basic SEO Setup',
        'Mobile Optimization',
        '1 Month Support'
      ],
      popular: false,
      color: '#6c757d'
    },
    {
      name: 'Professional Website',
      price: 'M2,500',
      period: 'one-time',
      description: 'Ideal for growing businesses with advanced features',
      features: [
        'Everything in Basic',
        'Up to 10 Pages',
        'CMS Integration',
        'Advanced SEO',
        'Analytics Setup',
        'Social Media Integration',
        '3 Months Support',
        'Performance Optimization'
      ],
      popular: true,
      color: '#007bff'
    },
    {
      name: 'E-commerce Solution',
      price: 'M4,000',
      period: 'one-time',
      description: 'Complete online store with payment integration',
      features: [
        'Everything in Professional',
        'Online Store Setup',
        'Payment Gateway',
        'Inventory Management',
        'Order Management',
        'Customer Accounts',
        '6 Months Support',
        'Security Features'
      ],
      popular: false,
      color: '#0056b3'
    }
  ];

  mobileApps = [
    {
      name: 'Simple Mobile App',
      price: 'M5,000',
      period: 'one-time',
      description: 'Basic mobile app for iOS and Android',
      features: [
        'Cross-platform (Flutter)',
        'Basic UI/UX Design',
        'Up to 5 Screens',
        'Local Data Storage',
        'Basic Functionality',
        '2 Months Support'
      ],
      color: '#007bff'
    },
    {
      name: 'Advanced Mobile App',
      price: 'M8,500',
      period: 'one-time',
      description: 'Feature-rich mobile application',
      features: [
        'Everything in Simple',
        'Backend Integration',
        'User Authentication',
        'Push Notifications',
        'API Integration',
        'Advanced UI/UX',
        '6 Months Support',
        'App Store Deployment'
      ],
      color: '#0056b3'
    }
  ];
}