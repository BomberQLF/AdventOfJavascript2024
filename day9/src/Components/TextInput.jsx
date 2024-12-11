const TextInput = ({ label, name, placeholder, value, onChange, id }) => (
  <div className="text-input">
    <label>
      {label}
      <input
      id={id}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);
export default TextInput;
