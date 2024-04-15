import { io } from "socket.io-client";
import { useEffect, useState, useMemo } from "react";
import { Container, Typography, TextField, Button, Stack, Paper } from "@mui/material";

import "./App.css";

const App = () => {
  const socket = useMemo(() => io("http://localhost:9000"), []);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit("message", message);
    setMessages((prevMessages) => [...prevMessages, { id: Date.now(), text: message, user: "me" }]);
    setMessage("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("User connected", socket.id);
    });

    socket.on("received-message", (data) => {
      setMessages((prevMessages) => [...prevMessages, { id: Date.now(), text: data, user: "other" }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <Container maxWidth="md" className="container">
      <Typography variant="h4" component="div" gutterBottom>
        Express your feeling
      </Typography>
      <Paper elevation={3} className="messageContainer">
        <Stack spacing={2}>
          {messages.slice().map((item) => (
            <Typography
              key={item.id}
              variant="body1"
              color="textPrimary"
              className={`message ${item.user}`}
            >
              {item.text}
            </Typography>
          ))}
        </Stack>
      </Paper>
      <form onSubmit={handleSubmit} className="container">
        <TextField
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          label="Type your message"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "16px" }}
        >
          Send
        </Button>
      </form>
    </Container>
  );
};

export default App;
