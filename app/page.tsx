import AboutMe from "@/components/Aboutme";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MyProjects from "@/components/MyProjects";
import Tech from "@/components/Tech";
import { ContactModalWrapper } from "@/components/ContactModalWrapper";

function page() {
  return (
    <ContactModalWrapper>
      <div>
        <Header />
        <Hero />
        <AboutMe />
        <Tech />
        <MyProjects />
        <Cta />
        <Footer />
      </div>
    </ContactModalWrapper>
  );
}

export default page;
