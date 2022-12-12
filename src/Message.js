import { Card,CardContent,Typography } from '@mui/material'
import React from 'react'
import './Message.css';

function Message({message, username}){
    const isUser = username===message.username; 
    return(
        <div className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography
                        text-color="white"
                        variant="h6"
                        component="h5">
                     <h2>{message.username}: {message.message}</h2>   
                    </Typography>
                </CardContent>
            </Card> 
        </div>
    )
}

export default Message 