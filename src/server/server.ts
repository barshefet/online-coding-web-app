import path from "path";
import express, {Express} from "express";
import http from "http";
import cors from "cors";
import { json } from 'body-parser';
import { Server } from "socket.io";


const app : Express = express();

const PORT = process.env.PORT || 4000;
const root: string = path.join(process.cwd(), "client");

const server = http.createServer(app);

app.use(cors());
app.use(json());
app.use(express.static(root));

const io = new Server(server, {cors: {origin: 'http://localhost:3000'}});

io.on('connection', (socket) => {
  console.log(`a user with the socket Id: ${socket.id} is connected`);

 
  socket.on("join-room", (roomId: string) => {
    socket.join(roomId)
    let clients = io.sockets.adapter.rooms.get(roomId)?.size
    if(clients === 2){
      io.emit("room-aproved", "student")
    }else if(clients === 1){
      io.emit("room-aproved", "mentor")
    }else{
      io.emit("room-full")
    }
    
  })
});

app.get('/data', (_req, res) => {
  console.log("Processing /data");
  res.send({message: "Hello world"});
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
