import React from "react";

const CheckboxGroup = ({ label, name, onChange }) => {
  const options = [
    "Elf (2003)",
    "Home Alone (1990)",
    "The Grinch (1966)",
    "It’s a Wonderful Life (1946)",
    "Die Hard (1988)",
  ];

  return (
    <div className="checkbox-group">
      <label>{label}</label>
      <div className="checkbox-options">
        {options.map((option, index) => (
          <div key={index} className="checkbox-option">
            <input type="checkbox" id={option} name={name} value={option} onChange={onChange} />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;