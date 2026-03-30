import React from "react";

export const EmptyClick = ({ emptyClick }) => {
  return (
    <button
      onClick={emptyClick}
      className="h-10 bg-blue-500 p-4 text-white justify-center flex items-center rounded-[6px] hover:bg-blue-400 hover:scale-110"
    >
      Add
    </button>
  );
};
