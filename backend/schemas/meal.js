import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'meal',
  title: 'Meals',
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
      validation: (Rule) => Rule.required().min(10).max(220),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the Meal',
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price for the Meal ',
    }),
    defineField({
      title: 'Is it a hot pick?',
      name: 'hotPick',
      type: 'boolean',
    }),
    defineField({
      title: 'Rating',
      name: 'rating',
      type: 'number',
    }),
    defineField({
      title: 'Category',
      name: 'mealCategory',
      type: 'reference',
      to: [{type: 'category'}],
    }),
  ],
})
