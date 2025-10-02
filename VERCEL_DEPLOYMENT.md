# Vercel Deployment Guide

This guide helps resolve the "Configuration must contain `projectId`" error when deploying to Vercel.

## Required Environment Variables

Add these environment variables in your Vercel project settings:

### Production Environment Variables
```
NEXT_PUBLIC_SANITY_PROJECT_ID=w8a19ipn
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk6tLBTG9w12jCM254bVlZB71A3XncUpoxaq0tzzuAwPqmCOhP4DDBb7moGkV8fhct5mqYKntlc9LyItgmgGfq5rljgkzrJeQjegSYpXK6IwVqp8KPsjAVvgbSkwQ5AOLFQRq0MPiENYiRldBhHuyM3nBnmd7gh2q2AxpkONgopYgnwVg3H2
NEXT_PUBLIC_SANITY_DATASET_DEV=production
NEXT_PUBLIC_SANITY_DATASET_PROD=production
NEXT_PUBLIC_STUDIO_URL=https://studio.cuddles.co.in
NEXT_PUBLIC_STUDIO_APP_ID=yqwthpphjmes1m4833n0oelt
NODE_ENV=production
```

## Steps to Fix Vercel Deployment

1. **Go to your Vercel dashboard**
2. **Select your project**
3. **Go to Settings → Environment Variables**
4. **Add each environment variable above**
5. **Make sure to set them for Production, Preview, and Development environments**
6. **Redeploy your project**

## How to Add Environment Variables in Vercel

1. In your Vercel dashboard, click on your project
2. Go to "Settings" tab
3. Click "Environment Variables" in the sidebar
4. For each variable:
   - Enter the **Name** (e.g., `NEXT_PUBLIC_SANITY_PROJECT_ID`)
   - Enter the **Value** (e.g., `w8a19ipn`)
   - Select environments: **Production**, **Preview**, **Development**
   - Click "Save"

## Common Issues and Solutions

### Issue: "Configuration must contain projectId"
**Solution**: Make sure `NEXT_PUBLIC_SANITY_PROJECT_ID` is set in Vercel environment variables.

### Issue: Environment variables not loading
**Solution**:
1. Check that variable names are exactly correct (case-sensitive)
2. Make sure they're set for the correct environment (Production/Preview/Development)
3. Redeploy after adding variables

### Issue: Sanity data not loading
**Solution**: Check that `SANITY_API_TOKEN` is set correctly with read permissions.

## Verification

After deployment, check the Vercel function logs to see if the configuration validation messages appear. You should see:
```
[Config Validation] ✅ All Sanity environment variables are properly configured
```

If you see warning messages instead, double-check your environment variable setup in Vercel.

## Local Development

For local development, make sure your `.env.local` file contains all the variables listed above.

## Fallback Configuration

The application includes fallback values to prevent complete failures:
- `projectId` falls back to `w8a19ipn`
- `dataset` falls back to `production`

However, it's still recommended to set all environment variables properly for optimal functionality.