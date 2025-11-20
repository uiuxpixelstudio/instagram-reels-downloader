# RapidAPI Integration Guide

## Finding and Subscribing to Instagram Reels API

### Step 1: Visit RapidAPI

Go to https://rapidapi.com/hub

### Step 2: Search for Instagram APIs

Popular options:

#### Option A: "Instagram Reels Downloader"
- **Search term**: "instagram reels downloader"
- **Rating**: 4.5+ stars
- **Free tier**: Yes
- **Requests/month**: 100-1000
- **Response time**: <1 second

#### Option B: "Instagram Video Downloader"
- **Search term**: "instagram video downloader"
- **Includes**: Reels, Posts, Stories
- **Free tier**: Yes
- **Requests/month**: 500+

#### Option C: "Social Media Downloader"
- **Search term**: "social media downloader"
- **Platform support**: Instagram, TikTok, YouTube
- **Free tier**: Yes
- **Flexible**: Works with multiple platforms

### Step 3: Subscribe to API

1. Click on chosen API
2. Click "Subscribe"
3. Select "Free" plan
4. Click "Subscribe"
5. Accept terms and conditions

### Step 4: Get API Credentials

1. Go to your API dashboard
2. Find your **API Key** (X-RapidAPI-Key)
3. Find your **API Host** (X-RapidAPI-Host)
4. Copy both values

Example:
```
X-RapidAPI-Key: abc123def456ghi789
X-RapidAPI-Host: instagram-api.rapidapi.com
```

### Step 5: Add to .env

```env
VITE_RAPIDAPI_KEY=abc123def456ghi789
VITE_RAPIDAPI_HOST=instagram-api.rapidapi.com
```

---

## Testing Your API

### Method 1: RapidAPI Console (Recommended)

1. Go to your API page on RapidAPI
2. Find the "Test" or "Code Snippets" section
3. Select "JavaScript" or "Fetch"
4. Copy the example code
5. Replace URL with Instagram Reels link
6. Run the code
7. Check the response

### Method 2: Using Postman

1. Download [Postman](https://postman.com)
2. Create new request
3. Set method to GET/POST (check API docs)
4. Add headers:
   - `X-RapidAPI-Key: your_key`
   - `X-RapidAPI-Host: your_host`
5. Add URL parameter with Instagram link
6. Send request
7. View response

### Method 3: Using curl

```bash
curl --request GET \
  --url 'https://your-api-host/download?url=https://instagram.com/reels/...' \
  --header 'X-RapidAPI-Key: your_key' \
  --header 'X-RapidAPI-Host: your_host'
```

---

## Understanding API Endpoints

### Common Endpoint Patterns

**Pattern 1:**
```
GET https://api.com/download?url={instagram_url}
```

**Pattern 2:**
```
POST https://api.com/download
Body: { "url": "instagram_url" }
```

**Pattern 3:**
```
GET https://api.com/fetch?link={instagram_url}
```

**Pattern 4:**
```
POST https://api.com/get-video
Body: { "reels_url": "instagram_url" }
```

### How to Find Your API's Pattern

1. Go to your API on RapidAPI
2. Look for "Code Snippets" or "Testing" section
3. See examples in different languages
4. Copy the JavaScript/Fetch example
5. Note the URL pattern and method

---

## Response Format Examples

### Standard Response
```json
{
  "success": true,
  "data": {
    "video_url": "https://..../video.mp4",
    "thumbnail": "https://..../thumb.jpg",
    "title": "Beautiful Sunset",
    "duration": "00:30",
    "author": "john_photographer",
    "published_date": "2024-01-15"
  }
}
```

### Minimal Response
```json
{
  "video_url": "https://..../video.mp4"
}
```

### Error Response
```json
{
  "error": "Invalid URL",
  "message": "Please provide a valid Instagram URL"
}
```

---

## Updating Service for Your API

If your API response format is different, update `src/services/instagramService.ts`:

### Example 1: Different Endpoint
```typescript
// Change the endpoint
const response = await apiClient.post('/fetch-video', {
  reels_url: cleanUrl, // Changed parameter name
});
```

### Example 2: Different Response Structure
```typescript
// If response structure is different:
return {
  success: true,
  data: {
    video_url: response.data.download_link, // Changed key
    thumbnail: response.data.preview_img,   // Changed key
    title: response.data.video_title,
    duration: response.data.length,
    author: response.data.creator_name,
  }
};
```

### Example 3: No Success Flag
```typescript
// If API doesn't return success flag:
if (!response.data.video_url) {
  throw new Error('No video URL in response');
}
```

---

## Rate Limits & Quotas

### Understanding Rate Limits

**Free Tier Typical Limits:**
- 100-1000 requests per day/month
- 10 requests per minute
- 1 MB response size

### Implementing Rate Limiting

Add to `instagramService.ts`:

```typescript
import { throttle } from 'lodash'; // Add lodash

const throttledFetch = throttle(
  async (url: string) => {
    return await fetchReels(url);
  },
  1000, // 1 second between requests
  { leading: true, trailing: false }
);
```

### Handling Rate Limit Errors

```typescript
// Already handled in the service:
if (axiosError.response?.status === 429) {
  throw new Error('Rate limit exceeded. Please try again later.');
}
```

---

## Common Issues & Solutions

### Issue 1: Invalid API Key
**Error:** 401 Unauthorized
**Solution:**
- Copy key again from RapidAPI
- Check no extra spaces
- Verify key hasn't expired
- Check .env file path

### Issue 2: Invalid Host
**Error:** 403 Forbidden
**Solution:**
- Copy host from API page
- Format: `api-host.rapidapi.com`
- Don't include `https://`
- Check for typos

### Issue 3: Invalid URL
**Error:** Invalid Instagram URL or 400 Bad Request
**Solution:**
- Use complete URL: `https://instagram.com/reels/...`
- Don't use shortened links
- Check URL is valid on Instagram
- Some APIs only support Reels, not Posts

### Issue 4: CORS Errors
**Error:** CORS policy blocked
**Solution:**
- Check API has CORS enabled
- Use RapidAPI (it handles CORS)
- No additional headers needed for RapidAPI
- If using different API, add proxy

### Issue 5: No Response Body
**Error:** Empty response or undefined
**Solution:**
- Check API response in RapidAPI console
- Verify endpoint is correct
- Check POST vs GET method
- Inspect network tab in browser DevTools

---

## Alternative APIs (If RapidAPI API fails)

### Option 1: Direct API
Some services provide direct APIs:
- No RapidAPI middleware needed
- May require custom backend
- Better performance

### Option 2: Backend Proxy
Create your own backend:
```javascript
// Node.js/Express
app.get('/api/download', async (req, res) => {
  const response = await fetch('https://api...', {
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    }
  });
  res.json(response);
});
```

### Option 3: Serverless Functions
- AWS Lambda
- Vercel Functions
- Netlify Functions
- Google Cloud Functions

---

## Monitoring API Usage

### Check Quota in RapidAPI

1. Go to RapidAPI Dashboard
2. Select your API
3. View "Usage" or "Analytics"
4. See requests used vs limit
5. Check request history

### Alert Setup

Set up alerts for quota limits:
- In RapidAPI settings
- Enable quota notifications
- Add email for alerts

---

## Upgrading to Paid Plan

### When to Upgrade

- Free quota exhausted
- Need faster response times
- Need higher quality videos
- Production/commercial use

### Upgrade Steps

1. Go to API page on RapidAPI
2. Click on plan
3. Select paid tier
4. Add payment method
5. Activate immediately

### Cost Examples

- **Basic**: $0-5/month for 10,000 requests
- **Pro**: $10-20/month for 100,000 requests
- **Enterprise**: Custom pricing

---

## Best Practices

✅ **Do:**
- Use .env for credentials
- Cache successful responses
- Implement error handling
- Rate limit requests
- Monitor usage
- Keep API key private
- Use HTTPS only
- Handle edge cases

❌ **Don't:**
- Commit .env file
- Share API key publicly
- Expose key in frontend
- Make unlimited requests
- Ignore rate limits
- Use in production without monitoring

---

## Testing Checklist

- [ ] API key works
- [ ] API host is correct
- [ ] Can fetch sample URL
- [ ] Response contains video_url
- [ ] Response contains thumbnail
- [ ] Error handling works
- [ ] Rate limiting in place
- [ ] App builds without errors
- [ ] Works in production build

---

## Support Resources

- **RapidAPI Help**: https://rapidapi.com/support
- **API Documentation**: Check in RapidAPI dashboard
- **Community Forums**: RapidAPI community
- **Email Support**: support@rapidapi.com

---

**Happy coding!** 🚀
