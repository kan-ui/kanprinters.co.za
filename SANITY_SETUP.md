# Sanity CMS Setup Guide

This project is now integrated with Sanity CMS for content management.

## Initial Setup

1. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Create Sanity Project**
   - Go to https://www.sanity.io/manage
   - Create a new project
   - Note your Project ID

3. **Configure Environment Variables**
   - Copy `.env.local.example` to `.env.local`
   - Add your Sanity Project ID and Dataset:
     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
     NEXT_PUBLIC_SANITY_DATASET=production
     ```

4. **Install Sanity CLI** (if not already installed)
   ```bash
   npm install -g @sanity/cli
   ```

5. **Login to Sanity**
   ```bash
   sanity login
   ```

6. **Initialize Sanity in your project**
   ```bash
   sanity init --env
   ```
   - Select your project when prompted
   - Use the existing configuration

## Running Sanity Studio

Access the Sanity Studio at: `http://localhost:3333/studio`

Or run:
```bash
npm run studio
```

## Content Types Available

1. **Services** - Manage your printing services
2. **Portfolio** - Showcase your work and projects
3. **Testimonials** - Customer testimonials
4. **FAQs** - Frequently asked questions
5. **Team Members** - Team member profiles
6. **Brand Values** - Company values and principles

## Next Steps

1. Add content through Sanity Studio
2. Update components to fetch from Sanity (see component examples)
3. Deploy Sanity Studio alongside your Next.js app

## Useful Links

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/docs/js-client)
- [Sanity Studio Documentation](https://www.sanity.io/docs/studio)
