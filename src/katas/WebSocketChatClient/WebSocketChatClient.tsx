import React, { useState, useEffect } from 'react';
import { MockWebSocket } from '../WebsocketChat/MockWebSocket';

const WebSocketChatClient= (): React.JSX.Element => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const [ws, setWs] = useState<MockWebSocket | null>(null);

    useEffect(() => {
        const websocket = new MockWebSocket("ws://mockserver.com");
        websocket.onopen = () => {
            console.log("Connected to WebSocket");
        };
        websocket.onmessage = (event) => {
            setMessages(prev => [...prev, event.data]);
        };
        websocket.onclose = () => {
            console.log("Disconnected from WebSocket");
        };

        setWs(websocket);
        websocket.connect();

        return () => {
            websocket.close();
        };
    }, []);

    const sendMessage = () => {
        ws?.send(input);
        setInput('');
    };

    return (
        <div>
            <h1>WebSocket Chat Client</h1>
            <div className="flex gap-2 my-2">
                <input
                    className="input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button className="button" onClick={sendMessage}>Send</button>
            </div>
            {messages.length ? (<ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>): null}
        </div>
    );
};

export default WebSocketChatClient;
