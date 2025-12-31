import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css'],
  standalone: false
})
export class ChatWidgetComponent {

  openChat() {
    // Add chat functionality here
    console.log('Opening chat...');
    alert('Chat functionality coming soon!');
  }
}
