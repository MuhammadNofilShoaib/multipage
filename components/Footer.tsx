import React from 'react'
import Image from "next/image";


function Footer() {
  return (
   <div id='footer' className='z-40 bg-black text-center text-2xl uppercase font-bold px-4 py-8 grid grid-rows-2 gap-0 lg:absolute xl:absolute bottom-0 w-full'>
    <div className='items-center'>lets connect❤️</div>
   <div className='flex justify-center gap-5 overflow-hidden'>
    <Image src="/ig.png" alt="nofil shoaib" width={300} height={300} className="w-14 rounded-full border hover:scale-105 duration-200" ></Image>
    <Image src="/li.png" alt="nofil shoaib" width={300} height={300} className="w-14 rounded-full border hover:scale-105 duration-200" ></Image>
    <Image src="/yt.png" alt="nofil shoaib" width={300} height={300} className="w-14 rounded-full border hover:scale-105 duration-200" ></Image>
    <Image src="/gh.png" alt="nofil shoaib" width={300} height={300} className="w-14 rounded-full border hover:scale-105 duration-200" ></Image>
   </div>
   </div>
  )
}

export default Footer
