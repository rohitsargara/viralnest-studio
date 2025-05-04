import React from "react";
import "./HeroSection.css";
import heroImage from "../assets/Flux_Dev_A_bright_and_modern_depiction_of_a_focused_young_boy__0.jpg";

const HeroSection = ({ scrollToPlans }) => {
  return (
    <section className="hero">
      <div id="tpo" className="hero-content animate-fade-in">
        <h1 className="animate-slide-up">All-in-One Website</h1>
        <h2 className="animate-slide-up">
          Care, <span className="highlight">Design</span> & Development
        </h2>
        <p className="animate-slide-up">
          We design, build, and maintain websites that grow your business.
        </p>

        <div className="trust-section animate-fade-in-delayed">
          <div className="review">
            <div className="avatars">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="user" />
              <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="user" />
              <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="user" />
              <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="user" />
            </div>
            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>5.0</span>
            </div>
          </div>
          <p className="trust-text">Trusted by businesses worldwide</p>
        </div>

        <button className="cta-button animate-slide-up" onClick={scrollToPlans}>
          See Plans <span className="arrow">→</span>
        </button>
      </div>

      <div className="hero-image animate-zoom-in">
        <img src={heroImage} alt="Hero" />
        
      </div>
    </section>
  );
};

export default HeroSection;
