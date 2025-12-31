# Email Setup Guide for NexDataDynamics Contact Form

This guide will help you configure EmailJS to enable email functionality in your contact form. When users submit the form, emails will be sent directly to `vikassharma9831@gmail.com`.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create Email Service

1. After logging in, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended):
   - Select "Gmail"
   - Click "Connect Account"
   - Log in with `vikassharma9831@gmail.com`
   - Grant necessary permissions
4. Give your service a name (e.g., "NexDataDynamics Contact")
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

### Template Settings:
- **Template Name**: Contact Form Submission

### Email Template Configuration:

**To Email:** `{{to_email}}`

**Subject:** `{{subject}}`

**Message Body:**
```
{{message}}
```

### Important Template Settings:
- **From Name**: Leave this as your default (NexDataDynamics or your preferred name)
- **From Email**: This will be vikassharma9831@gmail.com (your authenticated email)
- **Reply To**: `{{reply_to}}` (This ensures when you reply, it goes to the sender)

### Template Variables:
Make sure these variables are included in your template:
- `{{to_email}}` - Destination email (vikassharma9831@gmail.com)
- `{{from_name}}` - Sender's full name
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Formatted subject with sender info
- `{{message}}` - Formatted message with all form data
- `{{reply_to}}` - Sender's email for replies

### Why This Setup Works:
- **From field**: Shows vikassharma9831@gmail.com (required for authentication)
- **Subject line**: Shows "[Contact Form] [User's Subject] - From [User's Name]"
- **Reply-to field**: Set to sender's email (when you hit reply, it goes to them)
- **Message body**: Clearly formatted with all sender information and message

4. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" (your profile)
2. Click on "General" tab
3. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/app/config/email.config.ts`
2. Replace the placeholder values with your actual EmailJS credentials:

```typescript
export const emailConfig = {
  publicKey: 'YOUR_ACTUAL_PUBLIC_KEY',      // Replace with your Public Key
  serviceId: 'YOUR_ACTUAL_SERVICE_ID',      // Replace with your Service ID
  templateId: 'YOUR_ACTUAL_TEMPLATE_ID',    // Replace with your Template ID
  
  toEmail: 'vikassharma9831@gmail.com',     // This is already set correctly
  
  // Keep these template variable names as they are
  templateVars: {
    to_email: 'to_email',
    from_name: 'from_name', 
    from_email: 'from_email',
    subject: 'subject',
    message: 'message',
    reply_to: 'reply_to'
  }
};
```

## Step 6: Test the Setup

1. Run your Angular application: `ng serve`
2. Navigate to the contact form
3. Fill out all fields and submit
4. Check `vikassharma9831@gmail.com` for the email

## Email Format

When someone submits the contact form, you'll receive an email with:

### Email Headers:
- **From**: vikassharma9831@gmail.com (your authenticated email)
- **Subject**: "[Contact Form] [User's Subject] - From [User's First Name] [User's Last Name]"
- **Reply-To**: [Sender's actual email address]

### Email Body Example:
```
NEW CONTACT FORM SUBMISSION
============================

SENDER INFORMATION:
-------------------
Name: John Smith
Email: john.smith@example.com
Subject: Inquiry about Data Analytics Services

MESSAGE:
--------
Hi, I'm interested in learning more about your data analytics 
services for my e-commerce business. Could we schedule a call 
to discuss my requirements?

============================
This email was sent from the NexDataDynamics contact form.
Please reply directly to this email to respond to John.
```

### Key Benefits:
- **Clear sender identification**: Name and email prominently displayed
- **Easy to reply**: Just hit "Reply" and it goes directly to the sender
- **Organized information**: All form data clearly structured
- **Professional format**: Easy to read and process

## Troubleshooting

### Common Issues:

1. **"Invalid template ID"**: Make sure you copied the Template ID correctly
2. **"Invalid service ID"**: Verify the Service ID from your EmailJS dashboard
3. **"Invalid public key"**: Check that you copied the Public Key correctly
4. **Emails not received**: 
   - Check spam folder
   - Verify the email service is properly connected
   - Ensure template variables match exactly

### Rate Limits:
- EmailJS free plan allows 200 emails per month
- If you need more, consider upgrading to a paid plan

## Security Note

Your EmailJS Public Key is safe to use in frontend code as it's designed for client-side usage. However, keep your private keys secure and never commit them to version control.

## Support

If you encounter issues:
1. Check the EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Review browser console for error messages
3. Test your template directly in the EmailJS dashboard

---

Once configured, your contact form will automatically send emails to `vikassharma9831@gmail.com` with the subject and message from the form! 