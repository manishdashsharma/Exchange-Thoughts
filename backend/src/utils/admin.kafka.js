import { kafka } from "../config/kafka.config.js";

export async function createTopicByAdmin() {
    const admin = kafka.admin();
    console.log("Admin connecting...");
    admin.connect();
    console.log("Adming Connection Success...");
  
    console.log("Creating Topic [MESSAGE]");
    await admin.createTopics({
      topics: [
        {
          topic: "MESSAGE",
          numPartitions: 1,
        },
      ],
    });
    console.log("Topic Created Success [MESSAGE]");
  
    console.log("Disconnecting Admin..");
    await admin.disconnect();
  }
  
  createTopicByAdmin();