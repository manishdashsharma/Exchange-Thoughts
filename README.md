# kafka-nodejs-application

# Setup the application
1. Create a `.env` file in server
    ```js
        PORT = 5000
        IP = "<YOUR_PRIVATE_IP>:9092"
    ```
2. Create a Topic using admin 
    ```bash 
    cd server/utils/
    ```
    ```bash
    node admin.kafka.js
    ```
1. Start Zookeper Container and expose PORT `2181`.
    ```bash
    docker run -p 2181:2181 zookeeper
    ```
2. Start Kafka Container, expose PORT `9092` and setup ENV variables.
    ```bash
    docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
    -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
    -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
    confluentinc/cp-kafka

    ```