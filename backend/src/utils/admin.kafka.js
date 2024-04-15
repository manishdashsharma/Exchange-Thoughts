import { Kafka } from "kafkajs"
import config from "../config/index.js";

export async function createTopicByAdmin() {
  const kafka = new Kafka({
    clientId: "chat",
    brokers: [config.IP]
  })
    const admin = kafka.admin();
    console.log("Admin connecting...");
    admin.connect();
    console.log("Adming Connection Success...");
  
    console.log("Creating Topic [MESSAGE]");
    await admin.createTopics({
      topics: [
        {
          topic: "MESSAGE",
          numPartitions: 2,
        },
      ],
    });
    console.log("Topic Created Success [MESSAGE]");
  
    console.log("Disconnecting Admin..");
    await admin.disconnect();
  }

  // createTopicByAdmin();