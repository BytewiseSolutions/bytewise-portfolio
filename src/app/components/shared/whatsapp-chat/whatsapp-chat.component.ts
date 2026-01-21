import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-whatsapp-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './whatsapp-chat.component.html',
  styleUrls: ['./whatsapp-chat.component.scss']
})
export class WhatsappChatComponent {
  isOpen = false;
  showChatInput = false;
  whatsappMode = false;
  currentMessage = '';
  messages: any[] = [];

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.showChatInput = false;
      this.whatsappMode = false;
    }
  }

  selectWhatsApp() {
    this.whatsappMode = true;
  }

  goBack() {
    this.whatsappMode = false;
    this.showChatInput = false;
  }

  openWhatsApp() {
    const message = "Hi Lebohang! I'm interested in discussing a project with you.";
    const whatsappUrl = `https://wa.me/26659181664?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    this.isOpen = false;
  }

  startLiveChat() {
    this.showChatInput = true;
    this.messages = [{
      text: 'Hi! I\'m Lebohang. How can I help you today?',
      type: 'bot',
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }];
  }

  sendMessage() {
    if (!this.currentMessage.trim()) return;
    
    this.messages.push({
      text: this.currentMessage,
      type: 'user',
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    });

    this.sendToWhatsApp(this.currentMessage);
    
    this.currentMessage = '';
  
    setTimeout(() => {
      this.messages.push({
        text: 'Thanks for your message! I\'ll get back to you shortly.',
        type: 'bot',
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      });
    }, 1000);
  }

  private sendToWhatsApp(message: string) {
    const whatsappMessage = `New website chat: ${message}`;
    const whatsappUrl = `https://wa.me/26659181664?text=${encodeURIComponent(whatsappMessage)}`;
    console.log('Message sent to WhatsApp:', whatsappMessage);
  }
}