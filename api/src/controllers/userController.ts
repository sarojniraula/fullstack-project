import { Request, Response, NextFunction } from 'express'

import UserService from '../services/userService'
import Users from '../models/Users'
import { BadRequestError } from '../helpers/apiError'

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, address } = req.body
    const user = new Users({
      firstName,
      lastName,
      email,
      address,
    })

    await UserService.create(user)
    res.json(user)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
