# Planetary Data Fetcher

Welcome to the Planetary Data Fetcher kata! This exercise will help you understand how to utilize the `useEffect` hook in React to manage side effects such as data fetching.

In this kata, you will create a component that interacts with the Star Wars API (SWAPI) to fetch a list of planets and their details. You will implement functionality to display this list and manage the user's selection to show more detailed information about each planet.

## Learning Objectives:

- Use `useEffect` to perform side effects in your component.
- Understand how to fetch data from an API on component mount.
- Manage loading states in your component for a better user experience.
- Fetch and display detailed data based on user interaction and component state.

## Getting Started:

The starter code sets up the basic structure of the Planetary Data Fetcher component. Your task is to complete the component by implementing the following features:

1. Fetch the list of planets from 'https://swapi.dev/api/planets/' when the component mounts and populate the `planets` state.
2. Display a loading indicator while the planets are being fetched.
3. Handle user interaction to select a planet and fetch details for the selected planet from `https://swapi.dev/api/planets/${selectedPlanet}/`.
4. Display a loading indicator while the planet details are being fetched.
5. Render the fetched planet details using the provided `PlanetDetails` component.

## User Stories:

- As a user, I should see a list of Star Wars planets loaded from the SWAPI when I first load the component.
- As a user, I should be able to select a planet from the list to view more details about it.
- As a user, I should see a loading indicator while the list of planets and the planet details are being fetched.

## Tips:

- Use the `useState` hook to manage the planets list, selected planet ID, planet details, and loading states.
- Use the `useEffect` hook to trigger side effects for data fetching.
- Consider edge cases such as error handling and empty states.
- Think about the user experience when implementing loading states.

## Stretch Goals:

- Implement pagination or infinite scrolling for the list of planets.
- Add error handling and display a message if the API request fails.
- Allow users to go back to the list after viewing details to select another planet.
- Abstract the fetch funtionality to a custom hook
- Avoid race conditions by implementing a solution similar to this: https://react.dev/reference/react/useEffect#fetching-data-with-effects

## Notes:

- In react, usually to fetch third party data over the network one would use a library such as [tanstack query](https://tanstack.com/query/latest)

Good luck, and may the force be with you as you tackle this React kata!