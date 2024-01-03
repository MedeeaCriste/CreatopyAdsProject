import React from 'react'
export default function TwitterHeaderAd() {
  return (
<div className='flex flex-col justify-center items-center'>
      <h1 className='text-bolt text-4xl p-4 text-[#3730a3]'>Twitter AD (1500x500)</h1>
    <div className="card w-[1500px] h-[500px] bg-base-100 shadow-xl">
  <figure><img className='w-[1500px] h-[250px] object-cover' src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body  p-8 ">
    <h2 className="card-title text-4xl font-bold">
      Shoes!
      <div className="badge badge-secondary text-2xl font-semibold">NEW</div>
    </h2>
    <p className='text-xl'>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion!</div> 
      <div className="badge badge-outline text-xl  text-center w-fit p-2 text-white rounded-md mt-2 bg-[#3730a3]">Buy now!</div>
    </div>
  </div>
</div>
</div>
    )
}
