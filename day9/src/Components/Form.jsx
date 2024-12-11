import React, { useEffect, useState } from "react";
import TextInput from "./TextInput";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from "./CheckboxGroup";
import SubmitButton from "./SubmitButton";
import { LCPThresholds } from "web-vitals";

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    radio: "",
    checkbox: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked
        ? [...prevData[name], value]
        : prevData[name].filter((item) => item !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("formData");
    console.log("Form envoyé :", formData);
  };

  const local = useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData))
  }, [formData]);

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <TextInput
        id="fullName"
        label="Full Name*"
        name="fullname"
        placeholder="Enter your name"
        value={formData.fullname}
        onChange={handleChange}
      />
      <TextInput
        id="email"
        label="Email Address*"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      <RadioGroup
        label="Favorite Reindeer*"
        name="radio"
        onChange={handleRadioChange}
      />
      <CheckboxGroup
        label="What holiday movies have you watched this year?"
        name="checkbox"
        onChange={handleCheckboxChange}
      />
      <SubmitButton onClick={handleSubmit} />
    </form>
  );
};

export default Form;
