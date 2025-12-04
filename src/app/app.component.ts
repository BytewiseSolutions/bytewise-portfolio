import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { WhatsappChatComponent } from "./components/shared/whatsapp-chat/whatsapp-chat.component";
import { LiveChatComponent } from "./components/shared/live-chat/live-chat.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, WhatsappChatComponent, LiveChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bytewise-solutions';
}
