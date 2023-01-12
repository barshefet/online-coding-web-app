require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

let USER = process.env.NAME;
let PASSWORD = process.env.PASSWORD;

const uri = `mongodb+srv://${USER}:${PASSWORD}@cluster0.rxb57.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

export const connect = () => {
  client.connect((err: Error) => {
    console.error(err);
    const collection = client.db("CodeBlocks").collection("CodeBlocks");
    console.log(collection);

    console.log("connected to db");
  });
};
