import React, { useEffect } from "react";
import "./PortfolioSection.css"; // Using same CSS file for modal styles

const ProjectModal = ({ project, closeModal }) => {

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>×</button>
        <img src={project.image} alt={project.title} className="modal-image" />
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-description">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectModal;
