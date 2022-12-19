// Route file for the module

import otherModuleController from '../controller/index';

import { Router } from 'express';
export const otherModuleRoutes: Router = Router();

otherModuleRoutes.get('/api/otherModule', otherModuleController.otherModule);
