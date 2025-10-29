# Google Search Console Setup Guide

This document explains how to verify your site with Google Search Console.

## Files Added for SEO

1. **`public/robots.txt`** - Tells search engines which pages to crawl
2. **`app/sitemap.ts`** - Generates a sitemap.xml automatically at `/sitemap.xml`
3. **Updated `app/layout.tsx`** - Enhanced metadata with SEO tags

## Steps to Verify Your Site

1. **Go to Google Search Console**
   - Visit [https://search.google.com/search-console](https://search.google.com/search-console)
   - Sign in with your Google account

2. **Add Property**
   - Click "Add property"
   - Select "URL prefix"
   - Enter: `https://www.vegas55plushomes.com`
   - Click "Continue"

3. **Verify Ownership**
   You have multiple options:

   **Option A: HTML Tag (Recommended)**
   - Select "HTML tag" verification method
   - Copy the `content` value from the meta tag (e.g., `content="abc123xyz...")
   - Open `app/layout.tsx`
   - Find the `verification` section in metadata (around line 64)
   - Uncomment and add your code:
     ```typescript
     verification: {
       google: 'your-verification-code-here',
     },
     ```
   - Commit and push the changes
   - Deploy to Vercel
   - Return to Google Search Console and click "Verify"

   **Option B: HTML File Upload**
   - Download the HTML verification file from Google Search Console
   - Place it in the `public` directory
   - Commit, push, and deploy
   - Click "Verify" in Google Search Console

   **Option C: Domain Name Provider**
   - Add a TXT record to your DNS settings
   - Follow Google's instructions

4. **Submit Sitemap**
   - Once verified, go to "Sitemaps" in the left menu
   - Enter: `sitemap.xml`
   - Click "Submit"
   - Your sitemap is automatically available at: `https://www.vegas55plushomes.com/sitemap.xml`

## Files Overview

### `public/robots.txt`
Allows all search engines to crawl your site and points to your sitemap.

### `app/sitemap.ts`
Automatically generates a sitemap at `/sitemap.xml`. You can add more URLs as your site grows.

### `app/layout.tsx`
Contains enhanced SEO metadata including:
- Canonical URLs
- Open Graph tags for social sharing
- Twitter Card tags
- Robot directives
- Verification tag support

## Testing

After deployment, verify:
1. ✅ `https://www.vegas55plushomes.com/robots.txt` is accessible
2. ✅ `https://www.vegas55plushomes.com/sitemap.xml` is accessible
3. ✅ Your site is verified in Google Search Console
4. ✅ Sitemap is submitted and processed

## Additional Notes

- The sitemap is dynamically generated and updates automatically
- You can add more routes to `app/sitemap.ts` as your site grows
- Monitor crawl errors and indexing in Google Search Console
- Use Google's URL Inspection tool to test individual pages

