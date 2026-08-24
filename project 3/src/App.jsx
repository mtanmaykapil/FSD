import React from "react";

// Normal function
function add(a, b) {
  return a + b;
}

// React component
function Welcome() {
  return <h2>Welcome to my first React component</h2>;
}

// Another component
function Info() {
  return (
    <div>
      <h3>What is a component?</h3>
      <p>A component is a reusable piece of UI in React.</p>
    </div>
  );
}

// Main App
function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Your First React Component</h1>

      <Welcome />

      <Info />

      <h3>Difference between Function and Component</h3>

      <p>Normal function result: {add(10, 20)}</p>
    </div>
  );
}

export default App;