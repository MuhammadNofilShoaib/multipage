import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='z-50 uppercase bg-black md:sm:flex md:sm:px-20 md:sm:justify-center md:lg:gap-[200px] md:2xl:gap-[780px] fixed w-full'>
        <div className='text-center font-bold text-3xl p-3 font-serif md:sm:text-5xl md:sm:px-10'>nofil.</div>
      <div className='flex justify-center font-medium font-sans gap-1 p-2 md:sm:items-center md:sm:gap-8 md:sm:px-10 md:sm:text-xl'>
        <Link href="/"><p className='hover:bg-gray-800 hover:translate-y-[2px] rounded-lg duration-200 p-2'>home</p></Link>
        <Link href="/about"><p className='hover:bg-gray-800 hover:translate-y-[2px] rounded-lg duration-200 p-2'>about</p></Link>
        <Link href="/services"><p className='hover:bg-gray-800 hover:translate-y-[2px] rounded-lg duration-200 p-2'>services</p></Link>
        <Link href="#footer"><p className='hover:bg-gray-800 hover:translate-y-[2px] rounded-lg duration-200 p-2'>contact</p></Link>
      </div>
    </div>
  )
}

export default Header
