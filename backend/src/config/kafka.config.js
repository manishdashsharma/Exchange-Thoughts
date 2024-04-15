import { Kafka } from "kafkajs"
import config from "./index.js"


export const kafka = new Kafka({
    clientId: "chat",
    brokers: [config.IP]
})