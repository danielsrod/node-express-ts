import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';

import { routes } from './routes/index';

config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());
app.use(express.json({ limit: '2MB' }));
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
    console.info(`Running on port ${PORT}`);
});
