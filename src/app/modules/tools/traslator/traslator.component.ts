import { Component } from '@angular/core';
import { OpenaiService } from 'src/app/services/openai_api_service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { of, from, interval, Subject } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

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
      content:
        "You are a helpful assistant. I'm using this for translating from English to Spanish or any other language; so please provide only the translation without any additional response",
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
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    console.log('aion');
    this.checkRxjs();

    this.getTranslatorForm();
  }

  checkRxjs() {
    const source = interval(1000).pipe(take(5));

    const subject = new Subject<number>();
    source.subscribe(subject);

    subject
      .pipe(
        map((value) => value * 2) // Multiply by 2
      )
      .subscribe({
        next: (value) => console.log(`Observer 1: ${value}`),
        error: (err) => console.error(`Observer 1 Error: ${err}`),
        complete: () => console.log('Observer 1: Complete'),
      });

    subject
      .pipe(
        map((value: number) => value * 3) // Multiply by 3
      )
      .subscribe({
        next: (value) => console.log(`Observer 2: ${value}`),
        error: (err) => console.error(`Observer 2 Error: ${err}`),
        complete: () => console.log('Observer 2: Complete'),
      });
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
      role: 'user',
      content: `${
        this.translatorForm.get('sourceLanguage')?.value[0].sourceInput
      }; translate this to "${
        this.translatorForm.get('targetLanguage')?.value[0].targetValue
      }" language`,
    };
    this.massage.push(content);

    try {
      const completion = await this.AiServices.getCompletion(this.massage);
      this.massage.push(completion.choices[0].message);
      const result = completion.choices[0].message.content;
      const targetGroup: any = this.targetLanguag.at(0) as FormGroup;
      targetGroup.get('targetInput').setValue(result);
      this.toastr.success('Hello world!', 'Toastr fun!');
    } catch (error: any) {
      console.error('Errorsss:', error);
    }
  }
  reverse() {
    const sourceValue = this.translatorForm.get('sourceLanguage')?.value[0];
    const targetedValue = this.translatorForm.get('targetLanguage')?.value[0];
    const targetGroup: any = this.targetLanguag.at(0) as FormGroup;
    const sourceGroup: any = this.sourceLanguage.at(0) as FormGroup;
    targetGroup.patchValue(sourceValue);
    sourceGroup.patchValue(targetedValue);
    console.log('Sv', sourceValue);
    console.log('Tv', targetedValue);
  }
}
