import React from 'react'
import SerachBar from './SearchBar'
export default function TwitterHeaderAd() {
  return (
<div className='flex flex-col justify-center items-center '>
        <SerachBar/>
    <div className=' border-[1px] mb-5 border-[#1e3a8a] w-[1500px] h-[500px] flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center gap-20'>
        <div className='flex items-center  flex-col '>
        <h1 className='text-6xl font-semibold text-[#1e3a8a] text-center'>
            Reveal
        </h1>
        <img src='/assets/stars.png'/>
        <p className='text-xl font-semibold text-center p-2'>
        Chicken Recipe | <br/>
Grain Free Dry Cat <br/>  Food | Reveal Pet Food
        </p>
        <button className='text-md bg-[#1e3a8a] p-1 rounded-md text-white w-36 font-semibold mt-10'>Buy now!</button>
        </div>
       <img src='/assets/photo-ads-1.webp' className='w-[200px]'/>
        </div>
        
        <p className='mt-10 text-center p-1 text-white font-semibold text-md bg-[#1e3a8a] w-[1500px]'>Best quality</p>

    </div>
    </div>
    )
}
