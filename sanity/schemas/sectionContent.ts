import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sectionContent',
  title: 'Section Content',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionId',
      title: 'Section ID',
      type: 'string',
      description: 'Unique identifier for the section (e.g., "services", "about", "portfolio")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'preTitle',
      title: 'Pre-Title',
      type: 'string',
      description: 'Small text above the main title',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Main description text for the section',
    }),
    defineField({
      name: 'content',
      title: 'Additional Content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Content Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Text Block', value: 'text' },
                  { title: 'List Item', value: 'list' },
                  { title: 'Card', value: 'card' },
                ],
              },
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
            },
            {
              name: 'items',
              title: 'List Items',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      sectionId: 'sectionId',
      title: 'title',
      preTitle: 'preTitle',
    },
    prepare({ sectionId, title, preTitle }) {
      return {
        title: title || sectionId,
        subtitle: preTitle || sectionId,
      }
    },
  },
})
