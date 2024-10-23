import Collapsible from "./Colapsable_Component";
import Heading_Underline from "./Heading_Underline";

export default function FAQS() {
  return (
    <div className="mt-4">
      <Heading_Underline heading="FAQS" />

      <div className="max-w-2xl mx-auto p-6">
        <Heading_Underline />
        <div className="grid gap-2">
          <Collapsible title="What is Webflow and why is it the best website builder?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Collapsible>

          <Collapsible title="What is your favorite template from BRIX Templates?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Collapsible>
          <Collapsible title="What is your favorite template from BRIX Templates?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Collapsible>

          <Collapsible title="Why is BRIX Templates the best Webflow agency out there?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Collapsible>
        </div>
      </div>
    </div>
  );
}
