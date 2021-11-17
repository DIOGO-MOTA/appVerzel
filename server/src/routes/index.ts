import { Router } from "express";
import carsRouter from './cars.routes';
import sessionsRouter from "./sessions.routes";
import usersRouter from "./users.routes";
import carsAdminRouter from './carsAdmin.routes';
import sessionsAdminRouter from "./sessionsAdmin.routes ";


const routes = Router();

routes.use('/cars', carsRouter)
routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/sessionsAdmin', sessionsAdminRouter)
routes.use('/carsAdmin', carsAdminRouter)


export default routes;