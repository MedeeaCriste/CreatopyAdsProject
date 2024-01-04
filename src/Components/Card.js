import React from "react";
export default function Card({title, description, w, h, img}) {
  return (
    <div className={`card w-[${w}px] h-[${h}px] bg-base-100 relative shadow-xl`}>
      {img}
      <div className="card-body p-4 absolute bottom-0 z-10 w-full">
        <h2 className="card-title text-3xl font-bold">
          {title}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline text-center w-fit p-1 px-2 text-white rounded-md mt-2 bg-[#3730a3]">
            Buy now!
          </div>
        </div>
      </div>
    </div>
  );
}
