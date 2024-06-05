import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
interface InputFormat {
  value: string;
  option: string;
}
@Component({
  selector: 'app-summarize',
  templateUrl: './summarize.component.html',
  styleUrls: ['./summarize.component.css'],
})
export class SummarizeComponent {
  title: string = 'AI Summarization Tools';
  noteHeader: string = '**Notes';
  inputFormat: InputFormat[] = [
    { value: 'text', option: 'Text' },
    { value: 'json', option: 'JSON File' },
    { value: 'csv', option: 'CSV File' },
  ];

  notes: string[] = [
    'Accept a text file with up to 1000 words, and identify or specify keywords from which you can summarize the content.',
    'Accept a JSON file, focus on keywords, extract key points for summarization, and provide the result in either text or JSON format.',
    'Accept a CSV file, focus on keywords, extract key points for summarization, and provide the result in text, JSON, or CSV format.',
  ];

  summarizeForm: FormGroup;

  constructor(
    // private AiServices: OpenaiService,
    private formBuilder: FormBuilder // private toastr: ToastService
  ) {}

  ngOnInit() {
    this.getSumarizedForm();
  }

  getSumarizedForm() {
    this.summarizeForm = this.formBuilder.group({
      inputFormat: [null, Validators.required],
      // sourceLanguage: this.formBuilder.array([]),
    });
  }

  onFormatChange() {
    console.log('formVal', this.summarizeForm.get('inputFormat')?.value);
  }

  onFileSelected($event: any) {}
}
