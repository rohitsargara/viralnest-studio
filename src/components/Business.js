import React from "react";
import "./Business.css";

// Separate images for each slider
import imgTop1 from "../assets/Desktopslider1.jpg";
import imgTop2 from "../assets/Desktopslider2.jpg";
import imgTop3 from "../assets/desktopslider3.jpg";
import imgTop4 from "../assets/desktopslider10.jpg";
import imgTop5 from "../assets/desktopslider5.jpg";

import imgBottom1 from "../assets/desktopslider4.jpg";
import imgBottom2 from "../assets/desktopslider6.jpg";
import imgBottom3 from "../assets/desktopslider7.jpg";
import imgBottom4 from "../assets/desktopslider8.jpg";
import imgBottom5 from "../assets/desktopslider9.jpg";

const imagesTop = [imgTop1, imgTop2, imgTop3, imgTop4, imgTop5];
const imagesBottom = [imgBottom1, imgBottom2, imgBottom3, imgBottom4, imgBottom5];

const Slider = ({ reverse, images }) => {
  return (
    <div className={`slider-track-wrapper ${reverse ? "reverse" : ""}`}>
      <div className="slider-track">
        {[...images, ...images].map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <div className="business-section">
      <div className="overlay"></div>

      <div className="text-container">
        <h1 className="title">
          Work That Speaks <span className="highlight">For Itself</span>
        </h1>
        <p className="description">
          Unlock new opportunities with our cutting-edge solutions
          <span className="faded-text"> Build, grow, and scale effortlessly.</span>
        </p>
      </div>

      <div className="slider-wrapper">
        <Slider reverse={false} images={imagesTop} />
        <Slider reverse={true} images={imagesBottom} />
      </div>
    </div>
  );
};

export default Business;
