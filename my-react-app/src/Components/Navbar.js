import React from "react";
export default function Navbar() {
    return (
      <nav className=" flex flex-col lg:p-10 bg-[#1e3a8a] justify-center lg:flex-row lg:justify-between gap-2 items-center">
      <h1 className="text-[#FFFFFF] text-xl lg:text-2xl">
        Cretopy project
      </h1>
      <div className=" flex-col lg:flex-row w-fit  sm:flex-row sm:mb-2  text-[#1e3a8a] gap-2  text-center flex lg:gap-8  lg:justify-center lg:items-center ">
        <a href="" className="bg-white w-20 p-1 border-[1px] border-black lg:w-24 rounded-md">Instagram</a>
        <a href="" className="bg-white w-20 p-1  border-[1px] border-black lg:w-24 rounded-md">Twitter</a>
        <a href="" className="mb-[2px] bg-white w-20 p-1 border-[1px] border-black lg:w-24 rounded-md">Story</a>

      </div>
      </nav>
    );
  }