"use client";
import Menu from "@/icons/Menu";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { useState } from "react";

export default function Nav2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClasses = (route) => {};

  return (
    <nav className={`poppin shadow-lg mx-auto my-4  dark:bg-background `}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* LOGO */}
        <div className=" lg:hidden text-[#3BAEEB] lg:text-2xl text-base font-bold">
          Resume Checker
        </div>

        {/* Links Section (Visible in Medium and Larger Screens) */}

        <div className="lg:flex hidden text-[#3BAEEB] text-2xl font-bold">
          Resume Checker
        </div>

        <div className=" hidden  lg:flex md:justify-center gap-4 text-base font-normal list-none lg:items-center dark:text-white text-[#181818] ">
          <Link href={"/"}>Home</Link>
          <Link href={"#HowItWorks"}>How It Works</Link>
          <Link href={"GetYourCandidate"}>Features</Link>
          <Link href={"#FAQS"}>FAQs</Link>
        </div>
        <div className="hidden lg:flex  gap-2 items-end mb-2 ">
          <ModeToggle />
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

        <div className="flex gap-2 items-center lg:hidden mb-2">
          {/* Dark mode icon */}
          <ModeToggle />
          {/* Hamburger Menu Button */}
          <div>
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              <Menu width="30px" height="30px" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu (Visible if toggled) */}
      {isOpen && (
        <div className="dark:bg-background  lg:hidden flex justify-center bg-white p-4 mt-2 font-medium rounded-lg">
          <div className="dark:text-white flex items-center flex-col gap-4  text-black">
            <Link href="/" className={getLinkClasses("/")}>
              Home
            </Link>
            <Link href="/blog" className={getLinkClasses("/blog")}>
              How It Works
            </Link>
            <Link href="/about" className={getLinkClasses("/about")}>
              Features
            </Link>
            <Link href="/addBlog" className={getLinkClasses("/addBlog")}>
              FAQs
            </Link>
            <Link
              href={"/"}
              className="border border-[#3BAEEB] text-[#3BAEEB] px-6 py-2  text-base "
            >
              Sign In
            </Link>
            <Link
              href={"/"}
              className=" px-7 py-2 text-white bg-custom-gradient text-base  border border-custom-gradient"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
