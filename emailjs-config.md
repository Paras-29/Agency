# EmailJS Configuration Guide

This guide will help you set up EmailJS for the contact form functionality.

## 🔧 Setup Steps

### 1. Create EmailJS Account
- Visit [EmailJS](https://www.emailjs.com/)
- Click "Sign Up" and create a free account
- Verify your email address

### 2. Add Email Service
1. Go to **Email Services** in your dashboard
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. **Note down your Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **"Create New Template"**
3. Design your email template with these variables:
   ```
   To Name: {{name}}
   From Email: {{email}}
   Subject: {{subject}}
   Message: {{message}}
   ```
4. **Note down your Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (e.g., `user_def456`)

### 5. Update Contact Component
Replace the placeholders in `src/components/Contact.jsx`:

```jsx
const result = await emailjs.sendForm(
  'service_abc123',        // Your Service ID
  'template_xyz789',       // Your Template ID
  formRef.current,
  'user_def456'            // Your Public Key
)
```

## 📧 Email Template Example

Here's a sample email template you can use:

**Subject:** New Contact Form Submission from {{name}}

**Body:**
```
Hello,

You have received a new contact form submission:

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

## 🚀 Testing

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email for the message
5. Check the browser console for any errors

## 🔒 Security Notes

- **Never expose your Private Key** (only Public Key is needed)
- **Rate limiting**: EmailJS has limits on free accounts
- **Spam protection**: Consider adding CAPTCHA for production
- **Email validation**: The form includes basic email validation

## 💰 Pricing

- **Free Plan**: 200 emails/month
- **Paid Plans**: Starting at $15/month for 1,000 emails
- **Enterprise**: Custom pricing for high-volume needs

## 🆘 Troubleshooting

### Common Issues:

1. **"Service not found"**
   - Check your Service ID is correct
   - Ensure the service is active

2. **"Template not found"**
   - Verify your Template ID
   - Check template is published

3. **"Invalid public key"**
   - Confirm your Public Key is correct
   - Check account status

4. **Form not sending**
   - Check browser console for errors
   - Verify all IDs are correctly placed
   - Test with EmailJS dashboard

### Support:
- EmailJS Documentation: [docs.emailjs.com](https://docs.emailjs.com/)
- EmailJS Support: [support@emailjs.com](mailto:support@emailjs.com)
- Community Forum: [community.emailjs.com](https://community.emailjs.com/)

## 📱 Production Considerations

For production deployment:

1. **Environment Variables**: Store IDs in environment variables
2. **Error Handling**: Implement proper error handling
3. **Loading States**: Show loading indicators during submission
4. **Success Messages**: Display confirmation messages
5. **Analytics**: Track form submissions
6. **Backup**: Consider server-side fallback

## 🔄 Alternative Solutions

If EmailJS doesn't meet your needs:

- **Formspree**: Simple form handling
- **Netlify Forms**: Built-in form processing
- **Custom Backend**: Node.js/Express server
- **Serverless Functions**: Vercel/Netlify functions
- **Email APIs**: SendGrid, Mailgun, etc.
