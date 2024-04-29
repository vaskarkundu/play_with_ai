import { Component } from '@angular/core';
import { OpenaiService } from 'src/app/services/openai_api_service';
import { FormBuilder, FormGroup } from '@angular/forms';
interface Language {
  id: string;
  name: string;
}
@Component({
  selector: 'app-traslator',
  templateUrl: './traslator.component.html',
  styleUrls: ['./traslator.component.css'],
})
export class TraslatorComponent {
  massage: any = [];
  allLanguages: Language[] = [
    {
      id: 'english',
      name: 'English',
    },
    {
      id: 'garman',
      name: 'Garman',
    },
  ];
  translatorForm: FormGroup;
  constructor(
    private AiServices: OpenaiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // this.getOpenaiCompletion();
    this.translatorForm = this.formBuilder.group({
      sourceLanguage: [null],
      targetLanguage: [null],
    });
    // this.getTranslatorForm();
  }

  // getTranslatorForm() {
  //   this.translatorForm = this.formBuilder.group({
  //     sourceLanguage: [null],
  //     targetLanguage: [null],
  //   });
  // }

  async getOpenaiCompletion() {
    try {
      const completion = await this.AiServices.getCompletion('a');
      console.log('OpenAI Completion:', completion);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  onSubmit() {
    console.log('submit', this.translatorForm.value);
  }
}
