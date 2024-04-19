import { useState } from "react";

type CodeToggleProps = {
  start: React.ReactNode;
  finish: React.ReactNode;
}

const CodeToggle = ({start, finish}: CodeToggleProps): React.JSX.Element => {
  const [isStartCode, setIsStartCode] = useState(true);

  return (
    <div className="">
      <div className="flex items-center text-sm">
        <span className={`${isStartCode ? 'text-primary-500' : 'text-gray-400'} mr-2`}>Start</span>

        <button
          onClick={() => setIsStartCode(!isStartCode)}
          className={`w-[53px] h-8 flex items-center rounded-full ${isStartCode ? 'bg-primary-400' : 'bg-secondary-400'}`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
              isStartCode ? 'translate-x-1' : 'translate-x-6'
            }`}
          ></div>
        </button>

        <span className={`${!isStartCode ? 'text-secondary-500' : 'text-gray-400'} ml-2`}>Finish</span>

      </div>
      <div className="flex-grow">
        {isStartCode ? start : finish}
      </div>
    </div>
  );
};

export default CodeToggle
