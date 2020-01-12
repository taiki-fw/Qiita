import React, { useState } from "react";

function Component({ update, children }) {
  const [title, setTitle] = useState(children);
  const [isActive, toggleActive] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // update(title);
    toggleActive(false);
  };

  return isActive ? (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        style={{ fontSize: fontSize }}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <button type="submit">保存</button>
    </form>
  ) : (
    <h2
      style={{ fontSize: fontSize, margin: 0 }}
      onClick={() => toggleActive(true)}
    >
      {title}
    </h2>
  );
}

const fontSize = 20;

export default Component;
