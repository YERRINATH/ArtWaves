import { getDb } from './db.mjs';
import mongoose from 'mongoose';
import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;

// Define ContentSchema outside of the setRoutes function
const ContentSchema = new mongoose.Schema({
  content: String
});

// Define Content model based on the schema
const Content = mongoose.model('Content', ContentSchema);

// Define image schema and model
const imageSchema = new mongoose.Schema({
  uid: String,
  imageData: Buffer,
  contentType: String,
});
const Image = mongoose.model('Image', imageSchema);

// Middleware function to check if user is logged in
export function isLoggedIn(req, res, next) {
  if (req.session.uid) {
    return next();
  } else {
    res.status(401).json({ error: 'Unauthorized: User not logged in' });
  }
}

// Exporting the setRoutes function directly
export function setRoutes(app) {
  app.post('/save-notepad', isLoggedIn, async (req, res) => {
    try {
      const { content } = req.body;

      // Create a new document with the content
      const newContent = new Content({ content });

      // Save the document to MongoDB
      await newContent.save();

      res.status(200).json({ message: 'Content saved successfully' });
    } catch (error) {
      console.error('Error saving content:', error);
      res.status(500).json({ error: 'Failed to save content' });
    }
  });

  app.post('/api/saveImage', async (req, res) => {
    const binaryData = req.body.binaryData; // Binary data received from frontend
  
    try {
      const client = await MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
  
      // Insert binary data into MongoDB collection
      await collection.insertOne({ imageData: binaryData });
  
      client.close();
  
      res.status(201).json({ message: 'Image saved successfully' });
    } catch (error) {
      console.error('Error saving image:', error);
      res.status(500).json({ error: 'Failed to save image' });
    }
  });

  // Route to handle user login
  app.post('/api/user/login', (req, res) => {
    const { uid } = req.body;
    req.session.uid = uid;
    res.json({ message: `User with UID ${uid} logged in successfully.` });
  });

  // Route to handle fetching drawings
  app.get('/drawings', isLoggedIn, async (req, res) => {
    const uid = req.session.uid;
    try {
      const db = getDb();
      const drawings = await db.collection(uid).find().toArray();
      res.json(drawings);
    } catch (error) {
      console.error('Error fetching drawings:', error);
      res.status(500).send('Error fetching drawings');
    }
  });

  app.post('/update-drawing', isLoggedIn, async (req, res) => {
    const { title, drawingData, uniqueCode } = req.body;
    const uid = req.session.uid;
    const db = getDb();
    const collection = db.collection(uid); // Using user's UID as collection name
    try {
      const result = await collection.findOneAndUpdate(
        { uniqueCode }, // Filter condition
        { $set: { title, drawingData } }, // Update operation
        { returnOriginal: false } // Options
      );

      console.log('Drawing updated in MongoDB');
      res.status(200).json({ message: 'Drawing updated successfully', drawingId: uniqueCode });
    } catch (error) {
      console.error('Error updating drawing in MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.put('/drawings/:uniqueCode', isLoggedIn, async (req, res) => {
    const uid = req.session.uid;
    const uniqueCode = req.params.uniqueCode;

    try {
      const db = getDb();
      const result = await db.collection(uid).updateOne({ uniqueCode }, { $set: req.body });

      if (result.modifiedCount === 1) {
        res.status(200).send('Drawing updated successfully');
      } else {
        res.status(404).send('Drawing not found');
      }
    } catch (error) {
      console.error('Error updating drawing:', error);
      res.status(500).send('Error updating drawing');
    }
  });

  // Route to handle saving drawing data
  app.post('/save-drawing', isLoggedIn, async (req, res) => {
    const { title, drawingData, uniqueCode } = req.body;
    const uid = req.session.uid;
    try {
      if (!drawingData) {
        return res.status(400).json({ error: 'No drawing data provided' });
      }
      const db = getDb();
      const collection = db.collection(uid); // Using user's UID as collection name
      await collection.insertOne({ title, drawingData, uniqueCode });
      console.log('Drawing saved to MongoDB');
      res.status(200).json({ message: 'Drawing saved successfully', drawingId: uniqueCode });
    } catch (error) {
      console.error('Error saving drawing:', error);
      res.status(500).json({ error: 'An error occurred while saving the drawing' });
    }
  });
}
