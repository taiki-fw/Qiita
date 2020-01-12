import React, { useState, useRef, useEffect } from "react";

function Component({ value, onChange }) {
  const [isActive, toggleActive] = useState(false);
  const inputForm = useRef(null);

  useEffect(() => {
    if (isActive) inputForm.current.focus();
  }, [isActive]);

  const handleSubmit = e => {
    e.preventDefault();
    toggleActive(false);
  };

  return (
    <div style={{ marginBottom: "1em" }}>
      {isActive ? (
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            ref={inputForm}
            style={{ fontSize: fontSize, width: "100%" }}
            value={value}
            onChange={e => onChange(e.target.value)}
          />
        </form>
      ) : (
        <h2
          style={{ fontSize: fontSize, margin: 0 }}
          onClick={() => toggleActive(true)}
        >
          {value}
        </h2>
      )}
    </div>
  );
}

const fontSize = 20;

export default Component;
