import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company/Institution Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'experienceType',
      title: 'Experience Type',
      type: 'string',
      options: {list: ['Job Experience', 'Education']},
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'relatedIcon',
      title: 'Related Icon',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
