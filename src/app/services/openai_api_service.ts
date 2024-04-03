import axios from 'axios';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  constructor() {}

  async getCompletion(messages: any) {
    const KEY = environment.key;
    const url = 'https://api.openai.com/v1/chat/completions';
    console.log('message', KEY);
    const data = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.',
        },
        {
          role: 'user',
          content: 'Who won the world series in 2020?',
        },
        {
          role: 'assistant',
          content: 'The Los Angeles Dodgers won the World Series in 2020.',
        },
        {
          role: 'user',
          content: 'Where was it played?',
        },
      ],
    };

    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${KEY}`,
        },
      });

      console.log('res', response);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}
