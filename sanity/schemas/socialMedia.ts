import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'socialMedia',
  title: 'Social Media Links',
  type: 'document',
  fields: [
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
      initialValue: 'https://www.facebook.com/pages/Kan-Screenprinters/512399395488737',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter/X URL',
      type: 'url',
      initialValue: 'https://twitter.com/@kanscreen',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
      initialValue: 'http://za.linkedin.com/pub/kan-printers/4a/b50/a0b',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube URL',
      type: 'url',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'WhatsApp business number (include country code)',
    }),
  ],
  preview: {
    select: {
      facebook: 'facebook',
      twitter: 'twitter',
      linkedin: 'linkedin',
    },
    prepare({ facebook, twitter, linkedin }) {
      const links = [facebook, twitter, linkedin].filter(Boolean)
      return {
        title: 'Social Media Links',
        subtitle: links.length > 0 ? links.join(', ') : 'No links configured',
      }
    },
  },
})
