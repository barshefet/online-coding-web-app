require("dotenv").config();
import { MongoClient } from "mongodb";

let USER = process.env.NAME;
let PASSWORD = process.env.PASSWORD;

const uri = `mongodb+srv://${USER}:${PASSWORD}@cluster0.rxb57.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

export const connect = async () => {
  try {
    await client.connect();
  } catch (error) {
    console.error(error);
  } finally {
    console.log("connected to DB");
  }
};

export const getAllCodeBlocks = async () => {
  try {
    const collection = await client.db("CodeBlocks").collection("CodeBlocks");
    let allCodeBlocks = await collection.find().toArray();
    return allCodeBlocks;
  } catch (error) {
    console.error(error);
  }
};

export const getCodeBlock = async (codeBlockId: string) => {
  try {
    const codeBlock = await client
      .db("CodeBlocks")
      .collection("CodeBlocks")
      .findOne({ id: codeBlockId });
    return codeBlock;
  } catch (error) {
    console.error(error);
  }
};
