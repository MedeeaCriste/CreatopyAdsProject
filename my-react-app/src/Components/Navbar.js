import React from "react";
import {  Link } from "react-router-dom";



export default function Navbar() {
    return (
      <nav className=" flex flex-col lg:p-10 bg-[#1e3a8a] justify-center lg:flex-row lg:justify-between gap-2 items-center">
      <h1 className="text-[#FFFFFF] text-xl lg:text-2xl">
        Cretopy project
      </h1>
      <div className=" flex-col lg:flex-row w-fit  sm:flex-row sm:mb-2  text-[#1e3a8a] gap-2  text-center flex lg:gap-8  lg:justify-center lg:items-center ">
        <Link to="/instagram" className="bg-white w-20 p-1 border-[1px] border-black lg:w-24 rounded-md">Instagram</Link>
        <Link to="/twitter" className="bg-white w-20 p-1  border-[1px] border-black lg:w-24 rounded-md">Twitter</Link>
        <Link to="/story" className="mb-[2px] bg-white w-20 p-1 border-[1px] border-black lg:w-24 rounded-md">Story</Link>

      </div>
      </nav>
    );
  }