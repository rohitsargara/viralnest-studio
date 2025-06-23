import React, { useState } from "react";
import "./PortfolioSection.css";
import ProjectModal from "./ProjectModal";

// Import banner images
import bannerImg1 from "../assets/Social.jpg";
import bannerImg2 from "../assets/Vency Website.jpg";
import bannerImg3 from "../assets/Studio Clay.jpg";
import bannerImg4 from "../assets/Design Works.jpg";
import bannerImg5 from "../assets/Design Penta.jpg";
import bannerImg6 from "../assets/Artisinal Edge.jpg";
import bannerImg7 from "../assets/Beyond Blueprint.jpg";
import bannerImg8 from "../assets/Creative Space.jpg";


const projects = [
  {
    title: "Z3 Website & Branding",
    banner: bannerImg1, 
    year: 2024,
  },
  {
    title: "Vinecy Website",
    banner: bannerImg2,
    year: 2023,
  },
  {
    title: "Studio Clay",
    banner: bannerImg3,
    year: 2020,
  },
  {
    title: "Pentaclay Design Works",
    banner: bannerImg4,
    year: 2022,
  },
  {
    title: "Penta Design",
    banner: bannerImg5,
    year: 2020,
  },
  {
    title: "Artisanal Edge",
    banner: bannerImg6,
    year: 2020,
  },
  {
    title: "Beyond Blueprint",
    banner: bannerImg7,
    year: 2020,
  },
  {
    title: "Creative Space",
    banner: bannerImg8,
    year: 2020,
  },
];

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio-heading">Our Portfolio</h2>
      <p className="portfolio-subtext">Here are some of our recent projects:</p>
      
      <div className="portfolio-grid">
        {projects.slice(0, visibleCount).map((project, index) => (
          <div className="portfolio-card-wrapper" key={index}>
            <div className="portfolio-card" onClick={() => openModal(project)}>
              <img
                src={project.banner}
                alt={project.title}
                className="portfolio-image"
              />
            </div>
            <div className="project-meta">
              <span className="project-title">{project.title}</span>
              <span className="project-year">© {project.year}</span>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < projects.length && (
        <div className="load-more-wrapper">
          <button
            className="load-more-btn"
            onClick={() => setVisibleCount(projects.length)}
          >
            Load More
          </button>
        </div>
      )}

      {selectedProject && (
        <ProjectModal project={selectedProject} closeModal={closeModal} />
      )}
    </section>
  );
};

export default PortfolioSection;
