import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css'],
  standalone: false
})
export class WhyChooseUsComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  autoSlideInterval: any;
  
  slides = [
    {
      title: 'On Time Delivery',
      description: 'We pride ourselves on delivering projects on schedule, every time. Our streamlined processes and dedicated project management ensure your deadlines are always met.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      metrics: [
        { value: '98%', label: 'On-Time Rate' },
        { value: '500+', label: 'Projects Delivered' }
      ]
    },
    {
      title: '100% Client Satisfaction',
      description: 'Our commitment to excellence ensures complete client satisfaction. We work closely with you to exceed expectations and deliver solutions that drive real business value.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      metrics: [
        { value: '100%', label: 'Satisfaction Rate' },
        { value: '4.9/5', label: 'Client Rating' }
      ]
    },
    {
      title: 'Expert Team',
      description: 'Our team of certified data scientists, engineers, and analysts brings decades of combined experience across industries and cutting-edge technologies.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      metrics: [
        { value: '50+', label: 'Experts' },
        { value: '15+', label: 'Years Experience' }
      ]
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and dedicated account management ensure your systems run smoothly and your questions are answered promptly.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      metrics: [
        { value: '24/7', label: 'Availability' },
        { value: '5min', label: 'Response Time' }
      ]
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols, end-to-end encryption, and compliance with international standards protect your valuable data assets.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      metrics: [
        { value: '99.9%', label: 'Security Rating' },
        { value: 'SOC2', label: 'Certified' }
      ]
    },
    {
      title: 'Innovative Minds',
      description: 'Our team of creative thinkers and technology innovators constantly push boundaries to deliver breakthrough solutions that transform your business.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      metrics: [
        { value: '200+', label: 'Innovations' },
        { value: '25+', label: 'Patents' }
      ]
    }
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide(): void {
    this.updateSlideClasses();
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateActiveSlide();
  }

  previousSlide(): void {
    this.updateSlideClasses();
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
    this.updateActiveSlide();
  }

  goToSlide(index: number): void {
    if (index !== this.currentSlide) {
      this.updateSlideClasses();
      this.currentSlide = index;
      this.updateActiveSlide();
      this.stopAutoSlide();
      this.startAutoSlide(); // Restart auto-slide after manual navigation
    }
  }

  private updateSlideClasses(): void {
    const slides = document.querySelectorAll('.feature-slide');
    slides.forEach((slide, index) => {
      slide.classList.remove('active', 'prev');
      if (index === this.currentSlide) {
        slide.classList.add('prev');
      }
    });
  }

  private updateActiveSlide(): void {
    setTimeout(() => {
      const slides = document.querySelectorAll('.feature-slide');
      slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        if (index === this.currentSlide) {
          slide.classList.add('active');
        }
      });
    }, 50);
  }
}
