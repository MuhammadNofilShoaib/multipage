import React from 'react'

function about() {
  return (
    <div>
       <div className='text-black grid grid-rows-two gap-4 mx-5 text-center font-sans uppercase lg:mx-[100px] xl:mx-[200px]' style={{paddingTop: "120px", paddingBottom: "20px"}}>
      <div className='text-4xl font-bold p-5 text bg-yellow-300 rounded-xl hover:scale-[1.03] duration-200 ease-in-out'>about me🔥</div>
      <div className='text-lg font-normal bg-lime-300 rounded-xl px-2 py-2 italic hover:scale-[1.03] duration-200 ease-in-out' style={{paddingBottom: "30px"}}>Nofil Shoaib is a front-end developer with a passion for crafting visually appealing and highly engaging web experiences. With a solid foundation in HTML, CSS, and TypeScript, he brings creativity and technical expertise to every project. Nofil is adept at building dynamic user interfaces in Next.js and has experience with server-side rendering (SSR), client-side rendering (CSR), incremental static regeneration (ISR), and static site generation (SSG). His recent work includes a custom resume builder and a polished portfolio website hosted on Vercel. Known for his commitment to detail and a friendly, client-focused approach, Nofil is ready to bring clients’ visions to life with skill and style.</div>   
    </div>
    </div>
  )
}

export default about
