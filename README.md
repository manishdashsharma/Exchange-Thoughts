### Exchange Thought: 
A real-time chat application built with Node.js, React.js, Kafka, and MongoDB. Scalable and efficient messaging platform for seamless communication.

## Setup the application

### Backend Setup
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the backend directory:
    ```env
    PORT=5000
    IP=<YOUR_PRIVATE_IP>:9092
    ```

4. Create a Kafka Topic using admin:
    ```bash
    cd utils/
    node admin.kafka.js
    ```

5. Start Zookeeper Container and expose PORT `2181`:
    ```bash
    docker run -p 2181:2181 zookeeper
    ```

6. Start Kafka Container, expose PORT `9092` and set ENV variables:
    ```bash
    docker run -p 9092:9092 \
    -e KAFKA_ZOOKEEPER_CONNECT=192.168.0.100:2181 \
    -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.0.100:9092 \
    -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
    confluentinc/cp-kafka
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```
This will start the frontend server, allowing you to access the Exchange Thought application in your browser.
