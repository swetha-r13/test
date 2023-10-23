import React, { useState, useEffect } from 'react';
import './chat.css';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage) {
      setMessages([...messages, { text: newMessage, user: 'You' }]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <span className="user">{message.user}:</span> {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatRoom;

