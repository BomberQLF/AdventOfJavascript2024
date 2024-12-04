import React, { useState } from "react";
import TextArea from "./TextArea"; 

const Render = () => {
  // Création d'un useState pour la hauteur du textarea
  const [height, setHeight] = useState(61); 
  const [text, setText] = useState(""); 
  
  // Fonction pour ajuster la hauteur du textarea en fonction du contenu
  const handleInputChange = (e) => {
    setText(e.target.value); 
    e.target.style.height = "inherit"; 
    e.target.style.height = `${e.target.scrollHeight}px`; 
    setHeight(e.target.scrollHeight); 
  };

  return (
    <div>
      <header
        className="App-header"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "470px",
          backgroundColor: "#f1F1F1F1",
          borderRadius: "5px",
          padding: "25px 25px 30px",
        }}
      >
        <TextArea
          text={text} 
          height={height} 
          handleInputChange={handleInputChange} 
        />
      </header>
    </div>
  );
};

export default Render;