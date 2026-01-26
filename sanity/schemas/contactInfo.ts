import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Physical Address',
      type: 'object',
      fields: [
        {
          name: 'unit',
          title: 'Unit/Floor',
          type: 'string',
          initialValue: 'Unit 14 Regency Park',
        },
        {
          name: 'street',
          title: 'Street Address',
          type: 'string',
          initialValue: '6 Induland Crescent',
        },
        {
          name: 'suburb',
          title: 'Suburb',
          type: 'string',
          initialValue: 'Lansdowne',
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
          initialValue: 'Cape Town',
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
          initialValue: '021 691 0170',
        },
        {
          name: 'secondary',
          title: 'Secondary Phone',
          type: 'string',
          initialValue: '021 691 0168',
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
      initialValue: 'kanprinters@mweb.co.za',
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
