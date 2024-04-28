import { Component } from '@angular/core';
import { OpenaiService } from 'src/app/services/openai_api_service';

@Component({
  selector: 'app-traslator',
  templateUrl: './traslator.component.html',
  styleUrls: ['./traslator.component.css'],
})
export class TraslatorComponent {
  constructor(private AiServices: OpenaiService) {}

  ngOnInit() {
    this.getOpenaiCompletion();
    console.log('vaskar');
  }

  async getOpenaiCompletion() {
    try {
      const completion = await this.AiServices.getCompletion('a');
      console.log('OpenAI Completion:', completion);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
