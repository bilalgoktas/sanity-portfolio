import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'usedTech',
      title: 'Used Technologies',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'liveDemo',
      title: 'Live Demo Link',
      type: 'string',
    }),
    defineField({
      name: 'sourceCode',
      title: 'Source Code Link',
      type: 'string',
    }),
  ],
})
