import React, { useState } from "react";

function Component({ value, onChange }) {
  const [isActive, toggleActive] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    toggleActive(false);
  };

  return isActive ? (
    <form onSubmit={e => handleSubmit(e)}>
      <textarea
        style={{ fontSize: fontSize, border: "1px solid black" }}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <br />
      <button type="submit">保存</button>
    </form>
  ) : (
    <p
      style={{ fontSize: fontSize, margin: 0 }}
      onClick={() => toggleActive(true)}
    >
      {value}
    </p>
  );
}

const fontSize = 15;

export default Component;
