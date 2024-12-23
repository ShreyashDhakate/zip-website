// product/page.tsx


import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductPage from "@/components/Products";


export default function Home() {
  return (
    <div >
      <Navbar/>
      <ProductPage/>
      <Footer/>
    </div>
  );
}
