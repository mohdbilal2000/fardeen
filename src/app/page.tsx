import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedTours from "@/components/FeaturedTours";
import Destinations from "@/components/Destinations";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedTours />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}
