import { motion } from 'framer-motion'
import { Code, Server, Database, Container, Brain, Map } from 'lucide-react'

export default function AboutMe() {
  const technologies = [
    { name: "PHP 8+", icon: <Code size={20} /> },
    { name: "Laravel", icon: <Server size={20} /> },
    { name: "Symfony", icon: <Server size={20} /> },
    { name: "React.js", icon: <Code size={20} /> },
    { name: "Vue.js", icon: <Code size={20} /> },
    { name: "PostgreSQL", icon: <Database size={20} /> },
    { name: "Docker", icon: <Container size={20} /> },
  ];

  return (
    <section id="about-me" className="section bg-card">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me & Resume
        </motion.h2>

        <div className="about-grid">
          <motion.div 
            className="about-column"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Core Technologies</h3>
            <div className="tech-tags">
              {technologies.map((tech, idx) => (
                <motion.div 
                  key={idx} 
                  className="tech-tag"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>

            <h3 className="mt-4">Professional Experience</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>Software Developer @ Przelewy24 (Nexi Group)</h4>
                <p className="timeline-date">04.2024 - Present</p>
                <p>Working at Poland's largest fintech company, developing and maintaining software using a microservices architecture (Symfony, Vue.js, React.js). Heavily refactoring legacy code and understanding complexities of high-security financial transactions.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>Co-Founder & IT Lead @ Illuminart.pl</h4>
                <p className="timeline-date">2024 - Present</p>
                <p>Running a custom e-commerce business. Built the entire IT infrastructure using Shopware 6 (PHP) with full CI/CD pipelines. Used AI tools to compress development time significantly.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>Full-Stack Developer @ Caret.pro</h4>
                <p className="timeline-date">04.2020 - 04.2024</p>
                <p>Co-developed a large B2B application used by over 600 dealers across Europe. Stack: Symfony, API Platform, VueJS, RabbitMQ.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-column"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Featured Side-Projects</h3>
            <ul className="project-list">
              <li>
                <strong>Marketing Data AI Agent:</strong> A custom AI agent built to analyze GA4, Google Ads, and Search Console data.
              </li>
              <li>
                <strong>Crypto Trading App:</strong> Built with Laravel and Vue.js featuring real-time updates and websockets.
              </li>
              <li>
                <strong>Auto Repair Shop Manager (MVP):</strong> Built with Laravel, Inertia.js, and React to test Spec-Driven Development.
              </li>
            </ul>

            <h3 className="mt-4">Certifications & AI Focus</h3>
            <ul className="certification-list">
              <li><Brain size={16} /> Google "Umiejętności Jutra: AI"</li>
              <li><Brain size={16} /> 10xDevs - AI in Software Development</li>
            </ul>

            <h3 className="mt-4">Beyond the Code</h3>
            <div className="hobby-card">
              <img src={`${import.meta.env.BASE_URL}assets/profile_hobby.jpg`} alt="Gravel Cycling" className="hobby-image" />
              <div className="hobby-info">
                <h4>Endurance Gravel Cycling</h4>
                <p>Riding up to 200km a day to reach the sea or mountains with friends is my favorite way to recharge.</p>
              </div>
            </div>
            <div className="hobby-card mt-2">
              <div className="hobby-info">
                <h4>Investing & Markets</h4>
                <p>I actively follow the stock market and crypto space, building my own tools to manage investments.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
