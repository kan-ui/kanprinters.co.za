# Sanity Schemas - Component Mapping

This document maps all Sanity schemas to the actual components and page data in your website.

## 📋 Complete Schema List (18 Total)

### Site-Wide Configuration (6 schemas)

1. **siteSettings** - Site metadata, company info, logo
   - Maps to: `src/app/layout.tsx` (metadata)
   - Fields: title, description, companyName, tagline, foundedYear, logo, favicon

2. **contactInfo** - Contact information
   - Maps to: `src/components/Footer.tsx`, Contact section
   - Fields: address (unit, street, suburb, city), phone (primary, secondary, VOIP), email, contactPersons, mapUrl
   - **Pre-filled with actual data**: Unit 14 Regency Park, 6 Induland Crescent, Lansdowne, Cape Town

3. **socialMedia** - Social media links
   - Maps to: `src/components/Footer.tsx`
   - Fields: facebook, tiktok, linkedin, instagram, youtube, whatsapp
   - **Pre-filled with actual URLs**

4. **heroSection** - Hero section content
   - Maps to: `src/components/Hero.tsx`
   - Fields: headline, description, primaryCTA, secondaryCTA, heroImage, trustLine
   - **Pre-filled with current hero content**

5. **companyHistory** - Company background
   - Maps to: `src/app/page.tsx` (About section)
   - Fields: foundingStory, founders, milestones, locations, currentLocation, journeyItems, identity, teamRoles
   - **Enhanced with journey timeline and team roles**

6. **ctaSection** - Call-to-action section
   - Maps to: `src/components/Cta.tsx`
   - Fields: headline, description, primaryCTA, secondaryCTA

### Page Sections (4 schemas)

7. **benefitSection** - Benefits/Services sections
   - Maps to: `src/components/data.js` (benefitOne, benefitTwo)
   - Fields: title, description, image, imagePosition, bullets (array with title, description, icon)
   - **Matches the exact structure from data.js**

8. **targetMarket** - Target market cards
   - Maps to: `src/app/page.tsx` (Target Markets section)
   - Fields: title, description, order
   - **6 markets**: Corporate Clients, Small Businesses, Educational Institutions, Events & Organizations, Individuals, Religious Institutions

9. **sectionContent** - Dynamic section content
   - Maps to: `src/app/page.tsx` (SectionTitle components)
   - Fields: sectionId, preTitle, title, description, content
   - **For managing all section titles and descriptions**

10. **videoContent** - Video embeds
    - Maps to: `src/components/Video.tsx`
    - Fields: videoId, title, description, thumbnail, section
    - **Currently using videoId: "fZ0D0cnR88E"**

11. **futureVision** - Future vision content
    - Maps to: `src/app/page.tsx` (Future Vision section)
    - Fields: category (innovation/sustainability), title, items (array)
    - **Two categories**: Innovation & Technology, People & Sustainability

### Content Types (7 schemas)

12. **service** - Individual services
    - Maps to: `src/components/ServicesCarousel.tsx`, `src/components/data.js`
    - Fields: title, icon, description, image, category, order
    - **8 services**: Design, Screen Printing, Pad Printing, Digital Printing, Laser Engraving, Sublimation, Heat Transfer, UV DTF Printing

13. **portfolio** - Portfolio items
    - Maps to: `src/app/page.tsx` (Portfolio section)
    - Fields: title, slug, description, images, category, client, featured, order

14. **testimonial** - Customer testimonials
    - Maps to: `src/components/Testimonials.tsx`
    - Fields: quote, author, role, company, image, featured, order

15. **faq** - Frequently asked questions
    - Maps to: `src/components/Faq.tsx`
    - Fields: question, answer, category, order
    - **6 FAQs currently in component**

16. **teamMember** - Team members
    - Maps to: `src/app/page.tsx` (About section - Team list)
    - Fields: name, role, bio, image, email, phone, order

17. **value** - Brand values
    - Maps to: `src/components/AnimatedValueCard.tsx`
    - Fields: title, icon, description, order
    - **6 values**: Precision & Craftsmanship, Creativity with Purpose, Inclusivity & Accessibility, Trust & Reliability, Empowerment through Customization, Community-Centred

## 🔄 Data Flow

### Current Structure → Sanity Schema Mapping

**Hero Component:**
- Headline → `heroSection.headline`
- Description → `heroSection.description`
- CTAs → `heroSection.primaryCTA` / `heroSection.secondaryCTA`
- Trust line → `heroSection.trustLine`

**Services Carousel:**
- Services array → `service` documents (8 items)
- Each service has: icon, title

**Benefits Sections:**
- benefitOne → `benefitSection` document (imagePosition: "left")
- benefitTwo → `benefitSection` document (imagePosition: "right")
- Bullets → `benefitSection.bullets[]`

**Target Markets:**
- 6 market cards → `targetMarket` documents (6 items)

**Brand Values:**
- 6 value cards → `value` documents (6 items)

**About Section:**
- Journey items → `companyHistory.journeyItems[]`
- Identity text → `companyHistory.identity`
- Team roles → `companyHistory.teamRoles[]`

**Future Vision:**
- Innovation items → `futureVision` (category: "innovation")
- Sustainability items → `futureVision` (category: "sustainability")

**FAQ:**
- 6 FAQs → `faq` documents (6 items)

**Testimonials:**
- Testimonial cards → `testimonial` documents

## 📊 Summary

- **Total Schemas**: 18
- **Site Configuration**: 6 schemas
- **Page Sections**: 5 schemas
- **Content Types**: 7 schemas
- **API Functions**: 21 functions available
- **GROQ Queries**: 24 queries available

## ✅ Pre-filled Data

Many schemas have initial values matching your current site content:
- Contact information (address, phones, email)
- Social media URLs
- Hero section content
- Company name and founding year

## 🚀 Next Steps

1. Install packages: `npm install`
2. Set up Sanity project and add Project ID to `.env.local`
3. Access Sanity Studio at `/studio`
4. Add content matching your current site structure
5. Update components to fetch from Sanity instead of hardcoded data
