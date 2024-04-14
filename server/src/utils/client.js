import { Kafka } from "kafkajs"

exports.kafka = new Kafka({
    clientId: "chat",
    brokers: ["192.168.0.100:9092"]
})