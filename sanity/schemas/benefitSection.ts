import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'benefitSection',
  title: 'Benefit Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'left',
    }),
    defineField({
      name: 'bullets',
      title: 'Bullet Points',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon Emoji',
              type: 'string',
              description: 'Emoji icon (e.g., 🎨, 🖌️)',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
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
      image: 'image',
      order: 'order',
    },
    prepare({ title, image, order }) {
      return {
        title: title || 'Benefit Section',
        subtitle: `Order: ${order || 0}`,
        media: image,
      }
    },
  },
})
