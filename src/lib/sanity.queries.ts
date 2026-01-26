import { groq } from 'next-sanity'

// Service queries
export const servicesQuery = groq`*[_type == "service"] | order(order asc) {
  _id,
  title,
  icon,
  description,
  image,
  order
}`

export const serviceByTitleQuery = groq`*[_type == "service" && title == $title][0]`

// Portfolio queries
export const portfolioQuery = groq`*[_type == "portfolio"] | order(order asc) {
  _id,
  title,
  slug,
  description,
  images,
  category,
  client,
  featured,
  order
}`

export const featuredPortfolioQuery = groq`*[_type == "portfolio" && featured == true] | order(order asc) {
  _id,
  title,
  slug,
  description,
  images,
  category,
  client,
  featured,
  order
}`

export const portfolioBySlugQuery = groq`*[_type == "portfolio" && slug.current == $slug][0]`

// Testimonial queries
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc) {
  _id,
  quote,
  author,
  role,
  company,
  image,
  featured,
  order
}`

export const featuredTestimonialsQuery = groq`*[_type == "testimonial" && featured == true] | order(order asc) {
  _id,
  quote,
  author,
  role,
  company,
  image,
  featured,
  order
}`

// FAQ queries
export const faqsQuery = groq`*[_type == "faq"] | order(order asc) {
  _id,
  question,
  answer,
  category,
  order
}`

export const faqsByCategoryQuery = groq`*[_type == "faq" && category == $category] | order(order asc)`

// Team member queries
export const teamMembersQuery = groq`*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  bio,
  image,
  email,
  phone,
  order
}`

// Brand values queries
export const valuesQuery = groq`*[_type == "value"] | order(order asc) {
  _id,
  title,
  icon,
  description,
  order
}`

// Site settings queries
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  _id,
  title,
  description,
  companyName,
  tagline,
  foundedYear,
  logo,
  favicon
}`

// Contact info queries
export const contactInfoQuery = groq`*[_type == "contactInfo"][0] {
  _id,
  address,
  phone,
  email,
  contactPersons,
  mapUrl
}`

// Social media queries
export const socialMediaQuery = groq`*[_type == "socialMedia"][0] {
  _id,
  facebook,
  twitter,
  linkedin,
  instagram,
  youtube,
  whatsapp
}`

// Hero section queries
export const heroSectionQuery = groq`*[_type == "heroSection"][0] {
  _id,
  headline,
  description,
  primaryCTA,
  secondaryCTA,
  heroImage,
  trustLine
}`

// Company history queries
export const companyHistoryQuery = groq`*[_type == "companyHistory"][0] {
  _id,
  foundingStory,
  founders,
  milestones,
  locations,
  currentLocation
}`

// CTA section queries
export const ctaSectionQuery = groq`*[_type == "ctaSection"][0] {
  _id,
  headline,
  description,
  primaryCTA,
  secondaryCTA
}`
