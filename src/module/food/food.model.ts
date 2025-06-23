import { model, Schema } from 'mongoose'
import { IFood } from './food.interface'

const foodSchema = new Schema<IFood>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title for the food'],
    },
    img: {
      type: String,
      required: [true, 'Please provide an image for the food'],
    },
    category: {
      type: String,
      required: [true, 'Please provide a category for the food'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price for the food'],
    },
    rating: {
      type: Number,
      required: [true, 'Please provide a rating for the food'],
    },
  },
  {
    timestamps: true,
  }
)

const Food = model<IFood>('Food', foodSchema)

// * Category Schema

interface IFoodCategory {
  category: string
}

const foodCategorySchema = new Schema<IFoodCategory>({
  category: {
    type: String,
    required: [true, 'Please provide a category for the food'],
  },
})

export const FoodCategory = model<IFoodCategory>(
  'FoodCategory',
  foodCategorySchema
)

export default Food
