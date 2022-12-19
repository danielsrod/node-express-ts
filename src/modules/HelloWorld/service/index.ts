// Here, we make calls to database
import { DefaultAppSuccess, DefaultAppError } from '../../../utils/App/index';

export default {
    async helloWorld() {
        try {
            // this "data" should come from database
            const data = [
                {
                    id: 1,
                    message: 'Hello World!',
                },
            ];
            return new DefaultAppSuccess('Working fine', data);
        } catch ({ message }) {
            return new DefaultAppError(String(message), []);
        }
    },
};
