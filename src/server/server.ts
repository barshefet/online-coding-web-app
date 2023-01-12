import path from "path";
import express, { Express } from "express";
import http from "http";
import cors from "cors";
import { json } from "body-parser";
import { Server } from "socket.io";
import { connect, getCodeBlocks } from "./mongo";

const app: Express = express();

const PORT = process.env.PORT || 4000;
const root: string = path.join(process.cwd(), "client");

const server = http.createServer(app);

app.use(cors());
app.use(json());
app.use(express.static(root));

connect()

const io = new Server(server, { cors: { origin: "http://localhost:3000" } });

io.on("connection", (socket) => {
  console.log(`a user with the socket Id: ${socket.id} is connected`);

  socket.on("join-room", (roomId: string) => {
    socket.join(roomId);
    let clients = io.sockets.adapter.rooms.get(roomId)?.size;
    if (clients === 2) {
      io.to(socket.id).emit("room-aproved", false);
    } else if (clients === 1) {
      io.to(socket.id).emit("room-aproved", true);
    } else if (clients! >= 2) {
      socket.leave(roomId);
      io.to(socket.id).emit("room-full");
    }
  });

  socket.on("code-update", (msg: string) => {
    console.log(msg);
    io.to("1").emit("update", msg);
  });
});

app.get("/code-blocks", async (_req, res) => {
  res.send(await getCodeBlocks());
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(root, "index.html"));
});

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
