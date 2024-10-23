import Image from "next/image";
import Circle from "./Circle";
import Arrow, { Arrow2 } from "./Arrow";

import Heading_Underline from "./Heading_Underline";


export default function How_It_Work() {
  return (
    // main div
   
       
    <div className=" gap-6 max-w-full mx-auto mt-8 p-6 md:grid-cols-2 justify-center items-center grid-row-2 grid">
          {/* Grid Start */}
          <Heading_Underline heading = 'How It Works'/>
          {/* 1st card Start*/}
          {/*1st Row Left Side Image Start */}
          <div className="flex justify-center">
            <Image
              src="/CV-image4.png"
              alt="CV Image"
              width={950}
              height={950}
            ></Image>
            {/* <div className="absolute ">
                <Link href={"/"}>Resume</Link>
            </div> */}
            {/* <div>
            <Link href={"/"}>Resume</Link>
            </div> */}
          </div>

          {/*1st Row Left Side Image End */}
          {/*1st Right Side start*/}
          <div className="poppins grid grid-rows-subgrid col-span-1  items-center md:text-justify text-center">
              {/* Arrow */}
              <div className="md:w-20 md:h-20 xl:w-40 xl:h-40  w-16 h-16 mb-2 rotate-90 md:-mt-80 -mt-28 md:-rotate-12  ">
                <Arrow />
              </div>
            <div className=" xl:max-w-2xl md:max-w-md">
              <h2 className="md:text-2xl xl:text-4xl  bg-clip-text text-transparent bg-custom-gradient font-bold">
                STEP 01
              </h2>
              <p className="md:text-3xl xl:text-5xl text-xl poppins py-2">
                Upload Your Resume
              </p>
              <p className="text-xs md:text-lg font-normal">
                Easily drag and drop your resume into our upload box or select a
                file from your computer. We accept PDF and DOCX formats with a
                maximum file size of 2MB.
              </p>
            </div>
          </div>
          {/*1st Right Side End*/}
          {/* 1st card End */}

          {/* 2nd card Start */}
          {/*2nd Row Left Side Image Start */}
          <div className=" md:order-4  ">
            <Image
              src="/CV-image-2.png"
              className=""
              alt="CV Image"
              width={950}
              height={950}
            ></Image>
          </div>
          {/*2nd Row Left Side Image Start */}

          {/*2nd row Right Side start */}
          <div className="relative md:order-3 poppins grid grid-rows-subgrid col-span-1 justify-center items-center md:text-justify text-center">
            
            <div className="xl:max-w-2xl md:max-w-md">
              {/* Circle */}
              <div className="ml-10 opacity-50 absolute inset-0">
                <Circle />
              </div>
              <div>

              </div>
              <h2 className="md:text-2xl xl:text-4xl  bg-clip-text text-transparent bg-custom-gradient font-bold">
                STEP 02
              </h2>
              <div className="flex md:flex-row flex-col justify-between">
                <p className="md:text-3xl text-xl order-1 xl:text-5xl poppins py-2 ">
                    Automatic Analysis
                </p>
                    <div className="md:order-2 md:rotate-0 md:w-20 md:h-20   w-16 h-16 -rotate-45 ">
                    <Arrow2/>
                </div>

              </div>
              <p className="text-xs md:text-lg font-normal">
                Easily drag and drop your resume into our upload box or select a
                file from your computer. We accept PDF and DOCX formats with a
                maximum file size of 2MB.
              </p>
            </div>
          </div>
          {/*2nd row Right Side end */}
          {/* 2nd card End */}

          {/* 3rd card Start*/}
          {/*3rd Row Left Side Image Start */}
          <div className="flex justify-center order-5">
            <Image
              src="/CV-image-3.png"
              className=""
              alt="CV Image"
              width={950}
              height={950}
            ></Image>
          </div>
          {/*3rd Row Left Side Image End */}
          {/*3rd Right Side start*/}
          <div className="order-6 poppins grid grid-rows-subgrid col-span-1 xl:justify-start justify-center items-center md:text-justify text-center">
            <div className="xl:max-w-2xl md:max-w-md">
              <h2 className="md:text-2xl xl:text-4xl  bg-clip-text text-transparent bg-custom-gradient font-bold">
                STEP 03
              </h2>
              <p className="md:text-3xl text-xl order-1 xl:text-5xl poppins py-2">
                Detailed Feedback
              </p>
              <p className="text-xs md:text-lg font-normal">
                Ensure consistent formatting with clear headers and bullet
                points. Keep content concise, focus on achievements, and use
                relevant keywords. Proofread for errors and use action verbs.
                Aim for a professional and polished look that&apos;s easy to read.
              </p>
            </div>
          </div>
          {/*3rd Right Side End*/}
          {/* 3rd card End */}
      {/* Grid End */}
        </div>
      
    
  );
}

// {/* Arrow Image */}
// <div className="">
//             <Image
//                 className="rotate-90 my-2 lg:rotate-0 w-12 h-12 lg:w-24 lg:h-24 "
//                 src="/Arrow.png"
//                 alt="Arrow Image"
//                 width={100}
//                 height={100}
//               ></Image>
//             </div>
