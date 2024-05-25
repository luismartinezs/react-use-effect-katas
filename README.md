# React use effect katas

## Dev tasks

- [x] clean up template boilerplate
- [x] install deps
  - [x] vitest
  - [x] tailwind
  - [x] react-router
- [x] setup layout
- [x] setup routing
- [x] config tailwind
- [x] setup plop for generating routes
- [x] start adding katas
- [ ] Better landing
- [ ] Each kata shows also the README file next to it
- [ ] Better navigation (toggleable side bar)

## useEffect hook overview

Here's a structured outline of the key aspects, features, use cases, and important considerations (like potential pitfalls or specific scenarios when not to use) of the `useEffect` hook based on the documentation provided:

### `useEffect` Hook Overview
- **Basic Usage**:
  - Used to synchronize a component with an external system.
  - Should be called at the top level of a component.
  - Syntax: `useEffect(setup, dependencies?)`.

### Parameters
- **`setup` function**:
  - Contains the effect's logic.
  - Can optionally return a cleanup function.
- **`dependencies?` array** (optional):
  - An array of dependencies that determines when the effect should re-run.
  - React compares each dependency with its previous value using `Object.is`.

### Lifecycle
- **Mounting**:
  - Setup function runs when the component is first added to the DOM.
- **Updating**:
  - On re-renders with changed dependencies, cleanup function runs first with old values, followed by the setup function with new values.
- **Unmounting**:
  - Cleanup function runs when the component is removed from the DOM.

### Best Practices and Common Usage Scenarios
- **Connecting to an external system**:
  - Examples include network connections, browser APIs, or third-party libraries.
- **Fetching data**:
  - Utilize for fetching data when component mounts and/or when certain dependencies change.
- **Subscriptions**:
  - Managing event listeners or external data subscriptions and unsubscriptions.
- **Performing side effects**:
  - Appropriate for various side effects not tied directly to the rendering cycle.

### Cleanup Mechanism
- Importance of returning a cleanup function to avoid memory leaks and other resource issues.

### Dependency Array
- **Specifying dependencies**:
  - Effects run again only when specified dependencies change.
  - Leaving the dependency array empty means the effect runs only on mount and unmount.
  - Omitting the dependency array causes the effect to run after every render.

### Common Issues and Solutions
- **Effect runs twice when component mounts** (in Strict Mode for development).
- **Effect re-runs in an infinite loop**:
  - Likely caused by dependencies that change on every render.
- **Mismanagement of dependencies**:
  - Over-specification or under-specification of dependencies.
- **Race conditions**:
  - Handling asynchronous operations safely with cleanup to prevent updates on unmounted components.

### Advanced Scenarios
- **Performance optimizations**:
  - Preventing unnecessary re-runs by memoizing functions or objects.
- **Separation of concerns**:
  - Extracting complex logic into custom hooks.

### `useLayoutEffect` for Visual Adjustments
- **Usage for immediate DOM updates**:
  - Used when adjustments need to be made to the DOM before the browser paints to avoid flickers or visual anomalies.

### Restrictions and Caveats
- **Execution context**:
  - `useEffect` is only run on the client side and not during server-side rendering.
- **Placement in code**:
  - Must be used at the top level of a component or hook, not conditionally or within loops.

This outline should give a clear roadmap of the `useEffect` documentation, highlighting its purpose, usage, and intricacies.