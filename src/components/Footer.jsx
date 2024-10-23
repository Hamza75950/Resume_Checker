// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <div>
//       <div className="flex justify-between p-6 max-w-2xl mx-auto bg-custom-gradient2">
//         <div className="">
//           <h1>Resume Checker</h1>
//           <p className="max-w-xs">
//             Upload your resume and let our advanced tools enhance it for you.
//             Tailor your resume to fit your dream job effortlessly.
//           </p>
//         </div>
//         <div>
//           <div className="relative inline-block ">
//             <div className="grid grid-cols-4 gap-1 text-center text-xs mb-10">
//               <a>Home</a>
//               <a>Features</a>
//               <a>How It Works</a>
//               <a>FAQS</a>
//             </div>
//             <div className="grid grid-cols-4 gap-1 ">
//               <span class="order-1 absolute inset-x-5 bottom-0 h-px bg-custom-gradient"></span>
//               <Link href={"/"} className="order-2">
//                 <Image src={"/instagram-icon.png"} width={10} height={10} />
//               </Link>
//               <Link href={"/"}>
//                 <Image src={"/instagram-icon.png"} width={10} height={10} />
//               </Link>
//             </div>
//           </div>

//           <div></div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="md:flex-row flex flex-col justify-between gap-20 p-6 max-w-2xl mx-auto items-center bg-primary-foreground">
        <div className="md:text-left text-center md:mb-0 mb-6">
          <h1 className="text-[#3BAEEB] font-bold">Resume Checker</h1>
          <p className="max-w-80 text-xs font-light mt-2 md:pr-2 ">
            Upload your resume and let our advanced tools enhance it for you.
            Tailor your resume to fit your dream job effortlessly.
          </p>
        </div>
        <div className="relative grid md:grid-cols-3 grid-rows-3 items-center justify-center">
          <div className="grid grid-cols-4 gap-4 text-center text-xs mb-4 col-span-2">
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
            <div className="md:col-span-1 col-span-2 dark:invert flex space-x-4 ml-4 justify-evenly items-center">
              <Link href={"/"}>
                <Image
                  src={"/instagram-icon.png"}
                  width={15}
                  height={15}
                  alt="Instagram"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={"/linkin.png"}
                  width={25}
                  height={25}
                  alt="LinkedIn"
                />
              </Link>
              <Link href={"/"}>
                <Image
                
                  src={"/facebook.png"}
                  width={8}
                  height={8}
                  alt="Facebook"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={"/twitter.png"}
                  width={15}
                  height={15}
                  alt="Twitter"
                />
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
