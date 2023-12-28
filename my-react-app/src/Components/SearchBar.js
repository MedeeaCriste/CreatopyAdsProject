import React from "react";

export default function SerachBar() {
    return (
        <section>
            <div>
                <h1 className="text-center font-semibold text-[#3730a3] p-8 text-4xl">Create your Ad</h1>
                <div className="flex  justify-center items-center gap-4 p-8">
                <input type="text"  placeholder="Enter an ad name" className="p-2  w-[600px] border-[1px] rounded-md border-[#3730a3]"/>
                <button className="bg-[#3730a3] text-white p-2 w-20 rounded-md">Search</button>
            
                </div>
                </div>

        </section>

    )}