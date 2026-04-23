import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODBURI;
const dbName = process.env.DBNAME;

if (!uri) {
  throw new Error("Please define MONGODBURI in .env.local");
}

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

// collections helper
export const collections = {
  PRODUCTS: "products",
};

// function to get collection
export async function dbConnect(collectionName) {
  const client = await clientPromise;
  return client.db(dbName).collection(collectionName);
}