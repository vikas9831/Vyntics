import { Component, OnInit, OnDestroy } from '@angular/core';

interface Testimonial {
  text: string;
  author: string;
  title: string;
  role: string;
  company: string;
  rating: number;
  photo?: string; // Optional photo property
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  standalone: false
})
export class TestimonialsComponent implements OnInit, OnDestroy {

  testimonials: Testimonial[] = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Samantha William",
      title: "Help us improve our productivity",
      role: "Senior Designer",
      company: "Design Studio",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=face"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Michael Chen",
      title: "Transform our business operations",
      role: "Product Manager",
      company: "Tech Solutions",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop&crop=face"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Sarah Johnson",
      title: "Exceeded all expectations",
      role: "Creative Director",
      company: "Innovation Labs",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop&crop=face"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "David Rodriguez",
      title: "Outstanding service quality",
      role: "CEO",
      company: "Startup Ventures",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Emily Thompson",
      title: "Professional and reliable",
      role: "Marketing Director",
      company: "Global Solutions",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1494790108755-2616b332446c?w=600&h=400&fit=crop&crop=face"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "James Wilson",
      title: "Exceeded our expectations",
      role: "CTO",
      company: "Tech Innovations",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop&crop=face"
    }
  ];

  currentSlide = 0;
  private autoSlideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  get currentTestimonial(): Testimonial {
    return this.testimonials[this.currentSlide];
  }

  getPreviousSlide(): number {
    return this.currentSlide === 0 ? this.testimonials.length - 1 : this.currentSlide - 1;
  }

  getNextSlide(): number {
    return this.currentSlide === this.testimonials.length - 1 ? 0 : this.currentSlide + 1;
  }

  previousSlide(): void {
    this.currentSlide = this.getPreviousSlide();
    this.resetAutoSlide();
  }

  nextSlide(): void {
    this.currentSlide = this.getNextSlide();
    this.resetAutoSlide();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.resetAutoSlide();
  }

  private startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  private stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  private resetAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  getPaginationDots(): number[] {
    return Array(this.testimonials.length).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - rating).fill(0);
  }

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }
}
