import Link from "next/link";
import Get_Started_Button from "./Get_Started_Button";
// import Get_Started_Button from "./Get_Started_Button";

// export default function Get_Your_Candidate() {
//   return (
//     <div className="md:max-w-5xl mx-auto md:p-10 p-2 flex flex-col justify-center">
//       <div className="dark:bg-custom-gradient-dark bg-custom-gradient2 text-center items-center ">
//         <div className="container">
//   <div className="relative inline-block">
//     <h2 className="redHat md:p-6 p-2 lg:text-4xl md:text-2xl text-sm font-bold ">
//       Get Your Candidates &nbsp;
//       <span className="bg-clip-text text-transparent bg-custom-gradient">
//         Sorted
//       </span>
//     </h2>
//     <span class="absolute inset-x-10 bottom-0 h-px bg-custom-gradient"></span>
//   </div>

//   <p className="max-w-xs mx-auto md:p-6 p-2 text-xs">
//     Upload your resumes and recive a personal email with an actionable
//     task list.{" "}
//   </p>
//           {/* <Get_Started_Button href = "/"/> */}
//   <div className="bg-custom-gradient md:max-w-fit px-8 max-w-32 h-6 mb-6 mx-auto ">
//   <Link
//     href={'/'}
//   >
//     Get Started
//   </Link>

//   </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Get_Your_Candidate() {
  return (
    <div className="md:max-w-5xl mx-auto md:p-10 p-2 ">
      <div className="dark:bg-custom-gradient-dark bg-custom-gradient2 md:p-20 p-5">
        <div className="text-center md:max-w-md lg:max-w-lg max-w-sm mx-auto">
          <div className="relative inline-block redHat ">
            <h2 className="redHat  lg:text-4xl md:text-2xl text-lg font-bold ">
              Get Your Candidates &nbsp;
              <span className="bg-clip-text text-transparent bg-custom-gradient">
                Sorted
              </span>
            </h2>
            <span class="absolute inset-x-10 bottom-0 h-px bg-custom-gradient"></span>
          </div>
          <div className="poppin items-center flex flex-col">
            <p className="max-w-xs mx-auto md:p-6 p-2 md:max-w-md md:text-lg text-[12px] ">
              Upload your resumes and recive a personal email with an actionable
              task list.{" "}
            </p>
            <Get_Started_Button href="/" text="Get Started" />
          </div>
        </div>
      </div>
    </div>
  );
}
