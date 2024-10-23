import Image from "next/image";

export default function Card() 
{
    return(
        <div className="lg:max-w-3xl max-w-xl  bg-cyan-400">
            {/* Grid  */}
            <div className="grid-cols-2">
                {/* Left Side Image */}
                <div className="relative">
                    <Image src='/CV-image.png'
                className="block "                     
              alt="Responsive Image Light"
              layout="responsive"
              width={100}
              height={100}
              ></Image>
                </div>
                {/* Right Side */}
                <div>

                </div>
            </div>
        </div>
    )
}