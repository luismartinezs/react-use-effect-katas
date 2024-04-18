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
