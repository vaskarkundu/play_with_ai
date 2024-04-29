import { Component } from '@angular/core';
import { OpenaiService } from 'src/app/services/openai_api_service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
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

    this.getTranslatorForm();
  }

  getTranslatorForm() {
    this.translatorForm = this.formBuilder.group({
      sourceLanguage: [null],

      targetLanguage: this.formBuilder.array([]),
    });

    this.addTarget();
  }

  get targetLanguag() {
    return this.translatorForm.get('targetLanguage') as FormArray;
  }

  addTarget() {
    const targetGroup = this.formBuilder.group({
      targetValue: [null],
      // targetInput: [null],
    });
    this.targetLanguag.push(targetGroup);
  }

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
  reverse() {
    console.log('d');
  }
}
