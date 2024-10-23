export default function Heading_Underline(props) {
  return (
    <div className="redHat font-bold md:text-xl text-md md:col-span-2 row-span-2 text-center">
      <p className="relative inline-block">
        {props.heading}
        <span class="absolute inset-x-0 bottom-0 h-px bg-custom-gradient"></span>
      </p>
    </div>
  );
}
