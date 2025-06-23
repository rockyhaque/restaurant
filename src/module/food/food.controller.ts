import { StatusCodes } from 'http-status-codes'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { FoodServices } from './food.service'

const addFood = catchAsync(async (req, res) => {
  const result = await FoodServices.addFood(req.body)

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'Food added successfully',
    data: result,
  })
})

export const FoodControllers = {
  addFood,
}
