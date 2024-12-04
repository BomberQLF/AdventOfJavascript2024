import React from "react";  
import "./App.css";  
import Render from "./Components/Render";
import { useState } from "react";

function App() {

  return (
    <div className="App">
        <h1 id="day">Day Three</h1>
        <Render />
    </div>
  );
}

export default App;