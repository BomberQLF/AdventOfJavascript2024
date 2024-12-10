import React, { useState } from "react";
import Input from "./Input";
import Croix from "../assets/close.svg";

const Tag = () => {
  const [tags, setTags] = useState([]);

  // Function pour formater le TAG avec une virgule
  const formatComa = (event) => {
    const tagValue = event.target.value.trim();
    const length = tagValue.length - 1;

    // Vérifie si la dernière lettre est une virgule
    if (tagValue[length] === ",") {
      const newTag = tagValue.slice(0, -1).trim();
      if (newTag) {
        setTags((prevTags) => [...prevTags, newTag]); // Afin de ne pas modifier le tableau actuel
      }
      event.target.value = "";
    }
  };

  // Function pour supprimer un tag en particulier
  const deleteTag = (key) => {
    // Supprime le tag à l'index correspondant
    setTags((prevTags) => prevTags.filter((_, index) => index !== key));
  };

  return (
    <div className="input-container">
      <Input
        type="text"
        name="tag"
        id="tag"
        onChange={formatComa}
        htmlFor="Tag"
        labelName="Tags"
        placeholder="Enter tags separated by commas"
      />
      <div className="tag-container">
        {tags.map((tag, index) => (
          <div key={index} className="tag-inner" style={{ display: "flex" }}>
            <span style={{ color: "white" }} className="tag-element">
              {tag}
              <img
                onClick={() => deleteTag(index)}
                src={Croix}
                alt="Remove tag"
                style={{ cursor: "pointer" }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tag;
