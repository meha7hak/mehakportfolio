import { motion } from "framer-motion";
import "./About.css";

const stats = [
  { number: "15+", label: "Projects Completed" },
  { number: "10+", label: "Tech Stack Mastered" },
  { number: "500+", label: "Code Commits" },
  { number: "100%", label: "Responsive Design" },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">About Me</span>
        <h2 className="section-title">Driven by Curiosity & Code</h2>
        <p className="section-subtitle">
          Passionate about crafting intuitive user experiences and building robust end-to-end applications.
        </p>
      </motion.div>

      <div className="about-grid">
        {/* Left: Decorative Code Editor */}
        <motion.div
          className="code-editor-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="editor-header">
            <div className="editor-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <span className="editor-filename">developer.config.js</span>
          </div>
          <div className="editor-body">
            <div className="code-line">
              <span className="line-num">1</span>
              <span>
                <span className="code-keyword">const</span>{" "}
                <span className="code-variable">developer</span> = &#123;
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">2</span>
              <span>
                &nbsp;&nbsp;<span className="code-property">name</span>:{" "}
                <span className="code-string">"Mehak"</span>,
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">3</span>
              <span>
                &nbsp;&nbsp;<span className="code-property">role</span>:{" "}
                <span className="code-string">"Full Stack Developer"</span>,
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">4</span>
              <span>
                &nbsp;&nbsp;<span className="code-property">passions</span>: [
                <span className="code-string">"Clean Code"</span>,{" "}
                <span className="code-string">"UI/UX"</span>,{" "}
                <span className="code-string">"Scalable APIs"</span>],
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">5</span>
              <span>
                &nbsp;&nbsp;<span className="code-property">build</span>:{" "}
                <span className="code-function">()</span> =&gt; &#123;
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">6</span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-keyword">return</span>{" "}
                <span className="code-string">"Impactful Digital Solutions"</span>;
              </span>
            </div>
            <div className="code-line">
              <span className="line-num">7</span>
              <span>&nbsp;&nbsp;&#125;</span>
            </div>
            <div className="code-line">
              <span className="line-num">8</span>
              <span>&#125;;</span>
            </div>
          </div>
        </motion.div>

        {/* Right: About Text */}
        <motion.div
          className="about-text-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="about-paragraph">
            I am a full-stack developer with a strong foundation in modern web technologies.
            My journey into software development is driven by a passion for solving complex problems through clean, maintainable code.
          </p>
          <p className="about-paragraph">
            Whether it's creating sleek interactive interfaces with <span className="about-highlight">React</span> and <span className="about-highlight">Framer Motion</span>, or architecting backend services with <span className="about-highlight">Node.js</span> and <span className="about-highlight">MongoDB</span>, I aim to build software that is both highly functional and aesthetically engaging.
          </p>
          <p className="about-paragraph">
            I continuously explore new technologies and design paradigms to refine my skills and stay ahead in the fast-evolving tech landscape.
          </p>
        </motion.div>
      </div>

      {/* Below: Animated Statistics */}
      <motion.div
        className="stats-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, staggerChildren: 0.15 }}
        viewport={{ once: true }}
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
