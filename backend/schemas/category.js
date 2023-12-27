import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Category Description',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(80)
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the category',
    }),
  ],
})
