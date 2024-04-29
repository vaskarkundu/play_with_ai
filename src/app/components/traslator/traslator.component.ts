import { Component } from '@angular/core';
import { OpenaiService } from 'src/app/services/openai_api_service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

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
  massage: any = [
    {
      role: 'system',
      content: 'You are a helpful assistant.',
    },
  ];
  a = 'Aion Vaskar';
  allLanguages: Language[] = [
    {
      id: 'en',
      name: 'English',
    },
    {
      id: 'de',
      name: 'German',
    },
    {
      id: 'fr',
      name: 'French',
    },
    {
      id: 'es',
      name: 'Spanish',
    },
  ];
  translatorForm: FormGroup;
  constructor(
    private AiServices: OpenaiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getTranslatorForm();
  }

  getTranslatorForm() {
    this.translatorForm = this.formBuilder.group({
      sourceLanguage: this.formBuilder.array([]),

      targetLanguage: this.formBuilder.array([]),
    });
    this.addSourceLanguage();
    this.addTargetLanguage();
  }

  get targetLanguag() {
    return this.translatorForm.get('targetLanguage') as FormArray;
  }

  get sourceLanguage() {
    return this.translatorForm.get('sourceLanguage') as FormArray;
  }

  addSourceLanguage() {
    const sorceGroup = this.formBuilder.group({
      sourceValue: [null, Validators.required],
      sourceInput: [null, Validators.required],
    });
    this.sourceLanguage.push(sorceGroup);
  }
  addTargetLanguage() {
    const targetGroup = this.formBuilder.group({
      targetValue: [null, Validators.required],
      targetInput: [null],
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

  async onSubmit() {
    const content = {
      language: this.translatorForm.get('sourceLanguage')?.value[0].sourceValue,
      content: this.translatorForm.get('sourceLanguage')?.value[0].sourceInput,
    };
    this.massage.push(content);
    console.log('submit', this.massage);
    // try {
    //   const completion = await this.AiServices.getCompletion('a');
    //   console.log('OpenAI Completion:', completion);
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  }
  reverse() {
    console.log('d');
  }
}
