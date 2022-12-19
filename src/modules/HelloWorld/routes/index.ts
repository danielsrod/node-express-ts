// Route file for the module

import helloWorldController from '../controller/index';

import { Router } from 'express';
export const helloWorldRoutes: Router = Router();

helloWorldRoutes.get('/api/helloWorld', helloWorldController.helloWorld);
