"use client";
import { Buttons } from "@/components/Buttons";
import { Input } from "@/components/Input";
import { TasksContainer } from "@/components/ TasksContainer";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { TaskCounter } from "@/components/TaskCounter";
import { EmptyClick } from "@/components/EmptyClick";
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
    if (window.confirm("Are you sure?")) {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
    }
  };
  const emptyClick = () => {
    if (inputValue.trim() === "") {
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
    if (window.confirm("Are you sure?")) {
      const activeTasks = tasks.filter((task) => !task.isCompleted);
      setTasks(activeTasks);
    }
  };

  return (
    <div className="w-full h-screen flex  flex-col items-center gap-[60] bg-white justify-center">
      <div className="text-black w-[400px] h-fit flex flex-col bg-white  items-center shadow-2xl gap-5 justify-center hover:scale-102 rounded-md">
        <h1 className="text-[25px] font-serif pt-6 font-bold ">To-Do list</h1>
        <div className="flex gap-1.5">
          <Input
            inputValue={inputValue}
            setInputValue={setInputValue}
            className="border border-gray-200 pr-[70px] rounded-[6px]
            "
            placeholder="Add a new task..."
          />
          <EmptyClick emptyClick={emptyClick} />
        </div>
        <Buttons status={status} setStatus={setStatus} />
        <TasksContainer
          filteredTasks={filteredTasks}
          handleDelete={handleDelete}
          toggleComplete={toggleComplete}
        />
        {tasks.length === 0 && (
          <div className="text-gray-400 flex">
            <p>No task yet.Add one above.</p>
          </div>
        )}
        <TaskCounter tasks={tasks} deleteCompleteTasks={deleteCompleteTasks} />
        <Footer />
      </div>
    </div>
  );
}
