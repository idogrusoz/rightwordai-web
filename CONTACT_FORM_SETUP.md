# Contact Form Setup Instructions

The contact form has been successfully added to the website! Here's what you need to know:

## What Was Added

1. **ContactForm Component** (`components/ContactForm.tsx`)
   - Beautiful, accessible contact form with name, email, company, and message fields
   - Form validation and error handling
   - Success/error state management
   - Styled to match the website's design system

2. **API Route** (`app/api/contact/route.ts`)
   - Handles form submissions
   - Validates input data
   - Sends emails to info@rightword.ai using Resend
   - Returns appropriate success/error responses

3. **Updated Contact Section** (in `app/page.tsx`)
   - Added the contact form below existing contact methods
   - Maintains all existing functionality

## Setup Required

To make the contact form work, you need to set up a Resend API key:

### Step 1: Get a Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key

### Step 2: Add Environment Variable

Create a `.env.local` file in the root directory with:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

### Step 3: Verify Your Domain (Production Only)

For production use, you'll need to:
1. Verify your domain in Resend dashboard
2. Update the `from` email in `app/api/contact/route.ts` from:
   ```typescript
   from: "Rightword.AI Contact Form <onboarding@resend.dev>"
   ```
   to:
   ```typescript
   from: "Rightword.AI Contact Form <noreply@rightword.ai>"
   ```

**Note:** For testing purposes, `onboarding@resend.dev` works fine without domain verification.

## Testing

1. Make sure you have the `RESEND_API_KEY` in your `.env.local` file
2. Run the development server: `pnpm dev`
3. Navigate to the contact section on your website
4. Fill out and submit the form
5. Check the email at info@rightword.ai

## Features

- ✅ Form validation (required fields, email format)
- ✅ Loading states during submission
- ✅ Success/error messages
- ✅ Reply-to functionality (emails sent to info@rightword.ai will have the submitter's email as reply-to)
- ✅ Responsive design
- ✅ Accessibility features (proper labels, ARIA attributes)
- ✅ Beautiful animations with Framer Motion

## Email Format

Emails sent from the contact form include:
- Sender's name
- Sender's email (as reply-to)
- Company name (if provided)
- Message content
- Timestamp and source information

All submissions are sent to: **info@rightword.ai**

