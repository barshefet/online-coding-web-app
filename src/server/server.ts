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

connect();

const io = new Server(server, {cors: {origin: "http://localhost:3000"}});

io.on("connection", (socket) => {
  console.log(`a user with the socket Id: ${socket.id} is connected`);

  socket.on("join-room", async (roomId: string) => {
    socket.join(roomId);
    let codeBlock = await getCodeBlock(roomId);
    let clients = io.sockets.adapter.rooms.get(roomId)?.size;
    if (clients === 1) {
      io.to(socket.id).emit("room-aproved", true);
      io.to(socket.id).emit("first-update", await codeBlock);
    } else {
      io.to(socket.id).emit("room-aproved", false);
      io.to(socket.id).emit("first-update", await codeBlock);
    }
  });

  socket.on("code-update", (msg: string, roomId: string) => {
    // console.log(msg);
    // io.to(roomId).emit("update", msg);
    socket.broadcast.to(roomId).emit("update", msg)
  });

  socket.on("getAllCodeBlocks", async() => {
    socket.emit("allCodeBlocks", await getAllCodeBlocks())
  })
});

app.get("/code-blocks", async (_req, res) => {
  res.send(await getAllCodeBlocks());
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(root, "index.html"));
});

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
