require('dotenv').config()
import {
    KafkaClient,
    Consumer
} from "kafka-node";

const client = new KafkaClient(process.env.KAFKA_CLIENT);
const consumer = new Consumer(client, [{
    topic: process.env.KAFKA_TOPIC,
    partition: 0
}], {
    autoCommit: false
});

consumer.on("message", (message) => {
    console.log(`Message read from Kafka topic [${process.env.KAFKA_TOPIC}]: ${JSON.stringify(message)}`);
});

consumer.on("error", (error) => {
    console.log(consumer);
    console.log(`Error: ${error}`);
});