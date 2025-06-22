import React, { useEffect } from "react";

const projectDetails = {
  "Z3 Website & Branding": {
    client: "Vinency",
    company: "ViralNest Studio",
    service: "Branding & Website",
    tools: ["Figma", "Photoshop", "ReactJS"],
    startDate: "January 2024",
    endDate: "March 2024",
    sections: [
      {
        heading: "Iterative Process:",
        text:
          "Product design typically follows an iterative process, where designers create prototypes, gather feedback, and refine designs based on user testing and evaluation. This iterative approach allows for continuous improvement and refinement of the product until it meets the desired specifications and user expectations.",
      },
      {
        heading: "Creative Process:",
        text:
          "At ViralNest, the creative process is like refining raw ideas into refined designs. We employ a systematic approach that involves ideation, experimentation, and iteration to achieve the desired outcome.",
      },
      {
        heading: "Expertise:",
        text:
          "The team at ViralNest comprises skilled designers, artists, and developers who bring a diverse range of talents and perspectives to each project. We specialize in graphic design, web design, branding, and more.",
      },
      {
        heading: "Customization:",
        text:
          "ViralNest understands that every client and project is unique. We offer personalized design solutions tailored to meet the specific needs, goals, and preferences of each client, ensuring that the final result reflects their vision and brand identity.",
      },
    ],
  },
  "Vinecy Website": {
    client: "Argive Josen",
    company: "Sailr",
    service: "Product Design",
    tools: ["Illustrator"],
    startDate: "Dec 21, 2023",
    endDate: "Sep 2, 2024",
    sections: [
      {
        heading: "Iterative Process:",
        text:
          "Vinency embraces an iterative product design process, where prototypes are developed, feedback is gathered, and designs are continuously refined based on user testing.",
      },
      {
        heading: "Creative Process:",
        text:
          "At Vinency, the creative process mirrors alchemy, transforming raw ideas into polished, exceptional designs.",
      },
      {
        heading: "Expertise:",
        text:
          "The team at Vinency consists of skilled designers, artists, and craftsmen, offering expertise across disciplines such as graphic design, web design, and product design. Their diverse talents ensure a well-rounded approach to every project.",
      },
      {
        heading: "Customization:",
        text:
          "Understanding that each client and project is unique, Vinency offers personalized design solutions tailored to specific needs, goals, and preferences, ensuring the final result reflects the client’s vision and brand identity.",
      },
    ],
  },
  "Studio Clay": {
    client: "Argive Josen",
    company: "Sailr",
    service: "Product Design",
    tools: ["Illustrator"],
    startDate: "Sep 15, 2023",
    endDate: "Sep 20, 2023",
    sections: [
      {
        heading: "Iterative Process:",
        text:
          "Vinency follows an iterative design approach, where prototypes are created, user feedback is collected, and continuous refinements are made based on testing. This ensures the final product is perfected to meet all requirements.",
      },
      {
        heading: "Creative Process:",
        text:
          "The creative journey at Vinency is like alchemy, refining raw ideas into polished, sophisticated designs. With a structured approach involving ideation, experimentation, and iteration, they bring ideas to fruition.",
      },
      {
        heading: "Expertise:",
        text:
          "The talented team at Vinency comprises skilled designers and artists, offering expertise in product design, graphic design, and web design. Their collective talents bring unique solutions to every project.",
      },
      {
        heading: "Customization:",
        text:
          "Vinency offers fully customized design solutions, tailored to the specific needs and preferences of each client. Their process ensures the final product aligns perfectly with the client’s vision and brand identity.",
      },
    ],
  },
  "Pentaclay Design Works": {
    client: "Argive Josen",
    company: "Sailr",
    service: "Product Design",
    tools: ["Illustrator"],
    startDate: "Oct 7, 2023",
    endDate: "Oct 20, 2023",
    sections: [
      {
        heading: "Iterative Process:",
        text:
          "Vinency uses an iterative process in product design, where prototypes are developed, user feedback is incorporated, and the design is refined through continuous testing. This ensures that the product meets both user needs and technical specifications.",
      },
      {
        heading: "Creative Process:",
        text:
          "At Vinency, the creative process mirrors the art of alchemy, turning raw ideas into exceptional, refined designs. Ideation, experimentation, and iteration drive their approach, resulting in innovative outcomes.",
      },
      {
        heading: "Expertise:",
        text:
          "Vinency’s team brings together talented designers, artists, and craftsmen skilled in areas such as graphic design, web design, and product design. Their wide-ranging expertise ensures high-quality results for every project.",
      },
      {
        heading: "Customization:",
        text:
          "Each project at Vinency is treated as one-of-a-kind, with personalized design solutions that cater to the client’s specific needs. They ensure the final product reflects both the client’s brand identity and vision.",
      },
    ],
  },
  "Penta Design": {
    client: "Argive Josen",
    company: "Sailr",
    service: "Product Design",
    tools: ["Illustrator"],
    startDate: "Jan 12, 2024",
    endDate: "Jan 27, 2024",
    sections: [
      {
        heading: "Iterative Process:",
        text:
          "The product design process is iterative, involving the development of prototypes, user testing, and refinement. This allows for continuous improvement until the product meets both user and technical requirements.",
      },
      {
        heading: "Creative Process:",
        text:
          "Creative process resembles alchemy, turning raw concepts into sophisticated designs. By following a structured approach of ideation, experimentation, and iteration, they bring creative visions to life.",
      },
      {
        heading: "Expertise:",
        text:
          "The team at Vinency comprises highly skilled designers, artists, and craftsmen with expertise in fields like product design, graphic design, and web design. Their collective talents enable them to deliver outstanding results on every project.",
      },
      {
        heading: "Customization:",
        text:
          "Vinency understands that every client and project is unique. They provide personalized design solutions, tailored to reflect the client’s specific vision and brand identity, ensuring the final product is both distinctive and impactful.",
      },
    ],
  },
  "Artisanal Edge": {
    client: "Argive Josen",
    company: "Sailr",
    service: "Product Design",
    tools: ["Illustrator"],
    startDate: "Feb 26, 2024",
    endDate: "Feb 29, 2024",
    sections: [
      {
        heading: "Iterative Process:",
        text:
          "Vinency’s team brings together talented designers, artists, and craftsmen skilled in areas such as graphic design, web design, and product design. Their wide-ranging expertise ensures high-quality results for every project.",
      },
      {
        heading: "Creative Process:",
        text:
          "Vinency uses an iterative process in product design, where prototypes are developed, user feedback is incorporated, and the design is refined through continuous testing. This ensures that the product meets both user needs and technical specifications.",
      },
      {
        heading: "Expertise:",
        text:
          "At Vinency, the creative process mirrors the art of alchemy, turning raw ideas into exceptional, refined designs. Ideation, experimentation, and iteration drive their approach, resulting in innovative outcomes.",
      },
      {
        heading: "Customization:",
        text:
          "Each project at Vinency is treated as one-of-a-kind, with personalized design solutions that cater to the client’s specific needs. They ensure the final product reflects both the client’s brand identity and vision.",
      },
    ],
  },
  "Beyond Blueprint": {
    client: "Argive Josen",
    company: "Sailr",
    service: "Product Design",
    tools: ["Illustrator"],
    startDate: "Feb 16, 2024",
    endDate: "Feb 17, 2024",
    sections: [
      {
        heading: "Iterative Process:",
        text:
          "The creative process at Vinency is akin to alchemy, transforming raw ideas into elegant, polished designs. Through ideation, experimentation, and iteration, they refine every detail to achieve a stunning final result.",
      },
      {
        heading: "Creative Process:",
        text:
          "Vinency’s team is made up of skilled designers, artists, and craftsmen with expertise across disciplines like graphic design, web design, and product design. Their diverse skills ensure that each project receives the best possible solutions.",
      },
      {
        heading: "Expertise:",
        text:
          "Vinency follows an iterative product design process, where prototypes are created, tested with users, and refined based on feedback. This method ensures the product evolves to meet both user expectations and technical standards.",
      },
      {
        heading: "Customization:",
        text:
          "Vinency offers fully customized design solutions, tailoring each project to fit the unique goals and vision of the client. Their approach ensures that the final result perfectly reflects the client’s brand and objectives.",
      },
    ],
  },
  "Creative Space": {
    client: "Argive Josen",
    company: "Sailr",
    service: "Product Design",
    tools: ["Illustrator"],
    startDate: "Mar 15, 2024",
    endDate: "Apr 6, 2024",
    sections: [
      {
        heading: "Iterative Process:",
        text:
          "Vinency’s approach to product design is iterative, where prototypes are developed, user feedback is gathered, and the design is continuously refined. This process ensures that the final product meets both technical and user expectations.",
      },
      {
        heading: "Creative Process:",
        text:
          "At Vinency, the creative process is a form of alchemy, turning raw ideas into polished, refined designs. Through systematic ideation, experimentation, and iteration, they bring concepts to life.",
      },
      {
        heading: "Expertise:",
        text:
          "Vinency’s team is composed of skilled designers, artists, and craftsmen with expertise in graphic design, product design, and web design. Their broad skill set ensures that each project benefits from diverse perspectives and creative solutions.",
      },
      {
        heading: "Customization:",
        text:
          "Each project at Vinency is customized to meet the specific needs of the client. They provide bespoke design solutions that reflect the client’s brand identity and vision, ensuring a unique and tailored final product.",
      },
    ],
  },
};



const ProjectModal = ({ project, closeModal }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);

  const details = projectDetails[project.title] || null;

  return (
    <div className="project-modal-overlay" onClick={closeModal}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="project-close" onClick={closeModal}>×</button>

        <img
          src={project.heroImage || project.banner}
          alt={project.title}
          className="project-hero-image"
        />

        <div className="project-grid">
          {/* Right Column (Details Body) */}
          <div className="project-body">
            <h2>{project.title}</h2>
            {details && details.sections ? (
              details.sections.map((sec, index) => (
                <div key={index} className="project-section">
                  <h4>{sec.heading}</h4>
                  <p style={{ color: "#4b4b4b" }}>{sec.text}</p>
                </div>
              ))
            ) : (
              <p style={{ color: "red", marginTop: "1rem" }}>
                No project details found for this card.
              </p>
            )}
          </div>

          {/* Left Column (Sidebar) */}
          <div className="project-sidebar">
            <h3>Project Info</h3>
            {details ? (
              <>
                <p><strong>Client:</strong> {details.client}</p>
                <p><strong>Company:</strong> {details.company}</p>
                <p><strong>Service:</strong> {details.service}</p>
                <p><strong>Tools:</strong> {details.tools.join(", ")}</p>
                <p><strong>Start Date:</strong> {details.startDate}</p>
                <p><strong>End Date:</strong> {details.endDate}</p>
              </>
            ) : (
              <p style={{ color: "red" }}>Missing sidebar data.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
