import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
import routes from './routes';
import uploadConfig from './config/upload';

import createConnection from './database';

createConnection()
const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory))
app.use(routes)

app.listen(3333, () => {
  console.log('Server started on port 3333!')
})


