import { getRepository } from "typeorm";
import Car from "../models/Car";

interface Request {
 id: string
}

class DeleteCarService {
  public async execute({ id }: Request): Promise<void> {
    const carsRepository = getRepository(Car);

    const chekCarExists = await carsRepository.findOne({
      where: { id },
    });

    if (!chekCarExists) {
      throw new Error('Car not exists');
    }

    await carsRepository.delete({
      id
    });

    return;
  }
}

export default DeleteCarService;