import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas/index'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6ch09wec'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'kan-printers',
  title: 'Kan Printers CMS',
  
  projectId,
  dataset,
  
  basePath: '/studio',
  
  plugins: [
    structureTool(),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
})
