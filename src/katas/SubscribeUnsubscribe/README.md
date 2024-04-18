# Subscribe Unsubscribe

Here's a simple exercise focused on using the `useEffect` hook in a React component to manage a simple subscription model. This exercise does not rely on external dependencies beyond a basic mock and emphasizes understanding the setup and cleanup phases within the `useEffect` lifecycle.

**Objective:**
Create a React component that subscribes to a mock event emitter when the component mounts and unsubscribes when it unmounts. This will help understand how to handle resources that require clean-up.

**Setup:**
Assume you have a mock event emitter that simulates receiving messages over time. Here's a basic setup for such an emitter:

```typescript
// MockEventEmitter.ts
type CallbackType = (message: string) => void;

export class MockEventEmitter {
  private listeners: CallbackType[] = [];

  constructor() {
    setInterval(() => {
      this.listeners.forEach(listener => listener(`Message at ${new Date().toLocaleTimeString()}`));
    }, 1000);
  }

  public subscribe(callback: CallbackType): void {
    console.log('Subscribing');
    this.listeners.push(callback);
  }

  public unsubscribe(callback: CallbackType): void {
    console.log('Unsubscribing');
    this.listeners = this.listeners.filter(listener => listener !== callback);
  }
}

export const emitter = new MockEventEmitter();

```

**Exercise:**
Create a `MessageComponent` that uses the `useEffect` hook to handle subscribing to and unsubscribing from the `MockEventEmitter`. Display the messages in the component.

```typescript
import { FC, useEffect, useState } from 'react';
import { emitter } from './MockEventEmitter';

const SubscribeUnsubscribe: FC = (): JSX.Element => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const handleMessage: (newMessage: string) => void = newMessage => {
      setMessage(newMessage);
    };

    emitter.subscribe(handleMessage);

    return () => {
      emitter.unsubscribe(handleMessage);
    };
  }, []);

  return (
    <div>
      <h1>Latest Message</h1>
      <p>{message}</p>
    </div>
  );
};

export default SubscribeUnsubscribe
```

**Instructions:**
1. Implement the `MockEventEmitter` class as provided.
2. Create the `MessageComponent` to subscribe to the emitter.
3. Make sure the component properly cleans up by unsubscribing when it unmounts to avoid memory leaks.
4. Use this setup to understand how `useEffect` runs on mount, update (though not applicable in this simple case), and unmount.

This exercise is designed to be small in scope and focuses on the practical application of `useEffect` for resource management in React components.