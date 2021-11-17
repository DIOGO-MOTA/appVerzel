import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { classToClass } from 'class-transformer'

import CarsRepository from '../repositories/CarsRepository';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';


const carsRouter = Router();
carsRouter.use(ensureAuthenticated);


carsRouter.get('/', async (request, response) => {
  const carsRepository = getCustomRepository(CarsRepository)
  const cars = await carsRepository.find();

  return response.json(classToClass(cars));
});


export default carsRouter;