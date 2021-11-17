import { Request, Response, NextFunction } from 'express';
import { getRepository } from "typeorm";
import UserAdmin from '../models/UserAdmin';


export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {

  try {
    const { id } = request.user

    const usersRepository = getRepository(UserAdmin);

    const user = await usersRepository.findOne({
      where: { id },
    });

    if (!user?.email) {
      throw new Error(' User is not admin');
    }

    return next()

  } catch {
    throw new Error('Invalid JWT token');
  }


}
