import { ArrowBigUp } from "lucide-react";
import React from "react";

export default function Dashbard() {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 justify-center items-center">
        <div className="box w-[300px] h-[200px] bg-red-500 flex  items-center justify-center rounded-lg">
          <h1 className="text-white text-2xl font-bold">
            Users <span className="text-sm text-gray-300">100</span>
          </h1>
          <div className="flex items-center justify-center">
            <ArrowBigUp fill="white" className="size-10 text-3xl " />
          </div>
        </div>
        <div className="box w-[300px] h-[200px] bg-green-500 flex  items-center justify-center rounded-lg">
          <h1 className="text-white text-2xl font-bold">
            Products
            <span className="text-sm text-gray-300">100 </span>
          </h1>
          <div className="flex items-center justify-center">
            <ArrowBigUp fill="white" className="size-10 text-3xl " />
          </div>
        </div>
        <div className="box w-[300px] h-[200px] bg-blue-500 flex  items-center justify-center rounded-lg">
          <h1 className="text-white text-2xl font-bold">
            Orders <span className="text-sm text-gray-300">100</span>
          </h1>
          <div className="flex items-center justify-center">
            <ArrowBigUp fill="white" className="size-10 text-3xl " />
          </div>
        </div>
      </div>
    </>
  );
}
