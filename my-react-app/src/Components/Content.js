import React from "react";
export default function Content() {
    return (
     < section className="lg:p-10 flex flex-col lg:flex-row justify-center items-center">
     <div className="">
        <h1 className="lg:text-6xl lg:font-semibold text-2xl mt-4">
        Welcome to my app!
        </h1>
        <h2 className="text-xl lg:text-2xl lg:font-semibold text-[#1D4ED8] lg:mt-14 mt-4">
        Let's style your own advertisement together!
        </h2>
        <h3 className=" text-lg lg:text-xl text-[#10B981] lg:mt-4 mt-2">
        Select a template and generate a banner:
        </h3>
        <div className="flex lg:items-center lg:gap-6 gap-4 text-center mt-2 lg:mt-4">
            <a href="" className="bg-[#FACC15] border-[1px] w-[100px] border-black p-1 lg:text-lg rounded-md">Instagram</a>
            <a href="" className="bg-[#FACC15] border-[1px] w-[100px] border-black p-1 lg:text-lg rounded-md">Twitter</a>
            <a href="" className="bg-[#FACC15] border-[1px] w-[100px]  border-black p-1 lg:text-lg rounded-md">Story</a>
        </div>
     </div>

     <img className=" lg:w-[500px] w-[300px] mt-6" src="/assets/ads-img.png" alt=""/>

     </section>
    );
  }