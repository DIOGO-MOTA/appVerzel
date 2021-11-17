import { getCustomRepository } from 'typeorm';
import Car from '../models/Car';
import CarsRepository from '../repositories/CarsRepository';

interface Request {
  brand: string;
  model: string;
  name: string;
  price: number;
  year: number;
  mileage: string;
  traction: string;
  fuel: string;
  streaming: string;
  port: string;
  direction: string;
}


class CreateCarService {
  public async execute({  
    brand,
    model,
    name,
    price,
    year,
    mileage,
    traction,
    fuel,
    streaming,
    port,
    direction,}:Request ): Promise<Car> {
    const carsRepository = getCustomRepository(CarsRepository);
    
    const car = carsRepository.create(
      {
        brand,
        model,
        name,
        price,
        year,
        mileage,
        traction,
        fuel,
        streaming,
        port,
        direction,
      }
    )

    await carsRepository.save(car)

    return car
  }

}

export default CreateCarService;