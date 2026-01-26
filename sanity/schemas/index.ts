import service from './service'
import portfolio from './portfolio'
import testimonial from './testimonial'
import faq from './faq'
import teamMember from './teamMember'
import value from './value'
import siteSettings from './siteSettings'
import contactInfo from './contactInfo'
import socialMedia from './socialMedia'
import heroSection from './heroSection'
import companyHistory from './companyHistory'
import ctaSection from './ctaSection'
import benefitSection from './benefitSection'
import targetMarket from './targetMarket'
import sectionContent from './sectionContent'
import videoContent from './videoContent'
import futureVision from './futureVision'

export const schemaTypes = [
  // Site-wide settings
  siteSettings,
  contactInfo,
  socialMedia,
  heroSection,
  companyHistory,
  ctaSection,
  // Page sections
  benefitSection,
  targetMarket,
  sectionContent,
  videoContent,
  futureVision,
  // Content types
  service,
  portfolio,
  testimonial,
  faq,
  teamMember,
  value,
]
