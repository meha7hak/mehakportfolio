import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import "./Projects.css";

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


const projectsData = [
  {
    id: 1,
    title: "AI Portfolio & Interactive Studio",
    description:
      "A futuristic, interactive web portfolio built with React, WebGL shaders, particle simulations, smooth scroll Lenis integration, and Framer Motion micro-animations.",
    techStack: ["React", "WebGL", "Three.js", "Framer Motion", "CSS Grid"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
  {
    id: 2,
    title: "Full Stack E-Commerce Platform",
    description:
      "A modern, scalable online marketplace featuring full authentication, product catalog, cart state management, payment gateway integration, and real-time order tracking.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0a67568d0d9f?auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
  {
    id: 3,
    title: "Real-Time Dev Dashboard",
    description:
      "Analytics and task tracking dashboard built for developer teams. Includes interactive data charts, live websocket updates, and dark glassmorphic UI aesthetic.",
    techStack: ["React", "Node.js", "WebSockets", "MongoDB", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
];

const Projects = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const currentProject = projectsData[activeProjectIdx];

  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">Featured Work</span>
        <h2 className="section-title">Projects Showcase</h2>
        <p className="section-subtitle">
          Explore selected projects highlighting full-stack development, UI craftsmanship, and system architecture.
        </p>
      </motion.div>

      <div className="projects-showcase-container">
        {/* Project Selector Tabs */}
        <div className="projects-nav-tabs">
          {projectsData.map((project, idx) => (
            <button
              key={project.id}
              className={`project-tab-btn ${
                activeProjectIdx === idx ? "active" : ""
              }`}
              onClick={() => setActiveProjectIdx(idx)}
            >
              0{idx + 1}. {project.title}
            </button>
          ))}
        </div>

        {/* Animated Project Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            className="project-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="project-image-wrap">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{currentProject.title}</h3>
              <p className="project-description">{currentProject.description}</p>
              
              <div className="project-tech-stack">
                {currentProject.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project btn-github"
                >
                  <GithubIcon size={18} />
                  Code
                </a>
                <a
                  href={currentProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project btn-demo"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
