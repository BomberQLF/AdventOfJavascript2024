import React from "react";

const SubmitButton = ({ onclick }) => {
  return (
    <div className="submit-button">
      <button type="submit" onClick={onclick}>Submit</button>
    </div>
  );
};

export default SubmitButton;