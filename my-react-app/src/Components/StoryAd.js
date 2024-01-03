import React from 'react'
export default function StoryAd() {
  return (<div className='flex flex-col justify-center items-center'>
  <h1 className='text-bolt text-4xl p-4 text-[#3730a3]'>Story AD (1080x1920)</h1>
<div className="card w-[1080px] flex flex-col justify-center items-center h-[1920px] mb-7  bg-base-100 shadow-xl">
<figure><img  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
<div className="card-body p-4 ">
<h2 className="card-title text-8xl font-bold mb-4">
  Shoes!
  <div className="badge badge-secondary text-6xl font-semibold">NEW</div>
</h2>
<p className='text-3xl'>If a dog chews shoes whose shoes does he choose?</p>
<div className="card-actions justify-end">
  <div  className="badge badge-outline text-2xl">Fashion!</div> 
  <div className="badge badge-outline text-center text-3xl w-fit p-4 text-white rounded-md mt-4 bg-[#3730a3]">Buy now!</div>
</div>
</div>
</div>
</div>  )
}
