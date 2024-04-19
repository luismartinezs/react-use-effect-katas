import { useState } from "react";
import { MockWebSocket } from "./MockWebSocket";

export const WebsocketChat = (): React.JSX.Element => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  // ws will need to be set up within useEffect when the component mounts
  const [ws, setWs] = useState<MockWebSocket | null>(null);

  // Connection to the WebSocket should be established here using useEffect

  // Handler function for sending messages
  const sendMessage = () => {
      // WebSocket sending logic will need to use the ws instance created by useEffect
      console.log('Send message:', input);
      setInput('');
  };

  return (
      <div>
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
          {messages.length > 0 && (
              <ul>
                  {messages.map((msg, index) => (
                      <li key={index}>{msg}</li>
                  ))}
              </ul>
          )}
      </div>
  );
};
