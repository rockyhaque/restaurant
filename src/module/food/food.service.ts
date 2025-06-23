import { IFood } from './food.interface'
import Food from './food.model'

const getFoods = async (category?: string) => {
  const filter: { category?: string } = {}
  if (category) {
    filter.category = category
  }
  const result = await Food.find(filter)
  return result
}

const addFood = async (payload: IFood) => {
  const result = await Food.create({ ...payload })
  return result
}

export const FoodServices = {
  addFood,
  getFoods,
}
