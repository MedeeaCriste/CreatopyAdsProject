import React from "react";
import {  Link } from "react-router-dom";



export default function Navbar() {
    return (
      <nav className=" flex flex-col lg:p-10 bg-[#1e3a8a] justify-center lg:flex-row lg:justify-between gap-2 items-center">
      <h1 className="text-[#FFFFFF] text-xl lg:text-2xl">
        Cretopy project
      </h1>
     
      </nav>
    );
  }