"use client";
import { Buttons } from "@/components/Buttons";
import { Input } from "@/components/Input";
import { useState } from "react";
export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState("All");
  const handleClick = () => {
    const newTask = {
      taskName: inputValue,
      isCompleted: false,
      id: Date.now(),
    };
    setTasks([newTask, ...tasks]);
    setInputValue("");
  };
  const handleDelete = (index) => {
    if (window.confirm("are you sure?")) {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
    }
  };
  const emptyClick = () => {
    if (!inputValue.trim() === "") {
      return;
    }
    handleClick("");
  };
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };
  const filteredTasks = tasks.filter((task) => {
    if (status === "Active") return !task.isCompleted;
    if (status === "Completed") return task.isCompleted;
    return true;
  });
  const deleteCompleteTasks = () => {
    if (window.confirm("are you sure?")) {
      const activeTasks = tasks.filter((task) => !task.isCompleted);
      setTasks(activeTasks);
    }
  };

  return (
    <div className="w-full h-screen flex  flex-col items-center gap-[60] bg-white justify-center">
      <div className="text-black w-[400px] h-fit flex flex-col bg-white  items-center shadow-2xl gap-5 justify-center hover:scale-102 rounded-md">
        <h1 className="text-[20px] font-serif pt-6 ">To-Do list</h1>
        <div className="flex gap-1.5">
          <Input
            inputValue={inputValue}
            setInputValue={setInputValue}
            className="border border-gray-200 pr-[70px] rounded-[6px]
            "
            placeholder="Add a new task..."
          />
          <button
            onClick={emptyClick}
            className="h-10 bg-blue-500 p-4 text-white justify-center flex items-center rounded-[6px] hover:bg-blue-400 hover:scale-110"
          >
            Add
          </button>
        </div>
        <Buttons status={status} setStatus={setStatus} />
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
        {tasks.length === 0 && (
          <div className="text-gray-500 flex">
            <p>No task yet.Add one above.</p>
          </div>
        )}

        <div className="flex justify-between gap-19 border-t-2 border-gray-300 w-[340px] pt-[16px]">
          <p className="pl-5 text-gray-500">
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

        <div className="flex pt-10 pb-6 text-[12px] gap-1">
          <p>Powered by</p>
          <a href="https://pinecone.mn/" className="text-blue-500">
            Pinecone Academy
          </a>
        </div>
      </div>
    </div>
  );
}
