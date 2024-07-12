import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let db;

export async function connectToDb() {
  const connectionString = process.env.DB_STRING;

  const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    db = client.db('Artswave'); // Replace 'Artswave' with your database name
    console.log('Successfully connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1);
  }
}

export function getDb() {
  if (!db) {
    throw new Error('Database not initialized!');
  }
  return db;
}
