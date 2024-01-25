import express from 'express';
import cors from 'cors';

import helmet from 'helmet';

import morgan from 'morgan';

import clientRoutes from './routes/clientRoutes.js';
import generalRoutes from './routes/generalRoutes.js'
import managementRoutes from './routes/managementRoutes.js';
import salesRoutes from './routes/salesRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
const PORT = 4003

// Routes

app.use('/api/v1/client', clientRoutes);
app.use('/api/v1/general', generalRoutes);
app.use('/api/v1/management', managementRoutes);
app.use('/api/v1/sales', salesRoutes);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
