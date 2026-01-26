import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'videoContent',
  title: 'Video Content',
  type: 'document',
  fields: [
    defineField({
      name: 'videoId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'The YouTube video ID (e.g., "fZ0D0cnR88E")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Custom Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional custom thumbnail (defaults to YouTube thumbnail)',
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      description: 'Which section this video belongs to',
      options: {
        list: [
          { title: 'About', value: 'about' },
          { title: 'Services', value: 'services' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      videoId: 'videoId',
      section: 'section',
    },
    prepare({ title, videoId, section }) {
      return {
        title: title || `Video: ${videoId}`,
        subtitle: section || 'Video Content',
      }
    },
  },
})
