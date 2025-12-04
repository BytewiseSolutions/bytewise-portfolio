import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-whatsapp-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="whatsapp-chat-widget" [class.open]="isOpen">
      <div class="chat-button" (click)="toggleChat()">
        <i class="fab fa-whatsapp"></i>
        <span class="notification-badge" *ngIf="!isOpen">1</span>
      </div>
      
      <div class="chat-popup" *ngIf="isOpen">
        <div class="chat-header">
          <img src="/leb.png" alt="Lebohang" class="avatar">
          <div class="info">
            <h4>Lebohang Monamane</h4>
            <p>Typically replies instantly</p>
          </div>
          <button class="close-btn" (click)="toggleChat()">×</button>
        </div>
        
        <div class="chat-body">
          <div class="message">
            <p>Hi there! 👋</p>
            <p>How can I help you today?</p>
          </div>
        </div>
        
        <div class="chat-footer">
          <button class="whatsapp-btn" (click)="openWhatsApp()">
            <i class="fab fa-whatsapp"></i>
            Start Chat on WhatsApp
          </button>
        </div>
        

        

      </div>
    </div>
  `,
  styles: [`
    .whatsapp-chat-widget {
      position: fixed;
      bottom: 90px;
      right: 20px;
      z-index: 1000;
    }

    .chat-button {
      width: 60px;
      height: 60px;
      background: #25d366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
      transition: all 0.3s ease;
      position: relative;
    }

    .chat-button:hover {
      transform: scale(1.1);
    }

    .chat-button i {
      color: white;
      font-size: 28px;
    }

    .notification-badge {
      position: absolute;
      top: -5px;
      right: -5px;
      background: #ff4444;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: bold;
    }

    .chat-popup {
      position: absolute;
      bottom: 70px;
      right: 0;
      width: 300px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
      overflow: hidden;
      animation: slideUp 0.3s ease;
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .chat-header {
      background: #25d366;
      color: white;
      padding: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    .info h4 {
      margin: 0;
      font-size: 14px;
    }

    .info p {
      margin: 0;
      font-size: 12px;
      opacity: 0.9;
    }

    .close-btn {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      margin-left: auto;
    }

    .chat-body {
      padding: 20px;
      background: #f0f0f0;
    }

    .message {
      background: white;
      padding: 12px;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    .message p {
      margin: 5px 0;
      font-size: 14px;
    }

    .chat-footer {
      padding: 15px;
    }

    .whatsapp-btn {
      width: 100%;
      background: #25d366;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-bottom: 0;
    }

    .whatsapp-btn:hover {
      background: #128c7e;
    }

    .live-chat-btn {
      width: 100%;
      background: #007bff;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-bottom: 10px;
    }

    .live-chat-btn:hover {
      background: #0056b3;
    }

    .back-btn {
      width: 100%;
      background: #6c757d;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-top: 10px;
    }

    .back-btn:hover {
      background: #5a6268;
    }

    .chat-input-section {
      max-height: 300px;
      display: flex;
      flex-direction: column;
    }

    .messages {
      flex: 1;
      padding: 15px;
      max-height: 200px;
      overflow-y: auto;
      background: #f0f0f0;
    }

    .message.user {
      background: #007bff;
      color: white;
      margin-left: 20px;
      text-align: right;
    }

    .message.bot {
      background: white;
      margin-right: 20px;
    }

    .time {
      font-size: 10px;
      opacity: 0.7;
    }

    .input-area {
      display: flex;
      padding: 10px;
      background: white;
      border-top: 1px solid #eee;
    }

    .message-input {
      flex: 1;
      border: 1px solid #ddd;
      border-radius: 20px;
      padding: 8px 15px;
      outline: none;
    }

    .send-btn {
      background: #25d366;
      color: white;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin-left: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 768px) {
      .chat-popup {
        width: 280px;
        right: -10px;
      }
    }
  `]
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

    // Send to WhatsApp via webhook/API
    this.sendToWhatsApp(this.currentMessage);
    
    this.currentMessage = '';
    
    // Auto response
    setTimeout(() => {
      this.messages.push({
        text: 'Thanks for your message! I\'ll get back to you shortly.',
        type: 'bot',
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      });
    }, 1000);
  }

  private sendToWhatsApp(message: string) {
    // This would integrate with WhatsApp Business API
    const whatsappMessage = `New website chat: ${message}`;
    const whatsappUrl = `https://wa.me/26659181664?text=${encodeURIComponent(whatsappMessage)}`;
    // In production, use webhook to send automatically
    console.log('Message sent to WhatsApp:', whatsappMessage);
  }
}