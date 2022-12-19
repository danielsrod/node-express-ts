// Main route file. Will import the route file from each module

import { helloWorldRoutes } from '../modules/HelloWorld/routes/index';

import { Router } from 'express';
export const routes: Router = Router();

routes.use(helloWorldRoutes);
