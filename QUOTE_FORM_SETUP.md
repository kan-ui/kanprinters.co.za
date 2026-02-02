# Quote Form Setup Guide

## ✅ What's Been Created

1. **Quote Form Page** (`/quote`)
   - Professional form with company logo
   - Fields for contact info, service type, description, quantity, deadline
   - Responsive design with dark mode support
   - Form validation and error handling

2. **API Route** (`/api/quote`)
   - Handles form submissions
   - Creates professional email template with logo
   - Sends to both email addresses

3. **Updated Links**
   - All "Get Quote" buttons now link to `/quote`
   - Hero section, CTA section, and Navbar updated

## 📧 Email Setup (Required)

The form uses **Web3Forms** (free email service) to send emails. You need to:

### Step 1: Get Free API Key

1. Go to https://web3forms.com
2. Sign up for a free account (no credit card required)
3. Get your Access Key from the dashboard
4. Add it to your `.env.local` file:

```env
WEB3FORMS_ACCESS_KEY=your-access-key-here
```

### Step 2: Configure Email Recipients

The form is already configured to send to:
- `info@kanprinters.co.za`
- `mario@kanprinters.co.za`

These are set in `src/app/api/quote/route.ts` (line ~140).

### Step 3: Test the Form

1. Start your dev server: `npm run dev`
2. Go to `http://localhost:3000/quote`
3. Fill out and submit the form
4. Check both email inboxes

## 🎨 Email Template Features

The email includes:
- ✅ Professional HTML template with gradient header
- ✅ Company branding colors (indigo/purple)
- ✅ All form data formatted nicely
- ✅ Clickable email and phone links
- ✅ Company contact information in footer
- ✅ Plain text version for email clients that don't support HTML

## 🔧 Alternative Email Solutions

If Web3Forms doesn't work for you, here are alternatives:

### Option 1: Resend (Recommended for Production)
- More reliable, better deliverability
- Free tier: 3,000 emails/month
- Sign up at https://resend.com

### Option 2: SendGrid
- Free tier: 100 emails/day
- Sign up at https://sendgrid.com

### Option 3: Nodemailer (SMTP)
- Use your own email server
- Requires SMTP credentials
- More setup required

## 📝 Form Fields

The form collects:
- **Contact Info**: Name, Email, Phone, Company (optional)
- **Project Details**: Service Type, Description, Quantity, Deadline (optional), Additional Notes (optional)

## 🚀 Next Steps

1. **Get Web3Forms API Key** (5 minutes)
2. **Add to `.env.local`**:
   ```
   WEB3FORMS_ACCESS_KEY=your-key-here
   ```
3. **Test the form** by submitting a test quote
4. **Verify emails** arrive at both addresses

## 💡 Tips

- The form validates all required fields before submission
- Success/error messages are displayed clearly
- Mobile-responsive design
- Dark mode supported
- Form resets after successful submission

## ❓ Troubleshooting

**Emails not arriving?**
- Check spam/junk folder
- Verify API key is correct in `.env.local`
- Check Web3Forms dashboard for delivery status
- Ensure email addresses are correct in the API route

**Form not submitting?**
- Check browser console for errors
- Verify API route is accessible
- Check network tab in browser DevTools

## 📧 Email Format

The email will look professional with:
- Header with gradient background
- Organized sections for contact and project details
- Clickable reply button
- Company footer with contact info

Both recipients will receive the same email with all the quote request details.
