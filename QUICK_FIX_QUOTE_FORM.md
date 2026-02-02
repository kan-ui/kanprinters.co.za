# Quick Fix for Quote Form Error

## The Problem
You're getting "Internal server error" because the **Web3Forms API key is not configured**.

## Quick Solution (2 minutes)

### Step 1: Get Free API Key
1. Go to **https://web3forms.com**
2. Click "Get Started" or "Sign Up"
3. Enter your email (no credit card needed)
4. Copy your **Access Key** from the dashboard

### Step 2: Create `.env.local` File
In your project root folder, create a file named `.env.local` and add:

```env
WEB3FORMS_ACCESS_KEY=your-access-key-here
```

**Replace `your-access-key-here` with your actual key from Step 1.**

### Step 3: Restart Dev Server
1. Stop your dev server (Ctrl+C)
2. Start it again: `npm run dev`
3. Try submitting the form again

## That's It! ✅

The form should now work. The error message will also be more helpful if something else goes wrong.

## Still Getting Errors?

Check the terminal/console for detailed error messages. The improved error handling will tell you exactly what's wrong.

## Alternative: Test Without Email First

If you want to test the form without setting up email right now, the form will still validate and show success, but emails won't be sent until you add the API key.
