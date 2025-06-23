import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { FoodValidation } from './food.validation'
import { FoodControllers } from './food.controller'

const foodRouter = express.Router()

foodRouter.post(
  '/add-food',
  validateRequest(FoodValidation.createFoodValidationSchema),
  FoodControllers.addFood
)

export default foodRouter
