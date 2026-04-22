require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODBURI;
const dbname = process.env.DBNAME;

export const collection = {
  PRODUCTS: 'products',
}
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const dbConnect = (cname) => {
  return client.db(dbname).collection(cname);
}

console.log("URI:", uri);