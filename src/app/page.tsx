import Contact from "@/components/custom/Contact";
import Features from "@/components/custom/Features";
import Footer from "@/components/custom/Footer";
import HeroCarousel from "@/components/custom/HeroCarousel";
import Navbar from "@/components/custom/Navbar";
import SpecialOfferAlert from "@/components/custom/SpecialOfferAlert";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SpecialOfferAlert />
      <div className="w-full xl:w-3/4 px-6 xl:px-0 flex flex-col items-center space-y-10 my-10">
        <Navbar />
        <HeroCarousel />
        <Features />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
