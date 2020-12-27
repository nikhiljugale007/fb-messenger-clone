import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import Typography from '@material-ui/core/Card';
import './Message.css';

function selfUser(message) {
    return (        
    <Card className={'message-usercard'}>
        {message.username}: {message.message}
    </Card>
    )
}

function otherUser(message){
    return (        
    <Card className={'message-guestcard'}>
        {message.username}: {message.message}
    </Card>
    )
}


function Message({message,username}) {
    
    const isUser  = username.localeCompare(message.username);
    console.log(isUser);
    // if(isUser) {
    //     return <selfUser/>;
    // }
    // else{
    //     return <otherUser/>;
    // }
    
    return (        
        <div className={"message"} >
            <p className={isUser ? "message-guestcard" : "message-usercard" }>
                {message.username}: {message.message}
            </p>        
        </div>
    )
}
export default Message

// {props.username}: {props.mText}        
{/* <Card className="message-card">
      <CardContent>
        <Typography 
        color="white"
        variant="h5" 
        component="h2"
        > 
         {  props.username}: {props.mText}     
        </Typography>
      
      </CardContent>
    </Card> */}