import React, { useState } from "react";

function Component({ value, onChange }) {
  const [isActive, toggleActive] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    toggleActive(false);
  };

  return (
    <div>
      {isActive ? (
        <form onSubmit={e => handleSubmit(e)}>
          <textarea
            style={{
              fontSize: fontSize,
              border: "1px solid black",
              width: "100%",
              minHeight: "5em"
            }}
            value={value}
            onChange={e => onChange(e.target.value)}
          />
          <br />
          <button
            type="submit"
            style={{
              border: "solid 2px black",
              borderRadius: "3px",
              backgroundColor: "white",
              fontSize: fontSize
            }}
          >
            保存
          </button>
        </form>
      ) : (
        <p
          style={{ fontSize: fontSize, margin: 0 }}
          onClick={() => toggleActive(true)}
        >
          {value}
        </p>
      )}
    </div>
  );
}

const fontSize = 15;

export default Component;
