import React, { useEffect, useState } from "react";
import Input from "./Input";
import Clipboard from "./Clipboard";
import Check from "./Check";

const Copy = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipInfo, setTooltipInfo] = useState("Copy");
  const [showClip, setShowClip] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const toggleCheck = async () => {
    try {
      if (inputValue.trim() === "") {
        setTooltipInfo("Nothing to copy");
        setShowTooltip(true);
        return;
      }

      await navigator.clipboard.writeText(inputValue);
      setTooltipInfo("Copied!");
      setShowClip(false);
      setShowTooltip(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setTooltipInfo("Failed to copy");
      setShowTooltip(true);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (showTooltip) {
      const timeout = setTimeout(() => {
        setShowTooltip(false);
        setTooltipInfo("Copy");
        setShowClip(true);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showTooltip]);

  return (
    <div>
      <div className="copy">
        <input
          name="input"
          id="input"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something to copy"
        />
        {showClip && (
          <button className="clipboard" onClick={toggleCheck}>
            {showClip && <Clipboard/>}
          </button>
        )}
        {!showClip && <Check className="check" />}
      </div>
      {showTooltip && <div id="tooltip">{tooltipInfo}</div>}
    </div>
  );
};

export default Copy;
