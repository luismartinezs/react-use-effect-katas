import { useEffect, useState } from "react";
import { emitter } from "./MockEventEmitter";

export const SubUnsub = (): React.JSX.Element => {
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
      <h2>Latest Message</h2>
      <p>{message}</p>
    </div>
  );
};
