import React from "react";

const Input = ({ type, name, id, value, onchange }) => {
    return (
        <div className="input-container">
            <input type={type} name={name} id={id} value={value} onChange={onchange} />
        </div>
    )
}

export default Input;