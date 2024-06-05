import axios from 'axios';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  constructor() {}

  async getCompletion(mes: any) {
    const KEY = environment.key;
    // const KEY = 'sk-jsfdksldljsdlsdk';
    const url = 'https://api.openai.com/v1/chat/completions';

    const data = {
      model: 'gpt-3.5-turbo',
      messages: mes,
    };

    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${KEY}`,
        },
      });

      return response.data;
    } catch (error) {
      // console.error('Error:', error);
      throw error;
    }
  }
}
