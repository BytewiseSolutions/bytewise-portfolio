import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../../services/chat.service';

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
  currentMessage = '';
  userEmail = '';
  messages: any[] = [];
  isLoading = false;

  constructor(private chatService: ChatService) {}

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.showChatInput = false;
      this.messages = [];
    }
  }

  startChat() {
    this.showChatInput = true;
    this.messages = [{
      text: 'Hi! How can I help you today?',
      type: 'bot',
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }];
  }

  async sendMessage() {
    if (!this.currentMessage.trim()) return;
    
    this.messages.push({
      text: this.currentMessage,
      type: 'user',
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    });

    const message = this.currentMessage;
    this.currentMessage = '';
    this.isLoading = true;

    const emailSent = await this.chatService.sendMessage(message, this.userEmail);
    
    this.messages.push({
      text: emailSent ? 'Message sent! I\'ll get back to you soon.' : 'Message saved. You can also reach me on WhatsApp.',
      type: 'bot',
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    });
    
    this.isLoading = false;
  }

  openWhatsApp() {
    const message = "Hi Lebohang! I'm interested in discussing a project with you.";
    this.chatService.openWhatsApp(message);
    this.isOpen = false;
  }
}