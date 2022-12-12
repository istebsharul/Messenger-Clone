// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Input } from "@mui/material";
import Message from "./Message";
import "./App.css";
// import firebase from 'firebase';
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "sharul", message: "Hey Everyone" },
    { username: "wasim",message: "Whats up Bro"},
  ]);
  const [username, setUsername] = useState("");

  // useState = variable in React
  // useEffect = run code on a condiiton(basically do while of React)

  // console.log(input);
  // console.log(messages);
  useEffect(()=>{
    db.collection('messages').onSnapshot(snapshot=>{
       setMessages(snapshot.docs.map(doc=>doc.data()))
    })
  },[])


  useEffect(() => {
    setUsername(prompt("Please Enter Your Name"));
  }, []);

  const sendMessage = (event) => {
    // All the Logic to send Message
    event.preventDefault(); //This won't let page to get refresh after every submit as in case of form it genrally refresh it self
    setMessages([...messages, { username: username, text: input }]);
    setInput('');  //this reempty the fill space after input
  };
  return (
    <div className="App">
      <>
        <h1>DARKWEB</h1>
        <h2>Welcome to the Private Chat{username}</h2>
        <form>
          <FormControl>
            <InputLabel>Enter your message</InputLabel>
            <Input
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            {/* disabled={!input} This let the Button Inactive when there is no input */}
            <Button
              disabled={!input}
              variant="contained"
              color="primary"
              type="submit"
              onClick={sendMessage}
            >
              Send
            </Button>
          </FormControl>

          {/* <Button>Test</Button> */}
        </form>
        {messages.map((message) => (
          // <p>{messages}</p>
          // <Message text={message}/> When it was an array
          // <Message username={message.username} text={message.text}/>
          <Message username={username} message={message} />
        ))}
      </>
    </div>
  );
}

export default App;
