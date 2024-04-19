# Dependency Change Detector

Understanding React's `useEffect` hook is crucial for effective state and lifecycle management in functional components. This kata focuses on using `useEffect` to detect and log changes in component props, which is fundamental in managing side effects based on changing dependencies.

## Concept

This exercise demonstrates how to use the `useEffect` hook to track changes in props and perform actions based on those changes. The hook allows you to execute side effects in your component, and optionally clean them up, based on changes to specified dependencies.

## Learning Objectives

- **Understand how to track changes to props using `useEffect`.**
- **Learn to implement cleanup logic to prevent memory leaks and unintended behavior.**
- **Deepen your understanding of dependency arrays and how they trigger effect re-execution.**

## User Stories

- As a developer, I want to monitor changes to specific props and log these changes to understand how my component responds to external changes.
- As a developer, I need to ensure that any side effects are cleaned up properly when props change or when the component unmounts, to maintain optimal performance and prevent bugs.

## Task Description

You are provided with a component skeleton that includes props and state setup but lacks the necessary `useEffect` implementation. Your task is to fill in the missing logic to monitor prop changes effectively:

1. **Initialize State for Logging**: Set up state to store logs of prop changes.
2. **Implement `useEffect`**: Use the hook to compare current props against their previous values.
3. **Log Changes**: Update your state with a log of what changed, including the old and new values.
4. **Display Changes**: Render the current prop values and the change log dynamically as props are updated.

## Expected Outcome

Upon completing the kata, you should be able to see a detailed log of all prop changes every time you interact with the control buttons. This log will help you visualize the behavior of `useEffect` in response to dependency changes.

## Additional Notes

- Remember, the key to mastering `useEffect` is understanding how it manages dependencies and cleanup. Pay special attention to how previous prop values are tracked and compared to new ones.
- Consider edge cases where props might change back to their initial values and ensure your implementation handles these scenarios gracefully.

By completing this kata, you will enhance your ability to build reactive, efficient React applications that respond intelligently to prop changes.