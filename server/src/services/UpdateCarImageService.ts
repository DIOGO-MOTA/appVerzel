import { getRepository } from "typeorm";
import path from 'path';

import uploadConfig from '../config/upload';
import Car from "../models/Car";
import fs from 'fs';
import { classToClass } from 'class-transformer'

interface Request {
 car_id: string;
 imageCar?: string;
}

class UpdateCarImageService {
  public async execute({ car_id, imageCar }: Request): Promise<Car> {
    const carsRepository = getRepository(Car);

    const car = await carsRepository.findOne(car_id);

    if (!car) {
      throw new Error('Car not exists');
    }

    if (car.imageCar){
      const imageCarFilePath = path.join(uploadConfig.directory, car.imageCar)
      const imageCarFilePathExists = await fs.promises.stat(imageCarFilePath);

      if (imageCarFilePathExists) {
        await fs.promises.unlink(imageCarFilePath);
      }
    }

    car.imageCar = imageCar;

    await carsRepository.save(car)

    return classToClass(car);

  }
}

export default UpdateCarImageService;