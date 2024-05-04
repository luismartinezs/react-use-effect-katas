import React, { useState, useRef } from 'react';

interface FormState {
  value: string;
  timestamp: number;
}

const useLatestFormSubmission = () => {
  const [formData, setFormData] = useState<FormState | null>(null);
  const latestSubmissionRef = useRef<number>(0);

  const handleSubmit = (value: string) => {
    const timestamp = Date.now();
    latestSubmissionRef.current = timestamp;

    // Simulate an asynchronous API call
    setTimeout(() => {
      // Check if the current submission is the latest
      if (timestamp === latestSubmissionRef.current) {
        setFormData({ value, timestamp });
      }
    }, Math.random() * 2000); // Random delay to simulate network latency
  };

  return { formData, handleSubmit };
};

const FormComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const { formData, handleSubmit } = useLatestFormSubmission();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(inputValue);
    setInputValue(''); // Clear input after submit
  };

  return (
    <div className="p-4">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Type something..."
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Submit
        </button>
      </form>
      {formData && (
        <div className="mt-4 p-4 border-t">
          <p>Latest Submission:</p>
          <p>Value: {formData.value}</p>
          <p>Timestamp: {formData.timestamp}</p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;