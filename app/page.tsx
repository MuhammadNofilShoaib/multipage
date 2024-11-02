import Image from "next/image";

export default function Home() {
  return (
  <div>
  <div className=" font-sans grid grid-rows-main mx-5 gap-10 md:grid-cols-2 lg:grid-cols-2 lg:mx-20 xl:flex xl:justify-center xl:gap-56 xl:items-center" style={{paddingTop: "128px", paddingBottom: "50px"}}>
    <div className="text-black grid grid-rows-main gap-2 uppercase xl:w-[400px]">
      <p className="text-5xl font-bold text-black bg-yellow-300 rounded-xl px-3 py-2 xl:py-0 hover:scale-[1.03] duration-200 ease-in-out">nofil shoaib</p>
      <p className="text-2xl text-black bg-cyan-400 rounded-xl px-2 font-semibold py-2 xl:py-0 hover:scale-[1.03] duration-200 ease-in-out">front end developer</p>
      <p className="text-lg py-2 xl:py-0 bg-purple-300 rounded-xl px-2 italic hover:scale-[1.03] duration-200 ease-in-out">As a dedicated front-end developer, I bring designs to life by creating engaging, user-centric interfaces with a focus on seamless functionality and aesthetic appeal. With a strong command of HTML, CSS, and TypeScript, I specialize in crafting responsive and interactive web experiences. Leveraging Next.js and Tailwind CSS</p>
    </div>
    <div className="">
      <Image src="/me1.jpg" alt="Nofil Shoaib" width={400} height={400} className="bg-red-500 rounded-2xl shadow hover:scale-105 duration-200 ease-in-out"></Image>
    </div>
  </div>
</div>
  );
}
