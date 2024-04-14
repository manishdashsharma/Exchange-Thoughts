import kafka from "./client.js";
async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Adming Connection Success...");

  console.log("Creating Topic [chat]");
  await admin.createTopics({
    topics: [
      {
        topic: "chat",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic Created Success [chat]");

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();