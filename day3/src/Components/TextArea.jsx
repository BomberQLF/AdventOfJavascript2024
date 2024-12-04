import React from "react";

// Composant TextArea avec les props height, text et handleInputChange
const TextArea = ({ text, height, handleInputChange }) => {
  return (
    <textarea
      value={text} 
      onChange={handleInputChange}
      style={{
        width: "95%",
        padding: "15px",
        borderRadius: "5px",
        outline: "none",
        resize: "none",
        overflow: "hidden", 
        height: `${height}px`,
      }}
      placeholder="Resizable text area"
    />
  );
};

export default TextArea;