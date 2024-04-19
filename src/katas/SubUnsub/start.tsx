import { useState } from "react";
import { emitter } from "./MockEventEmitter";

export const SubUnsub = (): React.JSX.Element => {
  const [message, setMessage] = useState<string>('');

  // Subscription to the event emitter should be set up here using the useEffect hook
  // Remember to include a cleanup function to unsubscribe

  return (
    <div>
      <h2>Latest Message</h2>
      <p>{message}</p>
      {/* The message will be displayed here once the useEffect hook is correctly implemented */}
    </div>
  );
};
