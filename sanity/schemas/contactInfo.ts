import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    defineField({
      name: 'address',
      title: 'Physical Address',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Street Address',
          type: 'string',
        },
        {
          name: 'unit',
          title: 'Unit/Floor',
          type: 'string',
        },
        {
          name: 'suburb',
          title: 'Suburb',
          type: 'string',
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'postalCode',
          title: 'Postal Code',
          type: 'string',
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string',
          initialValue: 'South Africa',
        },
      ],
    }),
    defineField({
      name: 'phone',
      title: 'Phone Numbers',
      type: 'object',
      fields: [
        {
          name: 'primary',
          title: 'Primary Phone',
          type: 'string',
          description: 'Main contact number',
        },
        {
          name: 'secondary',
          title: 'Secondary Phone',
          type: 'string',
        },
        {
          name: 'voip',
          title: 'VOIP Numbers',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'VOIP contact numbers',
        },
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'contactPersons',
      title: 'Contact Persons',
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
            {
              name: 'phone',
              title: 'Phone',
              type: 'string',
            },
            {
              name: 'email',
              title: 'Email',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'mapUrl',
      title: 'Map URL',
      type: 'url',
      description: 'Link to Google Maps or location map',
    }),
  ],
  preview: {
    select: {
      email: 'email',
      phone: 'phone.primary',
    },
    prepare({ email, phone }) {
      return {
        title: 'Contact Information',
        subtitle: `${email || ''} ${phone || ''}`,
      }
    },
  },
})
