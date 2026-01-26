import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'companyHistory',
  title: 'Company History',
  type: 'document',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    defineField({
      name: 'foundingStory',
      title: 'Founding Story',
      type: 'text',
      description: 'The story of how the company was founded',
    }),
    defineField({
      name: 'founders',
      title: 'Founders',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'role',
              title: 'Role',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'milestones',
      title: 'Company Milestones',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'year',
              title: 'Year',
              type: 'number',
            },
            {
              name: 'event',
              title: 'Event',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'locations',
      title: 'Previous Locations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'location',
              title: 'Location',
              type: 'string',
            },
            {
              name: 'years',
              title: 'Years',
              type: 'string',
              description: 'e.g., "2000-2014"',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'currentLocation',
      title: 'Current Location',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: 'Address',
          type: 'string',
        },
        {
          name: 'year',
          title: 'Year Established',
          type: 'number',
        },
      ],
    }),
  ],
  preview: {
    select: {
      story: 'foundingStory',
    },
    prepare({ story }) {
      return {
        title: 'Company History',
        subtitle: story?.substring(0, 60) + '...',
      }
    },
  },
})
