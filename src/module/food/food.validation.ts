import { z } from 'zod'

const createFoodValidationSchema = z.object({
  title: z
    .string({
      required_error: 'Please provide a title for the food',
    })
    .min(5)
    .max(100),
  img: z.string({
    required_error: 'Please provide image for the food',
  }),
  category: z.string({
    required_error: 'Please provide category for the food',
  }),
  price: z.number({
    required_error: 'Please provide price for the food',
  }),
  rating: z.number({
    required_error: 'Please provide rating for the food',
  }),
})

const createFoodCategoryValidationSchema = z.object({
  category: z.string({
    required_error: 'Please provide category for the food',
  }),
})

export const FoodValidation = {
  createFoodValidationSchema,
  createFoodCategoryValidationSchema,
}
