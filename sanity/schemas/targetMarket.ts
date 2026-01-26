import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'targetMarket',
  title: 'Target Market',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Market Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Corporate Clients", "Small Businesses"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      order: 'order',
    },
    prepare({ title, description, order }) {
      return {
        title: title || 'Target Market',
        subtitle: description?.substring(0, 60) + '...',
      }
    },
  },
})
