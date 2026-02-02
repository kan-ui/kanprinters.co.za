# Email Troubleshooting Guide

## Issue: Not Receiving Emails

If emails aren't arriving, here are the steps to fix it:

## ⚠️ CRITICAL: Configure Recipients in Web3Forms Dashboard

**MOST IMPORTANT STEP**: Web3Forms requires you to configure recipient emails in their dashboard. The `to` field in the API might not work without this.

### How to Configure:

1. **Go to Web3Forms Dashboard**: https://web3forms.com
2. **Log in** to your account
3. **Find your access key**: `1971af10-b447-47c8-ba14-60b45e95890e`
4. **Click on the access key** or go to "Settings" / "Access Keys"
5. **Add recipient emails**:
   - Primary: `info@kanprinters.co.za`
   - Secondary: `mario@kanprinters.co.za`
6. **Save settings**

**Without this step, emails won't be sent even if the API returns success!**

## Step 2: Check Email Format

The form now uses the correct Web3Forms format:
- Uses `apikey` field (not `access_key`)
- Includes `botcheck: false`
- Proper message formatting

## Step 3: Test the Form

1. Go to `/quote` page
2. Fill out the form
3. Submit
4. Check browser console (F12) for logs
5. Check both email inboxes AND spam folders

## Step 4: Verify in Web3Forms Dashboard

1. Log into Web3Forms dashboard
2. Check "Submissions" section
3. You should see form submissions there
4. Check if emails were sent

## Common Issues

### Issue: Emails go to spam
**Solution**: 
- Check spam/junk folders
- Add `info@kanprinters.co.za` and `mario@kanprinters.co.za` to contacts
- Mark as "Not Spam" if found

### Issue: Web3Forms shows success but no email
**Solution**:
- Verify emails are configured in Web3Forms dashboard
- Check email addresses are correct (no typos)
- Try a test email from Web3Forms dashboard

### Issue: API returns error
**Solution**:
- Check browser console for error details
- Verify API key is correct
- Check Web3Forms account status

## Alternative: Use Resend (More Reliable)

If Web3Forms continues to have issues, I can switch to Resend:

1. Sign up at https://resend.com (free: 3,000 emails/month)
2. Get API key
3. I'll update the code to use Resend instead

Resend is more reliable and doesn't have Cloudflare issues.

## Quick Test

Try submitting a test form and check:
1. ✅ Browser console shows "Web3Forms response: {success: true}"
2. ✅ Web3Forms dashboard shows the submission
3. ✅ Check both email inboxes
4. ✅ Check spam folders

## Still Not Working?

Let me know and I can:
- Switch to Resend (more reliable)
- Set up direct SMTP
- Add email logging to database
- Create a webhook solution
