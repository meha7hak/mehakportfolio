import { motion } from "framer-motion";
import { Eye, Download, FileText } from "lucide-react";
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <motion.div
        className="resume-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">Curriculum Vitae</span>
        <h2 className="section-title">Professional Resume</h2>
        <p className="section-subtitle">
          Detailed overview of education, technical experience, projects, and skills.
        </p>
      </motion.div>

      <motion.div
        className="resume-glass-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Resume Preview Frame */}
        <div className="resume-preview-frame">
          <div className="resume-preview-header">
            <div>
              <h3 className="preview-name">Mehak</h3>
              <p className="preview-role">Full Stack Developer</p>
            </div>
            <span className="preview-badge">Available for Roles</span>
          </div>

          <div className="resume-preview-content">
            <div className="preview-line long accent" />
            <div className="preview-line medium" />
            <div className="preview-line short" />
            <div className="preview-line long" />
            <div className="preview-line medium accent" />
          </div>

          <div className="preview-overlay">
            <div className="preview-overlay-text">
              <FileText size={18} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} />
              Click below to view or download full PDF document
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="resume-actions">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Resume viewer opened.");
            }}
            className="btn-resume btn-resume-view"
          >
            <Eye size={18} />
            View Resume
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Downloading Mehak_Resume.pdf...");
            }}
            className="btn-resume btn-resume-download"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
