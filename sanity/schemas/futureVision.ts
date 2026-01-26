import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'futureVision',
  title: 'Future Vision',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Innovation & Technology', value: 'innovation' },
          { title: 'People & Sustainability', value: 'sustainability' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Vision Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Item Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'order',
              title: 'Order',
              type: 'number',
              initialValue: 0,
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      items: 'items',
    },
    prepare({ title, category, items }) {
      return {
        title: title || category,
        subtitle: `${items?.length || 0} items`,
      }
    },
  },
})
