// product/page.tsx


import ContactUsPage from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <div >
      <Navbar/>
      <ContactUsPage/>
      <Footer/>
    </div>
  );
}
