import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(80),
    }),
    defineField({
      name: 'description',
      title: 'Dish Description',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(80),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the Dish',
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price for the dish ',
    }),
    defineField({
      title: 'Is it a hot pick?',
      name: 'hotPick',
      type: 'boolean',
    }),
    defineField({
      title: 'Category',
      name: 'mealCategory',
      type: 'reference',
      to: [{type: 'category'}],
    }),
  ],
})
