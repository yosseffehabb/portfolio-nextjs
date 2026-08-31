import AboutMe from "@/components/Aboutme";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import MyProjectsV2 from "@/components/MyProjectsV2";

import Tech from "@/components/Tech";
import { ContactModalWrapper } from "@/components/ContactModalWrapper";

function page() {
  return (
    <ContactModalWrapper>
      <div>
        <Hero />
        <AboutMe />
        <Tech />
        <MyProjectsV2 />
        <Cta />
        <Footer />
      </div>
    </ContactModalWrapper>
  );
}

export default page;
