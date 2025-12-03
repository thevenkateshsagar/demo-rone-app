import { useState } from "react";

export default function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <label htmlFor="nameInput">Enter your name:</label>
      <input
        id="nameInput"
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name && <p data-testid="displayName">Hello, {name}!</p>}
    </div>
  );
}
