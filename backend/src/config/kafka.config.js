import { Kafka } from "kafkajs"
import config from "./index.js"

console.log("helloooooo",config.IP);
export const kafka = new Kafka({
    clientId: "chat",
    brokers: [config.IP]
})