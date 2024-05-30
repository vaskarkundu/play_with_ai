import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // standalone: true,
  // imports: [MatGridListModule],
})
export class DashboardComponent {
  constructor(private router: Router) {}
  breakpoint: '3';
  cards = [
    {
      id: 'traslator',
      title: 'AI-Driven Translator',
      description:
        'Introducing our revolutionary AI-driven Translator, a cutting-edge solution poised to redefine multilingual communication. Powered by advanced artificial intelligence algorithms, our Translator offers seamless and accurate translation services across multiple languages, breaking down barriers and facilitating global interactions like never before.',
    },
    {
      id: 'summarization',
      title: 'Summarization AI Tool',
      description:
        'Welcome to our Summarization AI Tool, a game-changing solution designed to distill complex information into concise and digestible summaries effortlessly. Leveraging state-of-the-art artificial intelligence techniques, our tool empowers users to quickly extract key insights from lengthy texts, articles, documents, and more, saving time and enhancing productivity.',
    },
    {
      id: 'inference',
      title: 'AI Inference Engine',
      description:
        'Introducing our AI Inference Engine, a sophisticated tool designed to analyze data, draw conclusions, and make informed predictions based on underlying patterns and relationships. Built upon advanced machine learning and statistical techniques, our Inference Engine empowers users to derive meaningful insights from complex datasets, driving informed decision-making and strategic planning.',
    },

    {
      id: 'expansion',
      title: 'AI Expansion Tool',
      description:
        'Welcome to our AI Expansion Tool, a versatile solution engineered to enrich and augment existing datasets, content, or knowledge bases with additional context, details, or insights. Powered by cutting-edge natural language processing (NLP) algorithms and machine learning techniques, our Expansion Tool empowers users to enhance the depth and breadth of their data effortlessly, unlocking new perspectives and opportunities for analysis.',
    },
    {
      id: 'traslator',
      title: 'AI Expansion Tool',
      description:
        'Welcome to our AI Expansion Tool, a versatile solution engineered to enrich and augment existing datasets, content, or knowledge bases with additional context, details, or insights. Powered by cutting-edge natural language processing (NLP) algorithms and machine learning techniques, our Expansion Tool empowers users to enhance the depth and breadth of their data effortlessly, unlocking new perspectives and opportunities for analysis.',
    },
  ];

  navigateTo(id: string) {
    this.router.navigate(['/tools/' + id]);
  }
}
