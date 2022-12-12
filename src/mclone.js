// import logo from './logo.svg';
import React,{useState} from 'react';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  const [input, setInput]= useState('');

  const [messages, setMessages]= useState([]);
  console.log(input);
  console.log(messages);

  const sendMessage = (event)=>{
    // All the Logic to send Message
    event.preventDefault(); //This won't let page to get refresh after every submit as in case of form it genrally refresh it self
    setMessages([...messages, input])
    setInput('');
  }
  return (
    <div className="App">
      <>
      <h1>Md Istebsharul Bari</h1>
      <form>
          <input value ={input} onChange={event=>setInput(event.target.value)}/><br></br>
          <Button variant="outlined" color="primary" type='submit' onClick={sendMessage}>Send </Button>
      </form>

      {
        messages.map(messages=>(
          <p>{messages}</p>
        ))
      }
      </>
    </div>
  );
}

export default App;
