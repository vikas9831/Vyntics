export const emailConfig = {
  // EmailJS Configuration
  // To set up EmailJS:
  // 1. Go to https://www.emailjs.com/
  // 2. Create a free account
  // 3. Create an email service (Gmail, Outlook, etc.)
  // 4. Create an email template
  // 5. Get your Public Key from Account settings
  // 6. Replace the values below with your actual EmailJS credentials

  publicKey: 'gcPY8vG6NjfsNRl3I',           // Replace with your EmailJS Public Key
  serviceId: 'service_7vyceh8',           // Replace with your EmailJS Service ID  
  templateId: 'template_8vl8qdm',         // Replace with your EmailJS Template ID
  
  // Email settings
  toEmail: 'vikassharma9831@gmail.com',   // The email address to receive form submissions
  
  // EmailJS template variables (these names should match your EmailJS template)
  templateVars: {
    to_email: 'to_email',
    from_name: 'from_name', 
    from_email: 'from_email',
    subject: 'subject',
    message: 'message',
    reply_to: 'reply_to'
  }
}; 