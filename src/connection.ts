import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

async function listDatabases(client: MongoClient) {
  const databasesList = await client.db().admin().listDatabases();
  console.log('Databases:');
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

async function run() {
  // const uri =
  //   'mongodb+srv://yanric2000:joao1509@dev.ugzoe2q.mongodb.net/dsi_database?retryWrites=true&w=majority';
  const uri =
    'mongodb://univille:univille@localhost:27017/?authSource=admin&readPreference=primary&ssl=false';

  await mongoose.connect(uri);
}

const db = mongoose.connection;
db.on('error', console.error.bind(console));
db.once('open', () => console.log('Connection successfully oppened'));

const connectToMongoDB = async (callback: Function) => {
  await run()
    .then(() => {
      callback();
      console.log('Connected successfully to MongoDB');
    })
    .catch((error) => console.error('Failed to connect to MongoDB database: ', error));
};

export default connectToMongoDB;
