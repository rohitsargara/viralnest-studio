import React, { useState, useEffect } from "react";
import "./Business.css";
import image1 from "../assets/desktop-slider-image-12.webp";
import image2 from "../assets/desktop-slider-image-13.webp";
import image3 from "../assets/desktop-slider-image-2.webp";
import image4 from "../assets/desktop-slider-image-3.webp";
import image5 from "../assets/desktop-slider-image-6.webp";

const images = [image1, image2, image3, image4, image5];

const Slider = ({ reverse }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrame;
    const moveSlider = () => {
      setOffset((prev) => prev + 0.5); // Keep moving regardless of hover
      animationFrame = requestAnimationFrame(moveSlider);
    };
    moveSlider();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      className={`slider-track ${reverse ? "reverse" : ""}`}
      style={{ transform: `translateX(${reverse ? offset : -offset}px)` }}
    >
      {[...images, ...images].map((img, index) => (
        <div className="slide" key={index}>
          <img src={img} alt={`slide-${index}`} />
        </div>
      ))}
    </div>
  );
};


const Business = () => {
  return (
    <div className="business-section">
      <div className="overlay"></div>

      {/* Text Section */}
      <div className="text-container">
        <h1 className="title">
          Work That Speaks <span className="highlight">For Itself</span>
        </h1>
        <p className="description">
          Unlock new opportunities with our cutting-edge solutions
          <span className="faded-text"> Build, grow, and scale  effortlessly.</span>
        </p>
      </div>

      {/* Sliders */}
      <div className="slider-wrapper">
        <Slider reverse={false} /> {/* Right to Left */}
        <Slider reverse={true} />  {/* Left to Right */}
      </div>
    </div>
  );
};

export default Business;
