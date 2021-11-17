import Car from '../models/Car';
import { EntityRepository, Repository } from 'typeorm';


@EntityRepository(Car)
class CarsRepository extends Repository<Car>{}

export default CarsRepository;