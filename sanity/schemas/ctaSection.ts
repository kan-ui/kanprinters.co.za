import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ctaSection',
  title: 'Call-to-Action Section',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'CTA section headline',
      validation: (Rule) => Rule.required(),
      initialValue: 'Transform Your Ideas Into Lasting Impressions',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'CTA section description',
    }),
    defineField({
      name: 'primaryCTA',
      title: 'Primary Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Get Free Quote',
        },
        {
          name: 'link',
          title: 'Link',
          type: 'string',
          initialValue: 'mailto:kanprinters@mweb.co.za',
        },
      ],
    }),
    defineField({
      name: 'secondaryCTA',
      title: 'Secondary Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Call: 021 691 0170',
        },
        {
          name: 'link',
          title: 'Link',
          type: 'string',
          initialValue: 'tel:+27216910170',
        },
      ],
    }),
  ],
  preview: {
    select: {
      headline: 'headline',
      primaryText: 'primaryCTA.text',
    },
    prepare({ headline, primaryText }) {
      return {
        title: headline || 'CTA Section',
        subtitle: primaryText || 'No CTA configured',
      }
    },
  },
})
