import { motion } from "framer-motion";
import { Layout, Server, Wrench } from "lucide-react";
import "./Skills.css";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="category-icon" size={24} />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server className="category-icon" size={24} />,
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="category-icon" size={24} />,
    skills: ["Git", "GitHub", "Postman", "Vercel"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">Tech Stack</span>
        <h2 className="section-title">Skills & Capabilities</h2>
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life.
        </p>
      </motion.div>

      <motion.div
        className="skills-categories"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            className="skill-category-card"
            variants={cardVariants}
          >
            <div className="category-title-wrap">
              {cat.icon}
              <h3 className="category-title">{cat.title}</h3>
            </div>
            <motion.div
              className="skills-badge-grid"
              variants={containerVariants}
            >
              {cat.skills.map((skill, sIdx) => (
                <motion.span
                  key={sIdx}
                  className="skill-badge"
                  variants={badgeVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
