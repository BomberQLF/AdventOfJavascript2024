import React from "react";

const Input = ({ htmlFor, name, type, id, value, onChange }) => {
    return (
        <>
        <label htmlFor={htmlFor}>{value}</label>
        <input type={type} name={name} id={id} onChange={onChange} />
        </>
    )
}

export default Input;