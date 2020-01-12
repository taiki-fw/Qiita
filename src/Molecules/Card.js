import React, { useState } from "react";
import Title from "../Atoms/Title";
import Comment from "../Atoms/Comment";

function Component() {
  const InputForm = initialValue => {
    const [value, setValue] = useState(initialValue);
    return { value, onChange: setValue };
  };

  const title = InputForm("タイトル");
  const comment = InputForm("コメント");

  return (
    <div style={{ border: "1px solid black" }}>
      <Title {...title} />
      <Comment {...comment} />
    </div>
  );
}

export default Component;
