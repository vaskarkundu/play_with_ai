import { Component } from '@angular/core';

@Component({
  selector: 'app-summarize',
  templateUrl: './summarize.component.html',
  styleUrls: ['./summarize.component.css'],
})
export class SummarizeComponent {
  title: string = 'AI Summarization Tools';
  noteHeader: string = '**Notes';

  notes: string[] = [
    'Accept a text file with up to 1000 words, and identify or specify keywords from which you can summarize the content.',
    'Accept a JSON file, focus on keywords, extract key points for summarization, and provide the result in either text or JSON format.',
    'Accept a CSV file, focus on keywords, extract key points for summarization, and provide the result in text, JSON, or CSV format.',
  ];
}
