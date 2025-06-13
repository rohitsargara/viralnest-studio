import React, { useState } from "react";
import "./PortfolioSection.css";
import ProjectModal from "./ProjectModal";

// Import banner images
import bannerImg1 from "../assets/Social.jpg";        // Social Media Management
import bannerImg2 from "../assets/Video editing banner.jpg";       // Video Editing Reels
import bannerImg3 from "../assets/Desktopslider2.jpg";     // Website for MUA
import bannerImg4 from "../assets/Flux_Dev_A_bright_and_modern_depiction_of_a_focused_young_boy__0.jpg";     // Landing Page
import bannerImg5 from "../assets/Gallery08-scaled.webp";     // YouTube Branding

// Import project detail images
import img2 from "../assets/SocialMedia1.jpeg";
import img3 from "../assets/Desktopslider2.jpg";
import img4 from "../assets/Socialmedia2.jpeg"

const projects = [
  {
    title: "Social Media Management",
    banner: bannerImg1,
    images: [img2, img4, ],
    description: "Managed Instagram growth for a Entertainment page (@Yoursshivi), achieving 30k followers in just 2 months with strategic content planning and ad boosts.",
    tools: ["Instagram", "Canva", "Meta Ads, "],
  },
  {
    title: "Video Editing Reels",
    banner: bannerImg2,
    images: [img3],
    description: "Produced high-converting Instagram reels for a wellness coach, increasing engagement by 200% in 1 month.",
    tools: ["Premiere Pro", "CapCut", "Motion Graphics"],
  },
  {
    title: "Website for Makeup Artist",
    banner: bannerImg3,
    images: [img2],
    description: "Developed a clean, mobile-optimized booking website for a popular MUA based in Pune, boosting appointment conversions.",
    tools: ["React", "Figma", "EmailJS"],
  },
  {
    title: "Landing Page for Startup",
    banner: bannerImg4,
    images: [img3],
    description: "Designed a high-converting landing page for a SaaS startup, focusing on modern UI and lead generation.",
    tools: ["Tailwind CSS", "Framer Motion", "SEO Tools"],
  },
  {
    title: "YouTube Channel Branding",
    banner: bannerImg5,
    images: [img2, img3],
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
      <h2 className="portfolio-heading">Our Portfolio</h2>
      <p className="portfolio-subtext">Here are some of our recent projects:</p>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index} onClick={() => openModal(project)}>
            <img src={project.banner} alt={project.title} className="portfolio-image" />
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
