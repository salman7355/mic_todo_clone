import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Add = () => {
  return (
    <div className="z-20">
      <div className="flex  gap-4 items-center bg-blue-950 border-none p-2 rounded-md  text-white">
        <AiOutlinePlus />
        <input
          type="text"
          placeholder="Add a task"
          className="bg-transparent focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Add;
