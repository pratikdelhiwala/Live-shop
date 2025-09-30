import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

function Viewer() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('message', msg => setMessages(prev => [...prev, msg]));
  }, []);

  const sendMessage = () => {
    socket.emit('message', input);
    setInput('');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Viewer Chat</h1>
      <div className="border p-2 h-64 overflow-y-scroll mb-2">
        {messages.map((m, i) => <div key={i}>{m}</div>)}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        className="border px-2 py-1 mr-2"
      />
      <button onClick={sendMessage} className="bg-green-500 text-white px-2 py-1">Send</button>
    </div>
  );
}

export default Viewer;
