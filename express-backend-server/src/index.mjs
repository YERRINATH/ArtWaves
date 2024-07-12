import express from 'express';
import { startServer } from './server.mjs';
import { connectToDb } from './db.mjs';
import { setRoutes } from './routes.mjs';

const app = express();
app.use(express.json());

async function initialize() {
  await connectToDb();
  setRoutes(app);
  startServer(app);
}

initialize();
