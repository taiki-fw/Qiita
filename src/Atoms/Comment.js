import React, { useState } from "react";

function Component({ update, children }) {
  const [comment, setComment] = useState(children);
  const [isActive, toggleActive] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // update(comment);
    toggleActive(false);
  };

  return isActive ? (
    <form onSubmit={e => handleSubmit(e)}>
      <textarea
        style={{ fontSize: fontSize, border: "1px solid black" }}
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <br />
      <button type="submit">保存</button>
    </form>
  ) : (
    <p
      style={{ fontSize: fontSize, margin: 0 }}
      onClick={() => toggleActive(true)}
    >
      {comment}
    </p>
  );
}

const fontSize = 15;

export default Component;
