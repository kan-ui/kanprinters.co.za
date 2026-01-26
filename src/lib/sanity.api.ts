import { client } from './sanity.client'
import {
  servicesQuery,
  portfolioQuery,
  featuredPortfolioQuery,
  testimonialsQuery,
  featuredTestimonialsQuery,
  faqsQuery,
  teamMembersQuery,
  valuesQuery,
  siteSettingsQuery,
  contactInfoQuery,
  socialMediaQuery,
  heroSectionQuery,
  companyHistoryQuery,
  ctaSectionQuery,
  benefitSectionsQuery,
  targetMarketsQuery,
  sectionContentQuery,
  allSectionContentQuery,
  videoContentQuery,
  allVideoContentQuery,
  futureVisionQuery,
} from './sanity.queries'

// Service functions
export async function getServices() {
  try {
    return await client.fetch(servicesQuery)
  } catch (error) {
    console.error('Error fetching services:', error)
    return null
  }
}

// Portfolio functions
export async function getPortfolio() {
  return await client.fetch(portfolioQuery)
}

export async function getFeaturedPortfolio() {
  return await client.fetch(featuredPortfolioQuery)
}

// Testimonial functions
export async function getTestimonials() {
  return await client.fetch(testimonialsQuery)
}

export async function getFeaturedTestimonials() {
  return await client.fetch(featuredTestimonialsQuery)
}

// FAQ functions
export async function getFAQs() {
  return await client.fetch(faqsQuery)
}

// Team member functions
export async function getTeamMembers() {
  return await client.fetch(teamMembersQuery)
}

// Brand values functions
export async function getBrandValues() {
  return await client.fetch(valuesQuery)
}

// Site settings functions
export async function getSiteSettings() {
  return await client.fetch(siteSettingsQuery)
}

// Contact info functions
export async function getContactInfo() {
  return await client.fetch(contactInfoQuery)
}

// Social media functions
export async function getSocialMedia() {
  return await client.fetch(socialMediaQuery)
}

// Hero section functions
export async function getHeroSection() {
  try {
    const data = await client.fetch(heroSectionQuery)
    if (data) {
      console.log('✅ Hero section data fetched from Sanity')
    } else {
      console.warn('⚠️ No hero section data found in Sanity')
    }
    return data
  } catch (error) {
    console.error('❌ Error fetching hero section:', error)
    return null
  }
}

// Company history functions
export async function getCompanyHistory() {
  return await client.fetch(companyHistoryQuery)
}

// CTA section functions
export async function getCTASection() {
  return await client.fetch(ctaSectionQuery)
}

// Benefit section functions
export async function getBenefitSections() {
  try {
    const data = await client.fetch(benefitSectionsQuery)
    if (data && data.length > 0) {
      console.log(`✅ Fetched ${data.length} benefit sections from Sanity`)
    }
    return data
  } catch (error) {
    console.error('❌ Error fetching benefit sections:', error)
    return null
  }
}

// Target market functions
export async function getTargetMarkets() {
  return await client.fetch(targetMarketsQuery)
}

// Section content functions
export async function getSectionContent(sectionId: string) {
  return await client.fetch(sectionContentQuery, { sectionId })
}

export async function getAllSectionContent() {
  return await client.fetch(allSectionContentQuery)
}

// Video content functions
export async function getVideoContent(section: string) {
  return await client.fetch(videoContentQuery, { section })
}

export async function getAllVideoContent() {
  return await client.fetch(allVideoContentQuery)
}

// Future vision functions
export async function getFutureVision() {
  return await client.fetch(futureVisionQuery)
}
