import {Router } from 'express';

import AuthenticateUserAdminService from '../services/AuthenticateUserAdminService';


const sessionsAdminRouter = Router();

sessionsAdminRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserAdminService();

    const { userAdmin, tokenAdmin } = await authenticateUser.execute({
      email,
      password,
    })

    delete userAdmin.password;

    return response.json({ userAdmin, tokenAdmin });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});


export default sessionsAdminRouter;