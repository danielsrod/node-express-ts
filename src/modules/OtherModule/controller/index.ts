// Here will handle the Request and Response
import { Request, Response } from 'express';
import otherModuleService from '../service/index';
import { DefaultAppError } from '../../../utils/App/index';

export default {
    async otherModule(request: Request, response: Response) {
        try {
            const result = await otherModuleService.otherModule();
            if (!result.status) throw new Error('The result is scuffed');
            return response.status(200).json(result);
        } catch ({ message }) {
            return response.status(500).json(new DefaultAppError(String(message), []));
        }
    },
};
