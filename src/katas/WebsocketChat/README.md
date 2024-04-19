# WebSocket Chat Client

For the WebSocket Chat Client kata using the `useEffect` hook in React, we will set up a simple structure including a mock WebSocket service, a React component to handle the connection and messages, and a testing setup to ensure everything works as expected.

### Overview
This kata will help you understand how to manage WebSocket connections in React using `useEffect`. You will learn to handle real-time interactions with external systems in a way that ensures resources are managed efficiently and cleanly.

### Structure
1. **WebSocket Mock**: A simple mock of a WebSocket service.
2. **Chat Component**: A React component to handle WebSocket connections.
3. **Test File**: Ensures the chat client correctly opens and closes connections, and handles messages.

### 1. WebSocket Mock
Create a file named `MockWebSocket.ts` to simulate WebSocket behavior. This mock will mimic the basic functionality of a WebSocket, such as connecting, sending, receiving messages, and disconnecting.

```typescript
// MockWebSocket.ts
export class MockWebSocket {
    static instances: MockWebSocket[] = [];
    messages: string[] = [];
    isOpen = false;
    url: string;
    onmessage?: (event: { data: string }) => void;
    onopen?: () => void;
    onclose?: () => void;

    constructor(url: string) {
        this.url = url;
        MockWebSocket.instances.push(this);
    }

    connect() {
        this.isOpen = true;
        setTimeout(() => this.onopen && this.onopen(), 100);
    }

    send(message: string) {
        this.messages.push(message);
        setTimeout(() => {
            this.onmessage && this.onmessage({ data: `Echo: ${message}` });
        }, 100);
    }

    close() {
        this.isOpen = false;
        setTimeout(() => this.onclose && this.onclose(), 100);
    }

    static clear() {
        MockWebSocket.instances = [];
    }
}
```

### 2. Chat Component (`WebSocketChatClient.tsx`)
Create a React component that uses this mock WebSocket to handle real-time messaging.

```typescript
// WebSocketChatClient.tsx
import React, { useState, useEffect } from 'react';
import { MockWebSocket } from './MockWebSocket';

const WebSocketChatClient = (): React.JSX.Element => {
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
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
};

export default WebSocketChatClient;
```

### 3. Test File (`WebSocketChatClient.test.tsx`)
Using `vitest` and `@testing-library/react` to test the component:

```typescript
// WebSocketChatClient.test.tsx
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import WebSocketChatClient from './WebSocketChatClient';
import { MockWebSocket } from './MockWebSocket';

vi.mock('./MockWebSocket', () => {
  return {
    MockWebSocket: vi.fn(() => ({
      connect: vi.fn(),
      send: vi.fn(),
      close: vi.fn(),
      onmessage: null,
      onopen: null,
      onclose: null
    })),
  };
});

describe('WebSocketChatClient', () => {
  beforeEach(() => {
    MockWebSocket.clear();
  });

  afterEach(cleanup);

  it('should send messages and display responses', async () => {
    render(<WebSocketChatClient />);
    const input = screen.getByPlaceholderText('Type a message...');
    const sendButton = screen.getByText('Send');

    fireEvent.change(input, { target: { value: 'Hello WebSocket' } });
    fireEvent.click(sendButton);

    await vi.runAllTimers();

    expect(screen.getByText(/Echo: Hello WebSocket/)).toBeInTheDocument();
  });
});

vi.runAllTim

ers();
```

To provide more detailed and comprehensive instructions for the WebSocket Chat Client kata, I'll outline each step clearly to ensure that users understand what is expected from them as they implement the component's functionality and related tests. These instructions will guide users through setting up the WebSocket connection, managing the component lifecycle, and testing the functionality effectively.

### Detailed Instructions

#### 1. Set Up the WebSocket Connection
- **Initialize the WebSocket:** Incorporate the `MockWebSocket` into the `WebSocketChatClient` component using the React `useEffect` hook. Ensure that the WebSocket connects when the component mounts.
- **Establish Connection Logic:** Define the `onopen`, `onmessage`, and `onclose` event handlers within the `useEffect` to manage WebSocket events.
  - **On Open:** Log a message to the console indicating that the connection has been established.
  - **On Message:** Update the component's state to include the received message so it can be displayed in the UI.
  - **On Close:** Log a message to the console indicating that the connection has been closed.

#### 2. Manage WebSocket Messages
- **Send Messages:** Implement the `sendMessage` function to send messages through the WebSocket when the user submits the form. Ensure that the input field is cleared after sending a message.
- **Receive Messages:** Update the messages array in the component's state whenever a new message arrives from the WebSocket.

#### 3. Clean Up on Component Unmount
- **Disconnect WebSocket:** Ensure that the WebSocket connection is properly closed when the component unmounts. This is crucial to prevent memory leaks and other unwanted behaviors.

#### 4. Implement User Interface
- **Input Field:** Provide an input field for users to type their messages.
- **Send Button:** Include a button to send messages.
- **Messages Display:** Show a list of messages that have been sent or received during the session.

#### 5. Write Unit Tests
- **Testing Setup:** Use `vitest` and `@testing-library/react` to write tests for your component.
  - **Mock the WebSocket:** Ensure that the `MockWebSocket` class is properly mocked in your tests to simulate WebSocket behavior.
- **Test Connection Management:**
  - **Test Connection Open:** Assert that the WebSocket connection is opened on component mount.
  - **Test Connection Close:** Verify that the WebSocket connection is closed on component unmount.
- **Test Message Sending and Receiving:**
  - **Send Message:** Simulate sending a message and verify that it updates the UI correctly.
  - **Receive Message:** Simulate receiving a message from the WebSocket and check that it appears in the message list.

### Example Code Snippets for Key Actions

#### Sample `useEffect` Implementation
```typescript
useEffect(() => {
  const websocket = new MockWebSocket("ws://mockserver.com");

  websocket.onopen = () => console.log("Connected to WebSocket");
  websocket.onmessage = (event) => setMessages(prev => [...prev, event.data]);
  websocket.onclose = () => console.log("Disconnected from WebSocket");

  websocket.connect();

  return () => {
    websocket.close();
  };
}, []);
```

#### Sample Test for Connection Open and Close
```typescript
import { render, unmountComponentAtNode } from "@testing-library/react";
import WebSocketChatClient from './WebSocketChatClient';
import { MockWebSocket } from './MockWebSocket';

describe("WebSocketChatClient", () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("opens and closes WebSocket connection", () => {
    const spyOpen = vi.spyOn(MockWebSocket.prototype, 'connect');
    const spyClose = vi.spyOn(MockWebSocket.prototype, 'close');

    render(<WebSocketChatClient />, container);

    expect(spyOpen).toHaveBeenCalled();

    cleanup();

    expect(spyClose).toHaveBeenCalled();
  });
});
```

These detailed instructions and examples should help users effectively develop and test the WebSocket Chat Client kata, enhancing their understanding of real-time communication in React using `useEffect`.

This setup provides a comprehensive learning exercise focused on using `useEffect` for real-time data handling with WebSockets in React.


### Starting point

```typescript
import React, { useState } from 'react';

const WebSocketChatClient = (): React.JSX.Element => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState('');

    // This function will need to be connected to the websocket send method.
    const sendMessage = () => {
        console.log("Sending message:", input);
        // Placeholder for sending message to the websocket
        setInput(''); // Reset input field after "sending" message
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
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
            {/* Placeholder where messages will appear */}
        </div>
    );
};

export default WebSocketChatClient;
```