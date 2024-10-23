import Image from "next/image";
export default function Arrow() {
    return(
        <Image
              src="/Arrow.png"
              alt="CV Image"
              width={450}
              height={530}
            ></Image>

        )
}

export function Arrow2() {
    return(
        <div>
            <Image
              src="/Arrow-2.png"
              alt="CV Image"
              width={450}
              height={530}
            ></Image>
        </div>
    )
}