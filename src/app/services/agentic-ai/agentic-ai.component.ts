import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agentic-ai',
  templateUrl: './agentic-ai.component.html',
  styleUrls: ['./agentic-ai.component.css'],
  standalone: false
})
export class AgenticAiComponent {

  constructor(private router: Router) {}

  navigateToHomeServices(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/'], { fragment: 'our-services' }).then(() => {
      setTimeout(() => {
        const element = document.getElementById('our-services');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }

  getStarted(): void {
    this.router.navigate(['/'], { fragment: 'contact-us' }).then(() => {
      setTimeout(() => {
        const element = document.getElementById('contact-us');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }

  scheduleConsultation(): void {
    this.router.navigate(['/'], { fragment: 'contact-us' }).then(() => {
      setTimeout(() => {
        const element = document.getElementById('contact-us');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }
}
