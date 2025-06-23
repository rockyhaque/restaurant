import { IFood } from './food.interface'
import Food from './food.model'

const addFood = async (payload: IFood) => {
  const result = await Food.create({ ...payload })
  return result
}

export const FoodServices = {
  addFood,
}
