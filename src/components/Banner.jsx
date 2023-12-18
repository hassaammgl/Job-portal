"use client"

import React from "react";
import Image from "next/image";
import img from "@/assets/line.png";
import card1 from "@/assets/card1.png";
import card2 from "@/assets/card2.webp";
import card3 from "@/assets/card3.webp";
import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";

const Banner = () => {
  const handleClick = () => {
    toast("Coming Soon!");
  };

  return (
    <>
      <div className={`py-10 md:py-20 mx-auto text-center flex flex-col items-center`}>
        <h1 className="text-3xl md:text-5xl text-gray-800 font-extrabold">
          Make your dream career a reality
        </h1>
        <Image src={img} alt="" />
        <h4 className="text-xl md:text-3xl pt-4 md:pt-11 text-gray-800 font-bold">
          Trending on Internshala 🔥
        </h4>
        <div className="flex flex-col md:flex-row justify-center md:justify-between mt-4 md:mt-[40px] w-full md:w-[80%] mx-auto">
          <button className="mx-3 my-2 md:my-0" onClick={handleClick}>
            <Image className="w-full md:w-[55rem]" src={card1} alt="" />
          </button>
          <button className="mx-3 my-2 md:my-0" onClick={handleClick}>
            <Image className="w-full md:w-[55rem]" src={card3} alt="" />
          </button>
          <button className="mx-3 my-2 md:my-0" onClick={handleClick}>
            <Image className="w-full md:w-[55rem]" src={card2} alt="" />
          </button>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Banner;


// import React from "react";
// import Image from "next/image";
// import img from "@/assets/line.png";
// import card1 from "@/assets/card1.png";
// import card2 from "@/assets/card2.webp";
// import card3 from "@/assets/card3.webp";
// import toast, { Toaster } from 'react-hot-toast';
// import Link from "next/link";

// const Banner = () => {
//   const handleClick = () => {
//     toast("Coming Soon!");
//   };

//   return (
//     <>
//       <div className={`py-20 mx-auto text-center flex flex-col items-center`}>
//         <h1 className="text-5xl text-gray-700 font-extrabold">
//           Make your dream career a reality
//         </h1>
//         <Image src={img} alt="" />
//         <h4 className="text-3xl pt-11 text-gray-700 font-bold">
//           Trending on InternShala 🔥
//         </h4>
//         <div className="flex  justify-between mt-[15px] w-[100%]">
//           <button  className="mx-3" onClick={handleClick}>
//             <Image className="h-[16rem] w-[55rem]" src={card1} alt="" />
//           </button>
//           <button className="mx-3" onClick={handleClick}>
//             <Image className="h-[16rem] w-[55rem]" src={card3} alt="" />
//           </button>
//           <button  className="mx-3 my-4"onClick={handleClick}>
//             <Image className="h-[16rem] w-[55rem]" src={card2} alt="" />
//           </button>
//         </div>
//       </div>
//       <Toaster />
//     </>
//   );
// };

// export default Banner;
