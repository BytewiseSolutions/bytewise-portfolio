import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  initTawkTo() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/YOUR_TAWK_ID/1hqr8s8q8';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.head.appendChild(script);
  }

  sendMessage(message: string, email?: string) {
    const data = {
      phone: '26659181664',
      text: `Website message: ${message}${email ? ` from ${email}` : ''}`
    };
    
    return fetch('https://api.whatsapp.com/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  }
}