import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-analytics',
  templateUrl: './data-analytics.component.html',
  styleUrls: ['./data-analytics.component.css'],
  standalone: false
})
export class DataAnalyticsComponent {

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

  navigateToContact(): void {
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
