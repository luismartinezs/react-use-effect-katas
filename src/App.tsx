import Card from "@/components/Card";

function App() {
  return (
    <div className="flex items-center justify-center p-4">
      <Card className="max-w-3xl" shiny hoverEffect>
        <h1 className="text-3xl font-bold">React useEffect Katas</h1>
        <p className="mt-4">
          Welcome to the React useEffect Katas repository! This project is
          designed to help developers practice and master the useEffect hook in
          React through structured coding challenges. Each kata focuses on a
          specific aspect or use case of useEffect, providing hands-on
          experience with both common and advanced scenarios.
        </p>
        <p className="mt-2">
          Dive into the katas to explore various effects, dependencies, and
          cleanup mechanisms, and see how useEffect can be used effectively
          within your React applications.
        </p>
      </Card>
    </div>
  );
}

export default App;
