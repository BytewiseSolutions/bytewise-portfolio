import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name = 'Lebohang Monamane';
  title = 'Software Developer';
  bio = `
    I am a passionate and solution-oriented software engineer with experience in 
    building web and mobile applications. I enjoy turning complex problems into simple, 
    elegant solutions, and I am always eager to learn new technologies and collaborate 
    on meaningful projects.
  `;

  skillsSummary = [
    'Full-stack development',
    'Agile methodology',
    'Database design',
    'Cloud technologies (Firebase & AWS Amazon)',
    'UI/UX principles'
  ];

  experience = [
    {
      role: 'Junior Software Developer',
      company: 'Business Software Craftsmen',
      period: '2025 - Present',
      description: 'Coding, System analysis, System Design, Testing'
    },
    {
      role: 'Full Stack Developer',
      company: 'Motebo Technologies',
      period: 'April 2025 - May 2025 | Remote',
      description: 'Edited Angular website, Added backend using Python (Flask), Implemented DynamoDB'
    },
    {
      role: 'Front-End Developer',
      company: 'TTJT LABS (PTY) Ltd',
      period: 'June 2023 - October 2023 | Maseru, Lesotho',
      description: 'Developed dynamic front-end solutions using React.js, HTML, CSS, JavaScript and WordPress'
    }
  ];

  education = [
    {
      degree: 'BSc (Hons) Computing - Software Engineering',
      institution: 'Botho University, Maseru Campus',
      year: 'December 2024 | GPA: 3.23'
    },
    {
      degree: 'LGCSE & JC',
      institution: 'Tsoinyane High School, Leribe, Pitseng',
      year: '2016 - 2018'
    }
  ];

  values = [
    {
      title: 'Innovation',
      description: 'Constantly exploring new technologies and approaches'
    },
    {
      title: 'Quality',
      description: 'Delivering clean, maintainable, and efficient code'
    },
    {
      title: 'Collaboration',
      description: 'Working closely with clients to achieve their goals'
    }
  ];
}
