import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6ch09wec'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

if (!projectId) {
  console.warn('⚠️ NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Using fallback project ID.')
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  // Disable CDN in development to see updates immediately
  // Enable CDN in production for better performance
  useCdn: process.env.NODE_ENV === 'production',
  // Add revalidation for Next.js
  perspective: 'published',
})
