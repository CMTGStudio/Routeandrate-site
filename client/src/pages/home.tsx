import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import WhoWeHelp from "@/components/WhoWeHelp";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <HowItWorks />
        <WhoWeHelp />
        <WhyWorkWithUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
