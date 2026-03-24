import React from "react";
export const Buttons = () => {
  return (
    <div className="flex gap-1.5 pr-19">
      {["All", "Active", "Completed"].map((filter) => (
        <button
          key={filter}
          className={`h-10 px-4 rounded-md text-sm ${
            filter === "All"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-black"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
