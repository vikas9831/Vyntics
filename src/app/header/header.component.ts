import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  navigateToAboutUs() {
    // Close mobile menu when About Us is clicked
    this.isMobileMenuOpen = false;
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    // Close mobile menu when a link is clicked
    this.isMobileMenuOpen = false;
    
    // Check if we're on the home page
    if (this.router.url === '/' || this.router.url === '') {
      // We're on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // We're on a different page, navigate to home with fragment
      this.router.navigate(['/'], { fragment: sectionId }).then(() => {
        // Small delay to ensure the page has loaded
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      });
    }
  }
}
