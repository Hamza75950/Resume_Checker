import FAQS from "@/components/FAQS";
import Footer from "@/components/Footer";
import Get_Your_Candidate from "@/components/Get_Your_Candidate";
import Hero from "@/components/Hero";
import How_It_Work from "@/components/How_It_Work";
import Nav from "@/components/Nav";
import Waitlist from "@/components/Waitlist";

export default function Home() {
  return (
    <div className="">
      {/* Nav component */}
      <Nav />
      {/* Hero component */}
      {/* button fix left */}
      <Hero />

      {/* How_It_Work component */}
      <section id="HowItWorks">
        <How_It_Work />
      </section>

      {/* Get_Your_Candidate component */}
      <section id="GetYourCandidate">
        <Get_Your_Candidate />
      </section>

      <Waitlist />

      <section id="FAQS">
        <FAQS />
      </section>

      <Footer />
    </div>
  );
}
