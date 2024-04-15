import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import { Server } from 'socket.io';
import config from "./src/config/index.js";
import { startMessageConsumer } from "./src/utils/kafka.js"
import { produceMessage } from "./src/utils/kafka.js"
import { connectToDb } from "./src/config/db.js";
import { createTopicByAdmin } from "./src/utils/admin.kafka.js"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
createTopicByAdmin();
startMessageConsumer();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {

    socket.on('message', async (data) => {
        let dataToSave = {
            id: socket.id,
            message: data,
            timestamp: Date().toString()
        }
        socket.broadcast.emit('received-message', data);
        await produceMessage(dataToSave);
        console.log("Message Produced to Kafka Broker");
    });

    socket.on('on-typing', data => {
        socket.broadcast.emit('activity', data)
    })

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

connectToDb().then(()=>{
    server.listen(config.PORT, onListening);
}).catch((error) => {
    return { error: 'Failed to connect to DB' }
});
