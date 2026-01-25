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
  motto = 'Code with purpose, build with passion, deliver with excellence.';
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

  personalityTraits = [
    { icon: 'fas fa-lightbulb', title: 'Creative Thinker', description: 'Always finding innovative solutions to complex problems' },
    { icon: 'fas fa-users', title: 'Team Player', description: 'Collaborative and communicative in team environments' },
    { icon: 'fas fa-clock', title: 'Time Conscious', description: 'Committed to meeting deadlines and delivering on time' },
    { icon: 'fas fa-chart-line', title: 'Growth Minded', description: 'Continuously learning and improving my skills' }
  ];

  funFacts = [
    { icon: 'fas fa-code', fact: 'Wrote my first program at age 16' },
    { icon: 'fas fa-coffee', fact: 'Powered by coffee and curiosity' },
    { icon: 'fas fa-book', fact: 'Love reading tech blogs and documentation' },
    { icon: 'fas fa-gamepad', fact: 'Enjoy gaming and problem-solving puzzles' }
  ];

  learningJourney = [
    { tech: 'Kotlin', progress: 60, icon: 'fas fa-mobile-alt', color: '#7F52FF' },
    { tech: 'Docker', progress: 45, icon: 'fab fa-docker', color: '#2496ED' },
    { tech: 'GraphQL', progress: 50, icon: 'fas fa-project-diagram', color: '#E10098' },
    { tech: 'Next.js', progress: 55, icon: 'fab fa-react', color: '#000000' }
  ];

  socialProof = {
    github: { username: 'BytewiseSolutions', repos: 20, followers: 15, url: 'https://github.com/BytewiseSolutions' },
    linkedin: { connections: '100+', url: 'https://www.linkedin.com/in/lebohang-monamane' },
    projects: 15,
    experience: 3
  };

  careerMilestones = [
    { year: 2014, title: 'Started High School', description: 'Began my academic journey', icon: 'fas fa-school' },
    { year: 2018, title: 'Completed High School', description: 'LGCSE & JC at Tsoinyane High School', icon: 'fas fa-graduation-cap' },
    { year: 2020, title: 'Started University', description: 'BSc Computing at Botho University', icon: 'fas fa-university' },
    { year: 2023, title: 'First Developer Role', description: 'Front-End Developer at TTJT LABS', icon: 'fas fa-briefcase' },
    { year: 2024, title: 'Graduated University', description: 'BSc (Hons) Computing - Software Engineering', icon: 'fas fa-award' },
    { year: 2025, title: 'Junior Developer', description: 'Joined Business Software Craftsmen', icon: 'fas fa-rocket' }
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
      year: '2020 - 2024 | GPA: 3.23'
    },
    {
      degree: 'LGCSE & JC',
      institution: 'Tsoinyane High School, Leribe, Pitseng',
      year: '2014 - 2018'
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
