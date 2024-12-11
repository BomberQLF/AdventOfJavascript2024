import React from "react";

const RadioGroup = ({ label, name, onChange }) => {
  const options = [
    "Dasher",
    "Dancer",
    "Prancer",
    "Vixen",
    "Comet",
    "Cupid",
    "Donner",
    "Blitzen",
    "Rudolph",
  ];

  return (
    <div className="radio-group">
      <label>{label}</label>
      <div className="radio-options">
        {options.map((option, index) => (
          <div key={index} className="radio-option">
            <input type="radio" id={option} name={name} value={option} onChange={onChange} />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
