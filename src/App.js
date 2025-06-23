import "../src/components/variables.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Business from "./components/Business";
import BusinessFeatures from "./components/BusinessFeatures"
import FAQSection from "./components/FAQSection"
import Footer from "./components/Footer"
import PricingPlans from "./components/PricingPlans";
import AboutSection from "./components/AboutSection"
import PortfolioSection from "./components/PortfolioSection";


import PrivacyPolicy from "./components/PrivacyPolicy";



const scrollToPlans = () => {
  const section = document.getElementById("services");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


function HomePage() {


  return (
    <>
      <Header />
      <HeroSection scrollToPlans={scrollToPlans} />
      <AboutSection />
      <PortfolioSection />
      <Business />
      <BusinessFeatures />
      <PricingPlans />
      <FAQSection />
      <Footer />
    </>
  );
}

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App;
