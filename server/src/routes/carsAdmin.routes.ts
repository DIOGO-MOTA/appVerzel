import { Router } from 'express';


import multer from 'multer';
import uploadConfig from '../config/upload';


import CreateCarService from '../services/CreateCarService';
import UpdateCarImageService from '../services/UpdateCarImageService';
import DeleteCarService from '../services/DeleteCarService';


import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';



const carsRouter = Router();
const upload = multer(uploadConfig);

carsRouter.use(ensureAuthenticated);


carsRouter.post('/', ensureAdmin, async (request, response) => {
  try {
    const {
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
    } = request.body;


    const createCar = new CreateCarService();

    const car = await createCar.execute({
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
    })

    return response.json(car);

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }

});


carsRouter.patch('/imageCar/:id', ensureAdmin, upload.single('imageCar'), async (request, response) => {
  try {
    const { id } = request.params
    const updateCarImageService = new UpdateCarImageService();

    const car = await updateCarImageService.execute({
     car_id: id,
     imageCar: request.file?.filename,
    });


    return response.json(car)
      
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
})



carsRouter.delete('/:id', ensureAdmin, async (request, response) => {
  try {
    const { id } = request.params

    const deleteCar = new DeleteCarService();

    await deleteCar.execute({ id });

    return response.send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }

});


export default carsRouter;