# Building a Custom useWindowSize Hook

Welcome to the Building a Custom useWindowSize Hook kata! In this exercise, you will create a custom React hook called `useWindowSize` that allows you to track the width and height of the browser window dynamically. This kata will help you understand how to create and use custom hooks in React.

## Learning Objectives:

- Understand how to create a custom hook in React.
- Learn how to use the `useState` and `useEffect` hooks in a custom hook.
- Practice tracking and updating dynamic window size values in a React component.

## Getting Started:

The starter code provides you with the basic structure of the `useWindowSize` custom hook and a `SampleComponent` that demonstrates its usage. Your task is to complete the `useWindowSize` hook by implementing the following features:

1. Initialize the `windowSize` state with the current width and height of the browser window.
2. Update the `windowSize` state whenever the window is resized.
3. Add an event listener for the `resize` event to update the `windowSize` state.
4. Remove the event listener when the component unmounts to prevent memory leaks.

To complete the kata, follow these steps:

1. Implement the logic to update the `windowSize` state in the `useWindowSize` hook.
2. Add the event listener for the `resize` event inside the `useEffect` hook.
3. Remove the event listener in the cleanup function of the `useEffect` hook.

## User Stories:

- As a user, I should see the current width and height of the browser window displayed in the `SampleComponent`.
- As a user, I should see the width and height values update dynamically when I resize the browser window.

## Tips:

- Use the `useState` hook to manage the window size state.
- Utilize the `useEffect` hook to add and remove event listeners.
- Remember to clean up any side effects in the cleanup function of the `useEffect` hook.
- Test the `SampleComponent` by resizing the browser window to see the values update.

## Stretch Goals:

- Implement a debounce function to optimize the performance of the resize event listener.
- Add support for tracking the window's inner dimensions excluding scrollbars and borders.
- Create a separate custom hook for detecting device orientation changes.
- Explore using the `ResizeObserver` API for more advanced window size tracking.

## Notes:

- Custom hooks in React allow you to extract component logic into reusable functions.
- Remember to follow best practices for creating custom hooks, such as starting the hook name with "use" and ensuring it's composable and self-contained.

Happy coding, and enjoy building your custom `useWindowSize` hook in React!