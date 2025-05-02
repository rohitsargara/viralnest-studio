import "../src/components/variables.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Business from "./components/Business";
import BusinessFeatures from "./components/BusinessFeatures"
import FAQSection from "./components/FAQSection"
import Footer from "./components/Footer"
import PricingPlans from "./components/PricingPlans";
import AboutSection from "./components/AboutSection"
import PortfolioSection from "./components/PortfolioSection";

import "./App.css";



function App() {


  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <Business />
      <BusinessFeatures />
      <PricingPlans />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
