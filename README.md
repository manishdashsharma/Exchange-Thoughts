Certainly! Here's a revised version of the setup instructions based on your provided information:

---

### Exchange Thought: A Real-Time Chat Application

Exchange Thought is a real-time chat application designed to offer seamless and efficient communication. Leveraging technologies like Node.js, React.js, Kafka, and MongoDB, it provides a scalable platform for instant messaging.

---

## Setup Instructions

Follow these steps to set up the Exchange Thought application on your local machine:

### Environment Configuration

1. **Create a `.env` File for Application**

    At the root directory of the project, create a `.env` file with the following content:
    ```env
    ZOOKEEPER_HOST=<YOUR_PRIVATE_IP>
    KAFKA_HOST=<YOUR_PRIVATE_IP>
    ```

### Backend Setup

1. **Navigate to Backend Directory**

    Change your directory to the `backend` folder:
    ```bash
    cd backend
    ```

2. **Create a `.env` File for Backend**

    Inside the `backend` directory, create a `.env` file with the following content:
    ```env
    PORT=9000
    IP = <YOUR_PRIVATE_IP>:9092
    MONGO_DB_URI=mongodb://mongo:27017/<YOUR_DATABASE_NAME>
    ```

3. **Run Docker Compose**

    Execute the following command in the terminal to start the application using Docker Compose:
    ```bash
    docker compose up 
    ```

### Additional Commands

- **Stop the Containers**
    ```bash
    docker compose down
    ```

- **Check Container Logs**
    ```bash
    docker logs <container_name> -f
    ```

---

### Accessing the Application

- **Backend Health Check**: Visit [Backend](http://localhost:9000/) to ensure that the backend server is running correctly.

- **Frontend Access**: The frontend of the Exchange Thought application is accessible at [Frontend](http://localhost:5173/).

---

You're now ready to explore the Exchange Thought application and experience its seamless messaging capabilities!