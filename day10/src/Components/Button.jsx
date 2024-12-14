import React, { useState } from "react";
import Close from "../assets/close.svg";
import Megaphone from "../assets/megaphone.svg";
import Links from "./Links";
import { motion, AnimatePresence } from 'framer-motion';

const Button = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div className="button-container">
      <button
        className="button"
        onClick={() => setButtonClicked(!buttonClicked)}
      >
        <AnimatePresence mode="wait">
          {buttonClicked ? (
            <motion.img
              key="close"
              className="closeOpen"
              src={Close}
              alt="Close Icon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <motion.img
              key="megaphone"
              className="closeOpen"
              src={Megaphone}
              alt="Megaphone Icon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </button>
      {buttonClicked && <Links />}
    </div>
  );
};

export default Button;
