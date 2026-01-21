import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private readonly emailjsConfig = {
    serviceId: 'service_your_id',
    templateId: 'template_your_id', 
    publicKey: 'your_public_key'
  };

  async sendMessage(message: string, userEmail?: string): Promise<boolean> {
    try {
      const templateParams = {
        message: message,
        user_email: userEmail || 'Anonymous',
        to_email: 'your-email@example.com',
        timestamp: new Date().toLocaleString()
      };

      await emailjs.send(
        this.emailjsConfig.serviceId,
        this.emailjsConfig.templateId,
        templateParams,
        this.emailjsConfig.publicKey
      );
      
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  }

  openWhatsApp(message: string): void {
    const whatsappUrl = `https://wa.me/26659181664?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}