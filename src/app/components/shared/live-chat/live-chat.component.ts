import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-live-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="live-chat-widget">
      <div class="chat-button" (click)="toggleChat()">
        <i class="fas fa-comments"></i>
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
        
        <div class="messages">
          <div class="message" *ngFor="let msg of messages" [class]="msg.type">
            <p>{{msg.text}}</p>
            <span class="time">{{msg.time}}</span>
          </div>
        </div>
        
        <div class="input-area">
          <input 
            type="text" 
            [(ngModel)]="currentMessage" 
            (keyup.enter)="sendMessage()"
            placeholder="Type your message..."
            class="message-input">
          <button (click)="sendMessage()" class="send-btn">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .live-chat-widget {
      position: fixed;
      bottom: 160px;
      right: 20px;
      z-index: 1000;
    }

    .chat-button {
      width: 60px;
      height: 60px;
      background: #007bff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 123, 255, 0.4);
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
      background: #007bff;
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

    .messages {
      padding: 15px;
      max-height: 200px;
      overflow-y: auto;
      background: #f0f0f0;
    }

    .message {
      background: white;
      padding: 12px;
      border-radius: 8px;
      margin-bottom: 10px;
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

    .message p {
      margin: 5px 0;
      font-size: 14px;
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
      background: #007bff;
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
export class LiveChatComponent {
  isOpen = false;
  currentMessage = '';
  messages: any[] = [
    {
      text: 'Hi! I\'m Lebohang. How can I help you today?',
      type: 'bot',
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }
  ];

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.currentMessage.trim()) return;
    
    this.messages.push({
      text: this.currentMessage,
      type: 'user',
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    });

    this.currentMessage = '';
    
    setTimeout(() => {
      this.messages.push({
        text: 'Thanks for your message! I\'ll get back to you shortly.',
        type: 'bot',
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      });
    }, 1000);
  }
}