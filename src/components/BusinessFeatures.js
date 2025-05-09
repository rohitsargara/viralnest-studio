import React from "react";
import { FaCalendarCheck, FaBolt, FaHandshake, FaDollarSign, FaChartLine, FaCogs } from "react-icons/fa";
import "./BusinessFeatures.css";

const features = [
  { icon: <FaCalendarCheck size={24} />, title: "Automated Posting", desc: "Schedule and automate your content to keep your social media active 24/7." },
  { icon: <FaBolt size={24} />, title: "Fast Content Edits", desc: "Quick turnaround for video and image edits to keep your brand looking sharp." },
  { icon: <FaHandshake size={24} />, title: "No Long-Term Contracts", desc: "Flexible plans with no commitments—cancel anytime if it doesn’t work for you." },
  { icon: <FaDollarSign size={24} />, title: "Affordable Plans for Businesses", desc: "Tailored pricing for small businesses and influencers, ensuring maximum value." },
  { icon: <FaChartLine size={24} />, title: "Complete Social Media Management", desc: "From content creation to engagement, we handle everything while you focus on growth." },
  { icon: <FaCogs size={24} />, title: "Hassle-Free Optimization", desc: "AI-powered tools to track analytics and improve performance effortlessly." },
];

const BusinessFeatures = () => {
  return (
    <section className="business-features">
      <h2 className="titlee">Here's what you will get</h2>
      <p className="subtitle">Get AI-powered social media automation and expert video editing to enhance your brand.</p>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon-container">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessFeatures;