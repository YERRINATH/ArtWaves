import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser'; // Import body-parser
import { setRoutes } from './routes.mjs';

export function startServer(app) {
  // Initialize Express app
  const expressApp = express();

  // Configure session middleware
  expressApp.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    // You can configure other options as per your requirements
  }));

  // Add body-parser middleware to parse request bodies
  expressApp.use(bodyParser.json());

  // Set up routes
  setRoutes(expressApp);

  // Start the server
  expressApp.listen(8000, () => {
    console.log('Server listening on port 8000');
  });
}
