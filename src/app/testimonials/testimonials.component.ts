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
      text: "Arun and his Vyntics team have been nothing short of phenomenal. From the very first interview, I knew Arun was the perfect match to build our database. Arun has a curious nature and problem-solving mindset, it is evident he truly loves working with data. Along with his technical skills, this made him uniquely capable of tackling the challenges our company struggled with. Arun is timely, fair, and honest. He built our database far beyond what we could do and he did it within our budget constraints. His dedication and expertise exceeded every expectation. Arun and his team will be an ongoing resource for us; I couldn’t be more pleased to recommend this team for your data needs.",
      author: "Mona McCormick",
      title: "Phenomenal Service",
      role: "Business & Royalty Analytics",
      company: "SMGQ Law",
      rating: 5,
      photo: "assets/smgq.jpg"
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
    if (this.testimonials.length <= 1) return -1;
    return this.currentSlide === 0 ? this.testimonials.length - 1 : this.currentSlide - 1;
  }

  getNextSlide(): number {
    if (this.testimonials.length <= 1) return -1;
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
