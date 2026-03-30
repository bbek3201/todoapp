import React from "react";

export const TasksContainer = ({
  filteredTasks,
  toggleComplete,
  handleDelete,
}) => {
  return (
    <div>
      <div className=" w-[300px]  flex flex-col gap-2.5">
        {filteredTasks.map((task, index) => {
          return (
            <div
              key={task.id || index}
              className="flex justify-between
               items-center bg-slate-100 p-3 rounded-md hover:scale-102"
            >
              <div
                className="flex
                 gap-1.5 hover:scale-110"
              >
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => {
                    toggleComplete(task.id);
                  }}
                />
                <p>{task.taskName}</p>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-400 w-15 h-10 bg-red-100 border rounded-2xl hover:scale-110"
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
