import Image from "next/image";
import Circle from "./Circle";
import Get_Started_Button from "./Get_Started_Button";

export default function Hero() {
  return (
    // Main Div
    <div>
      {/* main pannel */}
      <div className=" relative max-w-full mx-auto">
        <div className="  md:grid-cols-2  justify-center items-center grid-row-2 grid">
          {/* left side div */}
          <div className="order-2 md:order-1 px-10 text-center md:text-start">
            <h1 className={`redHat font-light xl:text-6xl md:text-2xl mb-4`}>
              Hire Developers <strong className="font-bold">10x</strong> <br />
              faster with our AI <br />
              <span className="font-extrabold bg-clip-text text-transparent bg-custom-gradient ">
                Automated Solution
              </span>
            </h1>
            <p
              className={`poppin md:text-base text-xs font-light mb-8 md:max-w-sm  xl:text-2xl xl:max-w-4xl `}
            >
              Train it once with your team profiles and it will score applicants
              on your unique scale.
            </p>
            <Get_Started_Button href="/" text="Get Started" />
          </div>
          {/* right side div Image*/}
          <div className="order-1 md:order-2 relative w-full h-auto p-6">
            {/* Light Mode Image */}
            <Image
              className="block dark:hidden" // Hide in dark mode
              src="/dash.png"
              alt="Responsive Image Light"
              layout="responsive"
              width={700}
              height={470}
            />
            {/* Dark Mode Image */}
            <Image
              className="hidden dark:block w-60 h-60" // Show in dark mode
              src="/dark-mode-dash.png"
              alt="Responsive Image Dark"
              layout="responsive"
              width={700}
              height={470}
            />
          </div>
          <div className="absolute opacity-50 inset-0 mt-20">
            <Circle />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
