import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { fromEvent, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ToastService } from 'src/app/services/toast-service';
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
  isCsv: boolean = false;
  isJson: boolean = false;
  isText: boolean = false;
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
    private formBuilder: FormBuilder,
    private toastr: ToastService
  ) {}

  ngOnInit() {
    this.getSumarizedForm();
  }

  getSumarizedForm() {
    this.summarizeForm = this.formBuilder.group({
      inputFormat: [null, Validators.required],
      input: [null, Validators.required],
      inputText: [null],

      // sourceLanguage: this.formBuilder.array([]),
    });
  }

  onFormatChange() {
    let format = this.summarizeForm.get('inputFormat')?.value;
    if (format === 'text') {
      this.isText = true;
      this.isJson = false;
      this.isCsv = false;
    } else if (format === 'json') {
      this.isJson = true;
      this.isCsv = false;
      this.isText = false;
    } else {
      this.isCsv = true;
      this.isJson = false;
      this.isText = false;
    }
  }

  onFileSelected($event: any) {
    const file: File = $event.target.files[0];
    const format = this.summarizeForm.get('inputFormat')?.value;

    if (file) {
      if (format == 'json') {
        this.readFile(file).subscribe(
          (content) => {
            this.summarizeForm.patchValue({ input: content });

            console.log('cont', this.summarizeForm.get('input')?.value);
          },
          (error) => {
            console.error('Error reading file:', error);
          }
        );
      } else if (format === 'csv') {
        this.readCsvFile(file).subscribe(
          (content) => {
            this.summarizeForm.patchValue({ input: content });
            console.log('CSV content:', this.summarizeForm.get('input')?.value);
          },
          (error) => {
            console.error('Error reading CSV file:', error);
          }
        );
      }
    } else {
      this.toastr.showError('This file has croupted', 'Error');
    }
  }

  private readFile(file: File): Observable<any> {
    return new Observable((observer) => {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        try {
          const result = JSON.parse(event.target.result);
          observer.next(result);
          observer.complete();
        } catch (error) {
          observer.error(error);
        }
      };

      reader.onerror = (event: any) => {
        observer.error(event.target.error);
      };

      reader.readAsText(file);
    });
  }

  private readCsvFile(file: File): Observable<any> {
    return new Observable((observer) => {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        try {
          const result = this.parseCsv(event.target.result);
          observer.next(result);
          observer.complete();
        } catch (error) {
          observer.error(error);
        }
      };

      reader.onerror = (event: any) => {
        observer.error(event.target.error);
      };

      reader.readAsText(file);
    });
  }

  private parseCsv(csvData: string): any[] {
    const rows = csvData.split('\n').filter((row) => row.trim() !== ''); // filter out empty rows
    const result = [];
    const headers = rows[0].split(',').map((header) => header.trim());
    for (let i = 1; i < rows.length; i++) {
      const values = rows[i].split(',').map((value) => value.trim());
      const obj: any = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = values[j];
      }
      result.push(obj);
    }
    return result;
  }
}
