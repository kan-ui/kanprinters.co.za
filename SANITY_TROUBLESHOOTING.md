# Sanity CMS Troubleshooting Guide

## Issues Fixed

### 1. **CDN Caching**
- **Problem**: CDN was caching data, preventing updates from appearing
- **Fix**: Disabled CDN in development mode (`useCdn: false` in dev, `true` in production)
- **Location**: `src/lib/sanity.client.ts`

### 2. **Error Handling**
- **Problem**: Errors were silently failing, falling back to hardcoded data
- **Fix**: Added comprehensive error logging and handling
- **Location**: `src/lib/sanity.api.ts` and `src/app/page.tsx`

### 3. **Next.js Caching**
- **Problem**: Next.js was caching page data indefinitely
- **Fix**: Added `revalidate: 60` to refresh data every 60 seconds
- **Location**: `src/app/page.tsx`

## How to Verify Sanity is Working

### 1. Check Console Logs
When you run `npm run dev`, you should see:
```
🔄 Fetching data from Sanity...
✅ Hero section data fetched from Sanity
✅ Fetched X benefit sections from Sanity
✅ Data fetch completed
📝 Using Sanity data for hero section
```

If you see warnings like:
```
⚠️ Using fallback data for hero section
❌ Error fetching hero section: [error]
```

This means Sanity data is not being fetched correctly.

### 2. Check Environment Variables
Create `.env.local` in the root directory:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=6ch09wec
NEXT_PUBLIC_SANITY_DATASET=production
```

**Note**: The project ID is currently hardcoded as fallback (`6ch09wec`), but you should set it in `.env.local` for production.

### 3. Verify Sanity Studio
1. Go to `http://localhost:3000/studio`
2. Make sure you can see and edit content
3. **IMPORTANT**: After making changes, click **"Publish"** button
4. Changes won't appear until they're published!

### 4. Check Browser Console
Open browser DevTools (F12) and check:
- Network tab: Look for requests to `api.sanity.io`
- Console tab: Look for the log messages mentioned above

## Common Issues

### Issue: Changes in Sanity don't appear on frontend

**Solutions:**
1. **Did you publish?** - Changes must be published in Sanity Studio
2. **Clear Next.js cache**: 
   ```bash
   rm -rf .next
   npm run dev
   ```
3. **Hard refresh browser**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
4. **Wait 60 seconds**: Revalidation happens every 60 seconds
5. **Check console logs**: Look for errors in terminal and browser console

### Issue: "No data found" errors

**Solutions:**
1. **Check Project ID**: Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` matches your Sanity project
2. **Check Dataset**: Default is `production`, make sure your content is in the correct dataset
3. **Verify Content Exists**: Go to Sanity Studio and check if documents exist
4. **Check Document Types**: Make sure you created documents with the correct schema types

### Issue: Still seeing hardcoded data

**Solutions:**
1. **Check console logs**: Look for `⚠️ Using fallback data` messages
2. **Verify queries**: Check `src/lib/sanity.queries.ts` matches your schema
3. **Check field names**: Make sure field names in queries match your schema exactly
4. **Restart dev server**: Sometimes Next.js needs a restart to pick up changes

## Testing Sanity Connection

### Quick Test Script
Create `test-sanity.js` in root:
```javascript
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '6ch09wec',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function test() {
  try {
    const data = await client.fetch('*[_type == "heroSection"][0]');
    console.log('✅ Connection successful!');
    console.log('Data:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('❌ Connection failed:', error);
  }
}

test();
```

Run: `node test-sanity.js`

## Force Refresh Data

If you need to force refresh immediately:

1. **Stop dev server** (Ctrl+C)
2. **Delete cache**: `rm -rf .next`
3. **Restart**: `npm run dev`
4. **Hard refresh browser**: Ctrl+Shift+R

## Production Considerations

1. **Enable CDN**: CDN is automatically enabled in production for better performance
2. **Increase Revalidation**: Consider increasing `revalidate` time for production
3. **Environment Variables**: Make sure to set proper env vars in production
4. **Sanity Webhooks**: Consider setting up webhooks to trigger rebuilds on content changes

## Still Having Issues?

1. Check the terminal/console for specific error messages
2. Verify your Sanity project ID and dataset
3. Make sure content is published in Sanity Studio
4. Check that schema field names match between queries and schemas
5. Verify network connectivity to `api.sanity.io`
