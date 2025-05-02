import React, { useState } from "react";
import "./PortfolioSection.css";
import ProjectModal from "./ProjectModal";
import img1 from "../assets/copper-icosahedron-pattern-black.jpg";

const projects = [
  {
    title: "Social Media Management",
    image: img1,
    description: "Managed Instagram growth for a salon, achieving 5k followers in just 2 months with strategic content planning and ad boosts.",
  },
  {
    title: "Video Editing Reels",
    image: img1,
    description: "Produced high-converting Instagram reels for a wellness coach, increasing engagement by 200% in 1 month.",
  },
  {
    title: "Website for Makeup Artist",
    image: img1,
    description: "Developed a clean, mobile-optimized booking website for a popular MUA based in Pune, boosting appointment conversions.",
  },
  {
    title: "Landing Page for Startup",
    image: img1,
    description: "Designed a high-converting landing page for a SaaS startup, focusing on modern UI and lead generation.",
  },
  {
    title: "YouTube Channel Branding",
    image: img1,
    description: "Handled branding and full video editing for a motivational YouTube channel, leading to 10k subscribers within 6 months.",
  },
];

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio-heading">Portfolio</h2>
      <p className="portfolio-subtext">Here are some of our recent projects:</p>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index} onClick={() => openModal(project)}>
            <img src={project.image} alt={project.title} className="portfolio-image" />
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
