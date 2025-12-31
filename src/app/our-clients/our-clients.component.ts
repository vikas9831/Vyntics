import { Component } from '@angular/core';

interface Client {
  id: number;
  name: string;
  logo: string;
  industry: string;
  description: string;
}

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.css']
})
export class OurClientsComponent {
  clients: Client[] = [
    {
      id: 1,
      name: 'Mona McCormick',
      logo: 'assets/smgq.jpg',
      industry: 'Client',
      description: 'Valued Client'
    }
  ];

  // Method to handle logo loading errors
  onLogoError(event: any, client: Client) {
    // Create a fallback logo with company initials
    const canvas = document.createElement('canvas');
    canvas.width = 60;
    canvas.height = 60;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Background
      ctx.fillStyle = '#0071e3';
      ctx.fillRect(0, 0, 60, 60);

      // Text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Get initials from company name
      const initials = client.name.split(' ').map(word => word[0]).join('').substring(0, 2);
      ctx.fillText(initials, 30, 30);
    }

    // Set the fallback image
    event.target.src = canvas.toDataURL();
  }

  constructor() { }
} 