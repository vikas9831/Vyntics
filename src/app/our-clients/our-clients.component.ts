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
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png',
      industry: 'Technology',
      description: 'Global technology company specializing in software and cloud services.'
    },
    {
      id: 2,
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
      industry: 'Technology',
      description: 'Multinational technology company focusing on internet-related services.'
    },
    {
      id: 3,
      name: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2560px-Apple_logo_black.svg.png',
      industry: 'Technology',
      description: 'Multinational technology company that designs and manufactures consumer electronics.'
    },
    {
      id: 4,
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
      industry: 'E-commerce',
      description: 'Multinational technology company focusing on e-commerce and cloud computing.'
    },
    {
      id: 5,
      name: 'Netflix',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png',
      industry: 'Entertainment',
      description: 'Global streaming service and production company.'
    },
    {
      id: 6,
      name: 'Tesla',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/2560px-Tesla_logo.png',
      industry: 'Automotive',
      description: 'Electric vehicle and clean energy company.'
    },
    {
      id: 7,
      name: 'Meta',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png',
      industry: 'Technology',
      description: 'Social media and technology company.'
    },
    {
      id: 8,
      name: 'Adobe',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/2560px-Adobe_Systems_logo_and_wordmark.svg.png',
      industry: 'Software',
      description: 'Multinational computer software company.'
    },
    {
      id: 9,
      name: 'Salesforce',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Salesforce_logo.svg/2560px-Salesforce_logo.svg.png',
      industry: 'Software',
      description: 'Cloud-based software company providing customer relationship management.'
    },
    {
      id: 10,
      name: 'Oracle',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png',
      industry: 'Technology',
      description: 'Multinational technology corporation specializing in database software.'
    },
    {
      id: 11,
      name: 'IBM',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png',
      industry: 'Technology',
      description: 'Multinational technology company providing hardware, software, and consulting services.'
    },
    {
      id: 12,
      name: 'Intel',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282020%2C_light_blue%29.svg/2560px-Intel_logo_%282020%2C_light_blue%29.svg.png',
      industry: 'Technology',
      description: 'Multinational technology company specializing in semiconductor manufacturing.'
    },
    {
      id: 13,
      name: 'Cisco',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png',
      industry: 'Technology',
      description: 'Multinational technology conglomerate specializing in networking hardware.'
    },
    {
      id: 14,
      name: 'Dell',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/2560px-Dell_logo_2016.svg.png',
      industry: 'Technology',
      description: 'Multinational technology company that develops, sells, and supports computers.'
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