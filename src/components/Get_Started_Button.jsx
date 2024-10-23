import Link from "next/link";
export default function Get_Started_Button(props) {
  return (
    <Link
      href={props.href}
      className=" text-white bg-custom-gradient md:text-base text-xs md:px-10 md:py-3 px-4 py-2  border border-custom-gradient"
    >
      {props.text}
    </Link>
  );
}
