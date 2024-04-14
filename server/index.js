import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import { Server } from 'socket.io';
import config from "./src/config/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);

    socket.on('message', (data) => {
        console.log(data);
        socket.broadcast.emit('received-message', data);
    });
    socket.on('disconnect', () => {
        console.log(`User disconnected ${socket.id}`);
    });
});

server.on('error', (error) => {
    console.error(`Server error: ${error}`);
    process.exit(1);
});

const onListening = () => {
    console.log(`Listening on port ${config.PORT}`);
};

server.listen(config.PORT, onListening);
