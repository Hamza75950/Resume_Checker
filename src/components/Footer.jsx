import Image from "next/image";
import Link from "next/link";
import {FacebookIcon, InstaIcon, LinkedInIcon, XIcon, } from "./Icons";
export default function Footer() {
  return (
    <div>
      
      <div className="md:flex-row flex flex-col justify-between   gap-20 p-6 max-w-full mx-auto items-center bg-primary-foreground">
        <div className="md:text-left text-center md:mb-0 mb-6">
          <h1 className="text-[#3BAEEB] lg:text-2xl xl:text-4xl font-bold">Resume Checker</h1>
          <p className="max-w-80 lg:max-w-lg text-xs lg:text-sm  xl:text-base font-light mt-2 md:pr-2 ">
            Upload your resume and let our advanced tools enhance it for you.
            Tailor your resume to fit your dream job effortlessly.
          </p>
        </div>
        <div className="relative grid md:grid-cols-3 grid-rows-3 items-center justify-center">
          <div className="grid grid-cols-4 gap-4 text-center text-xs lg:text-lg mb-4 col-span-2">
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Features</Link>
            <Link href={'#HowItWorks'}>How It Works</Link>
            <Link href="#FAQS">FAQS</Link>
          </div>
          <div className="hidden md:block">

          </div>
          {/* Gradient Line and Icons */}
          <div className="flex items-center justify-between mt-2 col-span-2">
            <span className="block flex-grow h-px bg-custom-gradient"></span>
          </div>
            <div className="lg:col-span-1 col-span-2 dark:invert flex space-x-4 ml-4 justify-evenly items-center">
              <Link className="" href={"/"}>
              <InstaIcon/>

              </Link>
              <Link href={"/"}>
                
                <LinkedInIcon/>
              </Link>
              <Link href={"/"}>
                <FacebookIcon/>
              </Link>
              <Link href={"/"}>
                <XIcon/>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
