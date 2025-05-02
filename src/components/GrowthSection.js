import React from "react";
import { motion } from "framer-motion";
import mainImage1 from "../assets/download.png";
import mainImage2 from "../assets/download.png";
import mainImage3 from "../assets/download.png";
import icon1 from "../assets/download.png";
import icon2 from "../assets/download.png";
import icon3 from "../assets/download.png";
import "../components/GrowthSection.css";   

const sections = [
  {
    title: "Speed & Performance Optimization",
    description: "Boost your site’s speed and performance with advanced optimization for a great user experience.",
    mainImage: mainImage1,
    leftIcon: icon1,
    rightIcon: icon2,
  },
  {
    title: "SEO & Analytics",
    description: "Optimize your site and track its performance with monthly SEO audits and Google Analytics insights.",
    mainImage: mainImage2,
    leftIcon: icon2,
    rightIcon: icon3,
  },
  {
    title: "Security & Backups",
    description: "Keep your website safe with security monitoring, regular backups, and malware protection.",
    mainImage: mainImage3,
    leftIcon: icon3,
    rightIcon: icon1,
  },
  {
    title: "Custom Integrations",
    description: "Seamlessly integrate third-party tools, APIs, and custom features tailored to your needs.",
    mainImage: mainImage1,
    leftIcon: icon1,
    rightIcon: icon3,
  },
  {
    title: "E-Commerce Optimization",
    description: "Enhance your online store’s speed, UX, and checkout process for higher conversions.",
    mainImage: mainImage2,
    leftIcon: icon2,
    rightIcon: icon1,
  },
  {
    title: "Ongoing Support & Maintenance",
    description: "Ensure your website stays up-to-date, secure, and running smoothly with expert support.",
    mainImage: mainImage3,
    leftIcon: icon3,
    rightIcon: icon2,
  },
];

const SpeedOptimization = () => {
  return (
    <div>
      <div className="h2-div">
        <h2 className="support-p">Support for Growth</h2>
        <p className="design-p">Maintenance, design, and integrations—everything your WordPress site needs to thrive.</p>
      </div>

      <div className="main-container">
        {sections.map((section, index) => (
          <div className="speed-optimization-container" key={index}>
            <h2 style={{ textAlign: "left", marginTop: "-15px" }}>{section.title}</h2>
            <p>{section.description}</p>

            <div className="image-container">
              <motion.img 
                src={section.mainImage} 
                alt="Main Section Image" 
                className="main-image"
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }} 
                viewport={{ once: false }}
              />
              
              <motion.img 
                src={section.leftIcon} 
                alt="Left Icon" 
                className="icon icon-left"
                initial={{ x: -50, opacity: 0 }} 
                whileInView={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: false }}
              />

              <motion.img 
                src={section.rightIcon} 
                alt="Right Icon" 
                className="icon icon-right"
                initial={{ x: 50, opacity: 0 }} 
                whileInView={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: false }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeedOptimization;
