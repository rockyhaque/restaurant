import { StatusCodes } from 'http-status-codes'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { FoodServices } from './food.service'

const getFoods = catchAsync(async (req, res) => {
  const category =
    typeof req.query.category === 'string' ? req.query.category : undefined
  const result = await FoodServices.getFoods(category)

  if (!result || result.length === 0) {
    return sendResponse(res, {
      success: false,
      statusCode: StatusCodes.NOT_FOUND,
      message: 'No food found for the given category',
      data: [],
    })
  }

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Foods retrieved successfully',
    data: result,
  })
})

const getFoodCategories = catchAsync(async (req, res) => {
  const result = await FoodServices.getFoodCategories()

  if (!result || result.length === 0) {
    return sendResponse(res, {
      success: false,
      statusCode: StatusCodes.NOT_FOUND,
      message: 'No food category found',
      data: [],
    })
  }

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Food categories retrieved successfully',
    data: result,
  })
})

const addFood = catchAsync(async (req, res) => {
  const result = await FoodServices.addFood(req.body)

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'Food added successfully',
    data: result,
  })
})

const addFoodCategory = catchAsync(async (req, res) => {
  const result = await FoodServices.addFoodCategory(req.body)

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'Food category added successfully',
    data: result,
  })
})

export const FoodControllers = {
  getFoods,
  getFoodCategories,
  addFood,
  addFoodCategory,
}
