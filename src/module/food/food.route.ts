import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { FoodValidation } from './food.validation'
import { FoodControllers } from './food.controller'

const foodRouter = express.Router()

foodRouter.get('/', FoodControllers.getFoods)

foodRouter.post(
  '/add-food',
  validateRequest(FoodValidation.createFoodValidationSchema),
  FoodControllers.addFood
)

foodRouter.post(
  '/add-food-category',
  validateRequest(FoodValidation.createFoodCategoryValidationSchema),
  FoodControllers.addFoodCategory
)

export default foodRouter
