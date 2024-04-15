import { kafka } from '../config/kafka.config.js';
import { saveMessage } from '../controllers/message.controller.js';


let producer = null;

export async function createProducer() {
  if (producer) return producer;

  const _producer = kafka.producer();
  await _producer.connect();
  producer = _producer;
  return producer;
}

export async function produceMessage(data) {
    const producer = await createProducer();
    const messageValue = JSON.stringify(data);
    await producer.send({
        topic: "MESSAGE",
        messages: [
            {
                value: messageValue,
            },
        ],
    });
    return true;
}

export async function startMessageConsumer() {
    console.log("Consumer is running..");
    const consumer = kafka.consumer({ groupId: "default" });
    await consumer.connect();
    await consumer.subscribe({ topic: "MESSAGE", fromBeginning: true });

    await consumer.run({
        autoCommit: true,
        eachMessage: async ({ message, pause }) => {
        if (!message.value) return;
        console.log(`New Message Recv..`);
        try {
            console.log("all ok",message.value?.toString());
            saveMessage(JSON.parse(message.value?.toString()))
        } catch (err) {
            console.log("Something is wrong");
            pause();
            setTimeout(() => {
            consumer.resume([{ topic: "MESSAGE" }]);
            }, 60 * 1000);
        }
        },
    });
}
