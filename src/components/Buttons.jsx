"use client";
import React, { useState } from "react";
export const Buttons = ({ status, setStatus }) => {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="flex gap-1.5 pr-19">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setStatus(f)}
          className={`h-10 px-4 rounded-md text-sm  ${
            status === f
              ? "bg-blue-500 text-white hover:bg-blue-400 hover:scale-110"
              : "bg-gray-100 text-black hover:bg-gray-50 hover:scale-110"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};
