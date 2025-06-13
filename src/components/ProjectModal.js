import React, { useEffect, useState } from "react";

const ProjectModal = ({ project, closeModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>×</button>

        {/* Image Carousel */}
        <div className="modal-carousel">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - slide ${currentImageIndex + 1}`}
            className="modal-image"
          />
          {project.images.length > 1 && (
            <div className="carousel-controls">
              <button onClick={handlePrev}>&larr;</button>
              <button onClick={handleNext}>&rarr;</button>
            </div>
          )}
        </div>

        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-description">{project.description}</p>

        {/* Tools Used */}
        {project.tools && (
          <div className="modal-tools">
            <h4>Tools Used:</h4>
            <ul>
              {project.tools.map((tool, i) => (
                <li key={i} className="tool-tag">{tool}</li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        {project.cta && (
          <a
            className="modal-cta"
            href={project.cta.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.cta.label}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
