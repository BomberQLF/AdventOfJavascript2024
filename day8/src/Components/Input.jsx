import React from "react";

const Input = ({ type, name, id, htmlFor, labelName, tag, onChange }) => {
  return (
    <>
      <label htmlFor={htmlFor}>{labelName}</label>
      <input type={type} name={name} id={id} value={tag} onChange={onChange} />
    </>
  );
};
export default Input;
