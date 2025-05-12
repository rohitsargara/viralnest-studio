import React, { useState } from "react";
import "./PortfolioSection.css";
import ProjectModal from "./ProjectModal";

import img1 from "../assets/copper-icosahedron-pattern-black.jpg";
import img2 from "../assets/desktopslider6.jpg";
import img3 from "../assets/desktopslider9.jpg";

const projects = [
  {
    title: "Social Media Management",
    images: [img1, img2],
    description: "Managed Instagram growth for a salon, achieving 5k followers in just 2 months with strategic content planning and ad boosts.",
    tools: ["Instagram", "Canva", "Meta Ads"],
  },
  {
    title: "Video Editing Reels",
    images: [img1, img3],
    description: "Produced high-converting Instagram reels for a wellness coach, increasing engagement by 200% in 1 month.",
    tools: ["Premiere Pro", "CapCut", "Motion Graphics"],
  },
  {
    title: "Website for Makeup Artist",
    images: [img1, img2],
    description: "Developed a clean, mobile-optimized booking website for a popular MUA based in Pune, boosting appointment conversions.",
    tools: ["React", "Figma", "EmailJS"],
  },
  {
    title: "Landing Page for Startup",
    images: [img1, img3],
    description: "Designed a high-converting landing page for a SaaS startup, focusing on modern UI and lead generation.",
    tools: ["Tailwind CSS", "Framer Motion", "SEO Tools"],
  },
  {
    title: "YouTube Channel Branding",
    images: [img1, img2, img3],
    description: "Handled branding and full video editing for a motivational YouTube channel, leading to 10k subscribers within 6 months.",
    tools: ["Photoshop", "After Effects", "YouTube Studio"],
  },
];

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio-heading">Portfolio</h2>
      <p className="portfolio-subtext">Here are some of our recent projects:</p>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index} onClick={() => openModal(project)}>
            <img src={project.images[0]} alt={project.title} className="portfolio-image" />
            <h3>{project.title}</h3>
            <p>{project.description.substring(0, 60)}...</p>
            <button className="view-project">View Project</button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} closeModal={closeModal} />
      )}
    </section>
  );
};

export default PortfolioSection;
