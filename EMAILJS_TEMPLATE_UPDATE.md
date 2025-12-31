# Display Form Submitter's Email in From Field

## Goal
Make the email "from" field show the form submitter's email address instead of vikassharma9831@gmail.com

## Update Your EmailJS Template

1. **Go to EmailJS**: [https://emailjs.com](https://emailjs.com) → Login
2. **Email Templates** → Edit `template_utd2ljl`

## Exact Template Configuration

### Template Settings:
```
Template Name: Contact Form Submission
To Email: {{to_email}}
From Name: {{from_name}}
From Email: [LEAVE EMPTY]
Subject: {{subject}}
Reply-To: {{reply_to}}
```

### Message Body:
```
{{message}}
```

### IMPORTANT: 
- **From Name** must be exactly: `{{from_name}}`
- **From Email** must be EMPTY (don't put any email there)

## What You'll Get

After the update, emails will show:

```
from: panditvikas2512@gmail.com
reply-to: panditvikas2512@gmail.com  
to: vikassharma9831@gmail.com
subject: Regarding Project

Message:
From: Vikas Pandit
Email: panditvikas2512@gmail.com

[User's actual message here]
```

## Result:
- ✅ **From field**: Shows form submitter's email (panditvikas2512@gmail.com)
- ✅ **To field**: vikassharma9831@gmail.com  
- ✅ **Subject**: User's exact subject
- ✅ **Message**: Includes sender's name and email, then their message
- ✅ **Reply**: Goes directly to form submitter

## Steps to Apply:

1. **Save** the EmailJS template with exact settings above
2. **Clear browser cache** (important!)
3. **Test** the contact form again
4. **Check** vikassharma9831@gmail.com

## Why This Works:

By setting `From Name` to `{{from_name}}` (which contains the submitter's email) and leaving `From Email` empty, EmailJS will display the submitter's email in the from field while using your authenticated email for actual sending.

---

This will make emails appear to come FROM the form submitter TO you! 