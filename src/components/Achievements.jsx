import { motion } from "framer-motion";
import { Trophy, Award, Star, Zap, Code2, CheckCircle2 } from "lucide-react";
import "./Achievements.css";

const achievementsData = [
  {
    icon: <Trophy size={26} />,
    title: "Hackathon Finalist & Winner",
    description:
      "Recognized for developing an innovative real-time collaborative web platform within a 36-hour sprint.",
  },
  {
    icon: <Award size={26} />,
    title: "Full Stack Certification",
    description:
      "Completed rigorous web development certifications covering advanced React, Node.js microservices, and database optimization.",
  },
  {
    icon: <Star size={26} />,
    title: "Open Source Contributor",
    description:
      "Active participant in open-source repositories, building UI components and improving framework documentation.",
  },
  {
    icon: <Zap size={26} />,
    title: "High Performance Web Architect",
    description:
      "Optimized web applications achieving 95+ Google Lighthouse scores across Performance, Accessibility, and Best Practices.",
  },
  {
    icon: <Code2 size={26} />,
    title: "300+ LeetCode Solutions",
    description:
      "Consistent problem solver with deep understanding of data structures, algorithms, and computational efficiency.",
  },
  {
    icon: <CheckCircle2 size={26} />,
    title: "Production Ready Deployments",
    description:
      "Successfully built and deployed multiple client and personal projects using CI/CD pipelines on Vercel & AWS.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <motion.div
        className="achievements-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">Milestones</span>
        <h2 className="section-title">Achievements & Recognition</h2>
        <p className="section-subtitle">
          Highlights of accomplishments, certifications, and technical contributions.
        </p>
      </motion.div>

      <motion.div
        className="achievements-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {achievementsData.map((item, idx) => (
          <motion.div
            key={idx}
            className="achievement-card"
            variants={cardVariants}
          >
            <div className="achievement-icon-wrap">{item.icon}</div>
            <h3 className="achievement-title">{item.title}</h3>
            <p className="achievement-description">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;
