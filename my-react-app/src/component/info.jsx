function Info() {
  return (
    <div
      style={{
        padding: "20px",
        margin: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>About React</h2>
      <p>
        React is a JavaScript library used to build fast and interactive user
        interfaces.
      </p>

      <h3>Why React?</h3>
      <ul>
        <li>Reusable Components</li>
        <li>Fast Rendering with Virtual DOM</li>
        <li>Easy to Learn</li>
        <li>Large Community Support</li>
      </ul>
    </div>
  );
}

export default Info;