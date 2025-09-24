# Sanity CMS Integration Setup Guide

This guide explains how to complete the Sanity CMS integration for your Cuddles Preschool website.

## Overview

The integration has been set up to manage the following content types:
- **Hero Section**: Main homepage content with title, description, and buttons
- **About Us**: About page content including vision, mission, and CEO information
- **Programs**: Educational programs offered by the school
- **Testimonials**: Customer reviews and feedback
- **Site Settings**: Global site information like contact details

## Setup Steps

### 1. Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io) and create an account
2. Create a new project
3. Choose "Blog (schema)" as your template or start blank
4. Note down your **Project ID** and **Dataset name** (usually 'production')

### 2. Configure Environment Variables

Update the `.env.local` file with your actual Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

To get your API token:
1. Go to your Sanity project dashboard
2. Navigate to API → Tokens
3. Create a new token with Editor permissions

### 3. Set Up Sanity Studio (Optional)

For content management, you can either:

**Option A: Use Sanity Studio (Recommended)**
```bash
npm install -g @sanity/cli
sanity init
# Follow the prompts and use your existing project ID
```

**Option B: Use the Sanity Manage interface**
- Go to your project dashboard at manage.sanity.io
- Use the web interface to manage content

### 4. Import Schemas

If you're setting up a new Sanity Studio, copy the schemas from the `sanity/schemas/` directory to your studio's schema configuration.

## Content Structure

### Hero Section
- Title (with decorative elements)
- Description text
- Primary and secondary button text/links
- Optional background image

### About Us
- Hero title and description
- Vision statement
- Mission statement
- CEO information (name, title, description, photo)

### Programs
- Program title and description
- Features list
- Age group
- Program image
- Display order

### Testimonials
- Customer name and role
- Testimonial content
- Rating (1-5 stars)
- Optional photo

### Site Settings
- Site name and description
- Contact information (phone, email, address)
- Social media links

## Usage

The website will automatically fetch content from Sanity. If no content is available, it falls back to default hardcoded content to ensure the site always works.

### Adding Content

1. Go to your Sanity Studio or project dashboard
2. Create documents for each content type
3. Publish the content
4. The website will automatically display the new content

### Updating Components

The following components have been updated to use Sanity:
- `components/HomePage/HeroSection/HeroSection.tsx`
- `components/AboutUs/HeroSection/HeroSection.tsx`
- Home page (`app/page.tsx`)
- About Us page (`app/AboutUs/page.tsx`)

## File Structure

```
lib/
├── sanity.ts          # Sanity client configuration
├── sanity-utils.ts    # Helper functions for fetching data
└── types.ts           # TypeScript types for content

sanity/schemas/
├── index.ts           # Schema exports
├── heroSection.ts     # Hero section schema
├── aboutUs.ts         # About us schema
├── program.ts         # Program schema
├── testimonial.ts     # Testimonial schema
└── siteSettings.ts    # Site settings schema
```

## Next Steps

1. Set up your Sanity project and get your credentials
2. Update the environment variables
3. Create content in Sanity Studio or the management interface
4. Test the integration by visiting your website

## Troubleshooting

### Content Not Showing
- Check that your environment variables are correct
- Ensure content is published in Sanity
- Check the browser console for any errors

### Images Not Loading
- Make sure images are uploaded to Sanity's asset management
- Check that the `@sanity/image-url` package is installed

### API Errors
- Verify your API token has the correct permissions
- Check that your project ID and dataset are correct

## Support

For Sanity-specific issues, refer to the [Sanity documentation](https://www.sanity.io/docs).