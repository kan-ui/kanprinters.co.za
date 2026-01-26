import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Main headline text',
      validation: (Rule) => Rule.required(),
      initialValue: 'Transform Ideas Into Lasting Impressions',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Hero section description text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'primaryCTA',
      title: 'Primary Call-to-Action',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Get Free Quotation',
        },
        {
          name: 'link',
          title: 'Link',
          type: 'string',
          description: 'Email, phone, or URL',
          initialValue: 'mailto:kanprinters@mweb.co.za',
        },
      ],
    }),
    defineField({
      name: 'secondaryCTA',
      title: 'Secondary Call-to-Action',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Call Us: 021 691 0170',
        },
        {
          name: 'link',
          title: 'Link',
          type: 'string',
          description: 'Phone number or URL',
          initialValue: 'tel:+27216910170',
        },
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Main hero section image',
    }),
    defineField({
      name: 'trustLine',
      title: 'Trust Line',
      type: 'string',
      description: 'Text below hero (e.g., "From Manenberg to Lansdowne")',
    }),
  ],
  preview: {
    select: {
      headline: 'headline',
      description: 'description',
    },
    prepare({ headline, description }) {
      return {
        title: headline || 'Hero Section',
        subtitle: description?.substring(0, 60) + '...',
      }
    },
  },
})
