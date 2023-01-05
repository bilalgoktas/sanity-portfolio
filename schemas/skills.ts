import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'techName',
      title: 'Technology Name',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
  ],
})
