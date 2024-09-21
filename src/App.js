import React from "react";
import TshirtImage from "./assets/tshirt.png"; // placeholder for your t-shirt image
import GirlImage from "./assets/girl-pointing.png"; // image of girl pointing
import GifAnimation from "./components/GifAnimation";
import Navbar from "./components/Navbar";
import './App.css';
import FeaturesSection from "./components/FeaturesSection";
import ConnectStore from "./components/ConnectStore";
import Testimonials from "./components/Testimonials";
import SellingCard from "./components/SellingCard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CustomSoln from "./components/CustomSoln";

function App() {
  return (
  <>
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <Hero/>

      <FeaturesSection />
      <ConnectStore />
       <CustomSoln/>

      <Testimonials/>
      <SellingCard/>
      
    </div>
    <Footer/>
    </>
  );
}

export default App;
