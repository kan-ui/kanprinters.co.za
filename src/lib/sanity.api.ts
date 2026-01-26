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
} from './sanity.queries'

// Service functions
export async function getServices() {
  return await client.fetch(servicesQuery)
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
  return await client.fetch(heroSectionQuery)
}

// Company history functions
export async function getCompanyHistory() {
  return await client.fetch(companyHistoryQuery)
}

// CTA section functions
export async function getCTASection() {
  return await client.fetch(ctaSectionQuery)
}
