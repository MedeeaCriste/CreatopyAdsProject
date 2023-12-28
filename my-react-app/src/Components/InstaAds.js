import React from 'react'
import SerachBar from './SearchBar'
export default function InstaAds() {
  return (
    <div className='flex flex-col justify-center items-center '>
        <SerachBar/>
    <div className=' border-[1px] mb-5 border-[#1e3a8a] w-[500px] h-[500px] flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
        <div className='flex items-center  flex-col '>
        <h1 className='text-4xl font-semibold text-[#1e3a8a] text-center'>
            Reveal
        </h1>
        <img src='/assets/stars.png'/>
        <p className='text-md font-semibold text-center p-2'>
        Chicken Recipe | <br/>
Grain Free Dry Cat <br/>  Food | Reveal Pet Food
        </p>
        <button>Buy now!</button>
        </div>
       <img src='/assets/photo-ads-1.webp' className='w-[200px]'/>
        </div>
        
        <p className='mt-10 text-center p-1 text-white font-semibold text-md bg-[#1e3a8a] w-[500px]'>Best quality</p>

    </div>
    </div>
  )
}
