"use client";
// import { Poppins } from "@next/font/google";
// import Link from "next/link";

// // Define Poppins font
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-poppins", // Add CSS variable
// });

// export default function Nav() {
//   return (
    // <div className={`${poppins.className} `}>
    //   <nav className="flex justify-evenly items-around  my-4 ">
    //     <div className=" text-[#3BAEEB] text-2xl font-bold">Resume Checker</div>

    //       <div className="flex justify-center gap-4 text-base font-normal list-none  items-center text-[#181818] ">
    //         <Link href={"/"}>Home</Link>
    //         <Link href={"/"}>How It Works</Link>
    //         <Link href={"/"}>Features</Link>
    //         <Link href={"/"}>FAQs</Link>
    //       </div>
    //       <div className="flex  gap-2 items-end ">
    //         <Link
    //           href={"/"}
    //           className="border border-[#3BAEEB] text-[#3BAEEB] px-6 py-2  text-base font-bold "
    //         >
    //           Sign In
    //         </Link>
    //         <Link
    //           href={"/"}
    //           className=" px-6 py-2 text-white bg-custom-gradient text-base font-bold border border-custom-gradient"
    //         >
    //           Login
    //         </Link>
    //       </div>

    //   </nav>
//     </div>
//   );
// }

import { Poppins } from "@next/font/google";
// import{Poppins} from "@next/font"
import Link from "next/link";
import { useState } from "react";

// Define Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", // Add CSS variable
});

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${poppins.className} `}>
      <nav className="flex justify-evenly items-around  my-4 lg:flex-row flex-col">
        <div className=" text-[#3BAEEB] text-2xl font-bold">Resume Checker</div>

        <div className="lg:hidden flex justify-center">
          <button
            className="bg-transparent border-none cursor-pointer"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:block flex justify-center gap-4 text-base font-normal list-none  items-center text-[#181818] lg:flex-row flex-col lg:gap-4`}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>How It Works</Link>
          <Link href={"/"}>Features</Link>
          <Link href={"/"}>FAQs</Link>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:block flex  gap-2 items-end lg:flex-row flex-col lg:gap-2 `}
        >
          <Link
            href={"/"}
            className="border border-[#3BAEEB] text-[#3BAEEB] px-6 py-2  text-base font-bold "
          >
            Sign In
          </Link>
          <Link
            href={"/"}
            className=" px-6 py-2 text-white bg-custom-gradient text-base font-bold border border-custom-gradient"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}
