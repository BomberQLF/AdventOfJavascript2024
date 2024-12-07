import React, { useState } from "react";
import Textarea from "./Textarea";

const Count = () => {
  const [count, setCount] = useState(0);

  const toggleCount = (event) => {
    const value = event.target.value;
    setCount(value.length);
  };

  return (
    <Textarea
      name="count"
      id="count"
      cols="30"
      rows="10"
      onChange={toggleCount}
      count={count}
    />
  );
};

export default Count;