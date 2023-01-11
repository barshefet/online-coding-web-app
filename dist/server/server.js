"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const root = path_1.default.join(process.cwd(), "client");
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)());
app.use((0, body_parser_1.json)());
app.use(express_1.default.static(root));
app.get("/", (_req, res) => {
    res.sendFile(path_1.default.join(root, "index.html"));
});
const io = new socket_io_1.Server(server);
io.on('connection', (socket) => {
    console.log(`a user with the socket Id: ${socket.id} is connected`);
});
app.get('/data', (_req, res) => {
    console.log("Processing /data");
    res.send({ message: "Hello world" });
});
app.get('*', (_req, res) => {
    res.sendFile(path_1.default.join(root, 'index.html'));
});
server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
//# sourceMappingURL=server.js.map