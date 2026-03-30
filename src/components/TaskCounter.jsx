import React from "react";

export const TaskCounter = ({ tasks, deleteCompleteTasks }) => {
  return (
    <div className="flex justify-between gap-19 border-t-2 border-gray-300 w-[340px] pt-[16px]">
      <p className="pl-5 text-gray-400">
        {tasks.filter((t) => t.isCompleted).length} of {tasks.length}
        is complete
      </p>

      {tasks.length > 0 && (
        <button
          onClick={deleteCompleteTasks}
          className="text-red-400 hover:scale-105"
        >
          Clear completed
        </button>
      )}
    </div>
  );
};
export default TaskCounter;
