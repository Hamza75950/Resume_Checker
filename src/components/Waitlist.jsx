import Link from "next/link";
import Heading_Underline from "./Heading_Underline";
import Get_Started_Button from "./Get_Started_Button";
export default function Waitlist() {
  return (
    <div className="p-5">
      <div className="md:max-w-md mx-auto mb-2">
        <Heading_Underline heading="Join Our Waitlist Today" />
        <p className="poppin mt-4 text-sm text-gray-400 text-center ">
          Sign up for our waitlist to be the first to access our resume grading
          services. Don&apos;t miss out—secure your spot today!
        </p>
      </div>
      <div className="poppin text-sm border rounded-sm max-w-xl md:p-10 p-5 mx-auto">
        <form
          action=""
          className="grid md:grid-cols-2 gap-2 md:text-md  text-xs "
        >
          <input
            type="text"
            className="border  p-2 rounded-full "
            value="First Name"
          />
          <input
            type="text"
            className="border p-2 rounded-full"
            value="Last Name"
          />
          <input
            type="email"
            required
            className="border p-2 rounded-full"
            value="your@gmail.com"
          />
          <input
            type="phone"
            required
            className="border p-2 rounded-full"
            value="Phone Number"
          />
        </form>
      </div>
      <div className="flex justify-center items-start md:my-4 my-2">
        <Get_Started_Button href={"/"} text={"Submit"} />
      </div>
    </div>
  );
}
