import React, {useState , useEffect} from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { FormControl , InputLabel , Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase'
import firebase from 'firebase'

function App() {

  const [inputM , setInputM] = useState('');
  const [messages , setMessages] = useState([]);
    
  const[username , setUserName] = useState("");

  useEffect(() => {
    setUserName(prompt("Enter username..."));
  }, [])
  
  useEffect(() => {
    db.collection('messages').onSnapshot(snapshot =>  {
        setMessages(snapshot.docs.map(doc=> doc.data()))
    })
  },[])


  const sendMessage = event => {
    event.preventDefault();  
    db.collection('messages').add({
        username:username,
        message:inputM, 
        timestamp: firebase.firestore.FieldValue.serverTimestamp()  
    });
    // setMessages([...messages,{username:username, text: inputM}]);
    setInputM ("");
  }

  return (
      
    <div className="App">
        <h1>Fb Messagenger Clone</h1>
    <form>

    <h1>Welcome {username}</h1>
        <FormControl>
            <InputLabel>Enter a message...</InputLabel>
            <Input value={inputM} onChange={event => setInputM(event.target.value)} />
            <Button disabled={!inputM} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
    </form>
        
        {
            messages.map(message => {
                return <Message username = {username}  message = {message}/>
            })
        }

    </div>
  );
} 

export default App;
