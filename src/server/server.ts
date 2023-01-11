import path from "path";
import express, {Express} from "express";
import http from "http";
import cors from "cors";
import { json } from 'body-parser';
import { Server } from "socket.io";


const app: Express = express();
const PORT = process.env.PORT || 4000;
const root: string = path.join(process.cwd(), "client");

const server = http.createServer(app);

app.use(cors());
app.use(json());
app.use(express.static(root));

app.get("/", (_req, res) => {
  res.sendFile(path.join(root, "index.html"));
});

const io = new Server(server);

io.on('connection', (socket) => {
  console.log(`a user with the socket Id: ${socket.id} is connected`);
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
