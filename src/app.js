import express from 'express';
import morgan from 'morgan';
import routes from './routes';

const app = express();

// Settings
app.set('port', process.env.PORT);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use(routes);

export default app;