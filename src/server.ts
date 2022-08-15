import express from 'express';
import mongoose from 'mongoose';

import connectToMongoDB from './connection';
import tabelaFreteRouter from './domains/shipping-table/routes';

console.log('');
console.log('');
console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
console.log('');
console.log('');

mongoose.Promise = global.Promise;

const iniciarServidor = () => {
  const app = express();
  const PORT = 3080;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.listen(PORT, () => console.log(`Server listening in http://localhost:${PORT}`));

  app.use(tabelaFreteRouter);

  app.get('/', (_req: express.Request, res: express.Response) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
  });
};

connectToMongoDB(iniciarServidor);
