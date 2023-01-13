import path from "path";
import express, { Express } from "express";
import http from "http";
import cors from "cors";
import { json } from "body-parser";
import { Server } from "socket.io";
import { connect, getAllCodeBlocks, getCodeBlock } from "./mongo";

const app: Express = express();

const PORT = process.env.PORT || 4000;
const root: string = path.join(process.cwd(), "client");

const server = http.createServer(app);

app.use(cors());
app.use(json());
app.use(express.static(root));

//connecting to the MongoDb Atlas db
connect();

const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`a user with the socket Id: ${socket.id} is connected`);

  socket.on("join-room", async (roomId: string) => {
    //client joins a room
    socket.join(roomId);
    //determined by roomId, a code block is fetched from the db
    let codeBlock = await getCodeBlock(roomId);
    let clients = io.sockets.adapter.rooms.get(roomId)?.size;
    //if the client is first to join. he will be defined as "mentor"
    //else he is a "student" and when "room-aproved" is emmited, false is sent back to the client for ther mentor state
    if (clients === 1) {
      io.to(socket.id).emit("room-aproved", true);
      io.to(socket.id).emit("first-update", await codeBlock);
    } else {
      io.to(socket.id).emit("room-aproved", false);
      io.to(socket.id).emit("first-update", await codeBlock);
    }
  });

  //Sent from a "student" client containing a modified code string
  //The new code is dispatched to all clients who are present in the room
  socket.on("code-update", (msg: string, roomId: string) => {
    io.to(roomId).emit("update", msg);
  });

  //Request from the client for all code blocks to be sent which is responded by fetching from the db
  socket.on("getAllCodeBlocks", async () => {
    socket.emit("allCodeBlocks", await getAllCodeBlocks());
  });
});

//Provides the index html when site is first reached
app.get("*", (_req, res) => {
  res.sendFile(path.join(root, "index.html"));
});

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
