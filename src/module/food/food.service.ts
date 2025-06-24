import { IFood } from './food.interface'
import Food, { FoodCategory } from './food.model'

const getFoods = async (category?: string) => {
  const filter: { category?: string } = {}
  if (category) {
    filter.category = category
  }
  const result = await Food.find(filter)
  return result
}

const getFoodCategories = async () => {
  const result = await FoodCategory.find()
  return result
}

const addFood = async (payload: IFood) => {
  // check the category exist or not

  const existCategory = await FoodCategory.findOne({
    category: payload.category,
  })

  if (!existCategory) {
    throw new Error('This category has not been listed yet')
  }

  const result = await Food.create({ ...payload })
  return result
}

const addFoodCategory = async (payload: { category: string }) => {
  // Check for duplicate
  const existing = await FoodCategory.findOne({
    category: { $regex: new RegExp(`^${payload.category}$`, 'i') },
  })

  if (existing) {
    throw new Error('This category already exists')
  }
  const result = await FoodCategory.create(payload)
  return result
}

export const FoodServices = {
  getFoods,
  getFoodCategories,
  addFood,
  addFoodCategory,
}
