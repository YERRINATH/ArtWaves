// Import necessary modules
import express from 'express';
import { MongoClient } from 'mongodb';
import User from './model';

const app = express();
app.use(express.json());

let db;


app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDocument = { name, email, password };

    // Insert the user document into MongoDB
    await User.collection.insertOne({userDocument},{ bufferCommands: false });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred while registering the user' });
  }
});

// Function to connect to MongoDB
async function connectToDb() {
  const client = new MongoClient('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    db = client.db('Artswave');
    console.log('Successfully connected to MongoDB and Artswave db');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}


// Function to check if collection exists
async function checkCollection(collectionName) {
  try {
    const collection = db.collection(collectionName);
    const count = await collection.countDocuments();

    if (count > 0) {
      console.log(`Collection "${collectionName}" found`);
    } else {
      console.log(`Collection "${collectionName}" does not exist. You can create it manually or use \`db.createCollection("${collectionName}")\`.`);
    }
  } catch (error) {
    console.error(`Error checking collection "${collectionName}":`, error);
  }
}

// Function to save drawing data to MongoDB
async function saveDrawingToMongo(drawingData) {
  try {
    const collection = db.collection('drawings');
    await collection.insertOne({ drawingData });
    console.log('Drawing saved to MongoDB');
  } catch (error) {
    console.error('Error saving drawing:', error);
  }
}

// Function to start the server
async function startServer() {
  await connectToDb();

  const collectionsToCheck = ['drawings']; // Add more collection names as needed

  for (const collectionName of collectionsToCheck) {
    await checkCollection(collectionName);
  }

  app.listen(8000, () => {
    console.log(`Server listening on port 8000`);
  });
}

// Route to handle fetching drawings
app.get('/drawings', async (req, res) => {
  try {
    const drawings = await db.collection("drawings").find().toArray();
    res.json(drawings);
  } catch (error) {
    console.error("Error fetching drawings:", error);
    res.status(500).send("Error fetching drawings");
  }
});

// Route to handle saving drawing data
app.post('/save-drawing', async (req, res) => {
  const { drawingData } = req.body;

  try {
    if (!drawingData) {
      return res.status(400).json({ error: 'No drawing data provided' });
    }

    await saveDrawingToMongo(drawingData);
    res.status(200).json({ message: 'Drawing saved successfully' });
  } catch (error) {
    console.error('Error saving drawing:', error);
    res.status(500).json({ error: 'An error occurred while saving the drawing' });
  }
});

// Start the server
startServer();
