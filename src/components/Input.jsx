"use client";
import React from "react";

export const Input = ({ setInputValue, inputValue }) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      placeholder="Add a new task..."
      value={inputValue}
      onChange={handleChange}
      type="text"
      className="border border-[#71717A] w-8/10 h-10 pr-17  rounded-md"
    />
  );
};
