import { Buttons } from "@/components/Buttons";

export default function Home() {
  return (
    <div className="w-full h-screen flex pb-[594px] flex-col items-center gap-[60] bg-yellow-50 justify-center">
      <div className="text-black w-[400px] h-[350px] flex flex-col bg-white  items-center shadow-2xl gap-5 justify-center ">
        <h1 className="text-[20px] font-serif pt-6 ">To-Do list</h1>
        <div className="flex gap-1.5">
          <input
            className="border border-gray-500 pr-[70px] rounded-[6px]
            "
            placeholder="Add a new task..."
          />
          <button className="h-10 bg-blue-500 p-4 text-white justify-center flex items-center rounded-[6px]">
            Add
          </button>
        </div>
        <Buttons />
        <div className="text-gray-400 text-[14px] pt-8">
          <p>No tasks yet. Add one above!</p>
        </div>
        <div className="flex pt-10 pb-6 text-[12px]">
          <p>Powered by</p>
          <a className="text-blue-500">Pinecone Academy</a>
        </div>
      </div>
    </div>
  );
}
