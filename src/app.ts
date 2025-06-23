import express, { Request, Response } from 'express'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import foodRouter from './module/food/food.route'

const app = express()

// middleware
app.use(express.json())

app.use('/api/foods', foodRouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    success: true,
    message: 'Restaurant Server is running.',
  })
})

// Global Error Handler
app.use(globalErrorHandler)

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
})

export default app
