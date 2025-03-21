import { useState } from "react";

const TextType = () => {
  const [text, setText] = useState("");

  const reset = () => {
    setText("");
  };
  return (
    <div>
      <h1>3. React Input Handling🎉🎉</h1>
      <input
        type="text"
        value={text}
        placeholder="type something...."
        onChange={(e) => setText(e.target.value)}
      />
      <p>You Typed:{text}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default TextType;
