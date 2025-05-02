import React from "react";
import "./about.css";
import aboutImg from "../assets/Gallery08-scaled.webp";
import Counter from "./Counter"; // 👈 import counter component

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text">
          <p className="section-subheading">Who We Are</p>
          <h2 style={{color:'#1b9aa'}}>About Viralnest Studio</h2>
          <p>
            At Viralnest Studio, we specialize in website development and video editing, 
            delivering high-quality digital solutions that bring your vision to life. 
            With a passion for creativity and a commitment to excellence, we empower businesses to grow online with confidence.
          </p>

          <div className="about-stats">
            <div className="stat-box">
              <h3><Counter end={3} duration={1.0} /> Years</h3>
              <p>Since our founding, we have focused on empowering businesses with impactful digital experiences.</p>
            </div>
            <div className="stat-box">
              <h3><Counter end={52} duration={0.8} /> Clients</h3>
              <p>We have successfully partnered with over 50 businesses, helping them elevate their online presence and achieve results.</p>
            </div>
            <div className="stat-box">
              <h3><Counter end={34} duration={1.0} /> Projects</h3>
              <p>Our portfolio showcases a diverse range of projects crafted with passion, precision, and purpose.</p>
            </div>
            <div className="stat-box">
              <h3><Counter end={10} duration={0.9} /> Team Members</h3>
              <p>Our talented team includes developers, designers, and editors — all working together to deliver excellence for every client.</p>
            </div>
          </div>
        </div>

        <div className="about-img animate-fade-in">
          <img src={aboutImg} alt="Our Team" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
