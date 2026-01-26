import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'companyHistory',
  title: 'Company History',
  type: 'document',
  fields: [
    defineField({
      name: 'foundingStory',
      title: 'Founding Story',
      type: 'text',
      description: 'The story of how the company was founded',
      initialValue: 'Founded in 2000 by brothers Mario and Bradley Kanasashi, Kan Screenprinters have grown from a family garage in Manenberg into a trusted printing hub in Lansdowne.',
    }),
    defineField({
      name: 'journeyItems',
      title: 'Journey Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g., "Origins", "Growth", "Innovation"',
            },
            {
              name: 'text',
              title: 'Text',
              type: 'text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'identity',
      title: 'Company Identity',
      type: 'text',
      description: 'Description of company identity and values',
    }),
    defineField({
      name: 'teamRoles',
      title: 'Team Roles',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of team roles (e.g., "Mario Kanasashi – Founder & Managing Director")',
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
