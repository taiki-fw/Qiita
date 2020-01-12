import React, { useState } from "react";

function Component({ value, onChange }) {
  const [isActive, toggleActive] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    toggleActive(false);
  };

  return isActive ? (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        style={{ fontSize: fontSize }}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <br />
      <button type="submit">保存</button>
    </form>
  ) : (
    <h2
      style={{ fontSize: fontSize, margin: 0 }}
      onClick={() => toggleActive(true)}
    >
      {value}
    </h2>
  );
}

const fontSize = 20;

export default Component;
