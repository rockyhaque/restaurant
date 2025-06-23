import { model, Schema } from 'mongoose'
import { IFood } from './food.interface'

const foodSchema = new Schema<IFood>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title for the food'],
    },
    category: {
      type: String,
      required: [true, 'Please provide content for the food'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide an price for the food'],
    },
    rating: {
      type: Number,
      required: [true, 'Please provide an rating for the food'],
    },
  },
  {
    timestamps: true,
  }
)

const Food = model<IFood>('Food', foodSchema)

export default Food
