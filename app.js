import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <h1>Input Mirror </h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Write something..."
      />
      <p className="output">{text ? text : "Your text will appear here..."}</p>
    </div>
  );
}
