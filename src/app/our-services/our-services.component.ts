import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
  standalone: false
})
export class OurServicesComponent {

  constructor(private router: Router) {}

  services: Service[] = [
    {
      id: 'strategic-advisory',
      title: 'Strategic Advisory',
      description: 'Guidance and expertise that helps reimagine business models, enhance experiences and create value.',
      icon: 'fas fa-chart-line',
      route: '/services/strategic-advisory'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Build growth-focused channels and unlock valuable insights through a data-driven approach.',
      icon: 'fas fa-chart-bar',
      route: '/services/data-analytics'
    },
    {
      id: 'insights-transformation',
      title: 'Consulting',
      description: 'Reimagine processes and drive new experiences through augmented analytics and BI modernization to stay ahead.',
      icon: 'fas fa-users',
      route: '/services/consulting'
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering & Management',
      description: 'Agility, security and reliability delivered through a modern data platform and smart data supply chain.',
      icon: 'fas fa-database',
      route: '/services/data-engineering'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services that ensure security, reliability, and cost optimization.',
      icon: 'fas fa-cloud-upload-alt',
      route: '/services/cloud-solutions'
    },
    {
      id: 'agentic-ai',
      title: 'Agentic AI',
      description: 'Deploy intelligent AI solutions that autonomously execute complex tasks and adapt to business needs.',
      icon: 'fas fa-brain',
      route: '/services/agentic-ai'
    }
  ];

  navigateToService(route: string): void {
    this.router.navigate([route]);
  }
}
