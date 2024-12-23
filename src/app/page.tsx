// app/page.tsx

import DifferencePage from "@/components/Differnce";
import Features from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Features/>
      <DifferencePage/>
      <Footer/>
    </div>
  );
}
