require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

let USER = process.env.NAME;
let PASSWORD = process.env.PASSWORD;

const uri = `mongodb+srv://${USER}:${PASSWORD}@cluster0.rxb57.mongodb.net/?retryWrites=true&w=majority`;

const client: typeof MongoClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

export const connect = async () => {
  try {
    await client.connect();
  } catch (error) {
    console.error(error);
  } finally {
    console.log("connected to DB");
  }
};

export const getCodeBlocks = async () => {
  try {
    const collection = await client.db("CodeBlocks").collection("CodeBlocks");
    let allCodeBlocks = await collection.find().toArray();
    return allCodeBlocks;
  } catch (error) {
    console.error(error);
  }
};
