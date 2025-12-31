import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email.config';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  standalone: false
})
export class ContactUsComponent {
  formData: ContactFormData = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(emailConfig.publicKey);
  }

  async onSubmit() {
    if (!this.isFormValid()) {
      return;
    }

    this.isSubmitting = true;

    try {
      // Prepare email parameters - simple format
      const emailParams = {
        [emailConfig.templateVars.to_email]: emailConfig.toEmail,
        [emailConfig.templateVars.from_name]: this.formData.email,
        [emailConfig.templateVars.from_email]: this.formData.email,
        [emailConfig.templateVars.subject]: this.formData.subject,
        [emailConfig.templateVars.message]: `From: ${this.formData.firstName} ${this.formData.lastName}\nEmail: ${this.formData.email}\n\n${this.formData.message}`,
        [emailConfig.templateVars.reply_to]: this.formData.email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        emailParams
      );

      console.log('Email sent successfully!', response.status, response.text);
      alert('Thank you for your message! We will get back to you soon.');
      this.resetForm();

    } catch (error) {
      console.error('Failed to send email:', error);
      alert(`Sorry, there was an error sending your message. Please try again later or contact us directly at ${emailConfig.toEmail}`);
    } finally {
      this.isSubmitting = false;
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  private isFormValid(): boolean {
    return this.formData.firstName.trim() !== '' &&
           this.formData.lastName.trim() !== '' &&
           this.formData.email.trim() !== '' &&
           this.formData.subject.trim() !== '' &&
           this.formData.message.trim() !== '';
  }

  private resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
