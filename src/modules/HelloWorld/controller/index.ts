// Here will handle the Request and Response
import { Request, Response } from 'express';
import helloWorldService from '../service/index';
import { DefaultAppError } from '../../../utils/App/index';

export default {
    async helloWorld(request: Request, response: Response) {
        try {
            const result = await helloWorldService.helloWorld();
            if (!result.status) throw new Error('The result is scuffed');
            return response.status(200).json(result);
        } catch ({ message }) {
            return response.status(500).json(new DefaultAppError(String(message), []));
        }
    },
};
