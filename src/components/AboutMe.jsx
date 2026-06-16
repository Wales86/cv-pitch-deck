import { motion } from 'framer-motion'
import { Code, Server, Database, Container, Brain, Map } from 'lucide-react'

export default function AboutMe() {
  const devTechnologies = [
    { name: "PHP 8+", icon: <Code size={20} /> },
    { name: "Laravel", icon: <Server size={20} /> },
    { name: "Symfony", icon: <Server size={20} /> },
    { name: "React.js", icon: <Code size={20} /> },
    { name: "Vue.js", icon: <Code size={20} /> },
  ];

  const archTechnologies = [
    { name: "Microservices", icon: <Server size={20} /> },
    { name: "REST API", icon: <Server size={20} /> },
    { name: "Docker", icon: <Container size={20} /> },
    { name: "CI/CD", icon: <Server size={20} /> },
    { name: "PostgreSQL", icon: <Database size={20} /> },
  ];

  const modernTools = [
    { name: "AI-Assisted Development", icon: <Brain size={20} /> },
    { name: "Spec-Driven Development", icon: <Code size={20} /> },
    { name: "Coding Agents", icon: <Brain size={20} /> },
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
              {devTechnologies.map((tech, idx) => (
                <motion.div 
                  key={`dev-${idx}`} 
                  className="tech-tag"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>

            <h3 className="mt-4" style={{ fontSize: '1.2rem', marginBottom: '1rem', borderBottom: 'none', paddingBottom: 0 }}>Architecture & Ops</h3>
            <div className="tech-tags">
              {archTechnologies.map((tech, idx) => (
                <motion.div 
                  key={`arch-${idx}`} 
                  className="tech-tag"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>

            <h3 className="mt-4" style={{ fontSize: '1.2rem', marginBottom: '1rem', borderBottom: 'none', paddingBottom: 0 }}>Modern Tools</h3>
            <div className="tech-tags">
              {modernTools.map((tech, idx) => (
                <motion.div 
                  key={`mod-${idx}`} 
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
                <p>Working at Poland's largest fintech company, processing payments for top e-commerce platforms.<br/>
                Developing and maintaining software using a microservices architecture (Symfony, Vue.js, React.js).<br/>
                Working heavily with legacy code: refactoring, optimizing performance, and extracting whole modules into new, modern microservices.<br/>
                Understanding the complexities and pain points of bank integrations and high-security financial transactions.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>Co-Founder & IT Lead @ <a href="https://illuminart.pl" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Illuminart.pl</a></h4>
                <p className="timeline-date">2025 - Present</p>
                <p>Running a custom e-commerce business on B2B terms.<br/>
                Built the entire IT infrastructure and e-commerce platform using Shopware 6 (PHP).<br/>
                Implemented full CI/CD pipelines and advanced customizations for personalized products.<br/>
                Successfully utilized AI tools to compress months of development work into weeks.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>Full-Stack Developer @ Caret.pro (Automotive B2B)</h4>
                <p className="timeline-date">04.2020 - 04.2024</p>
                <p>Co-developed a large application used by over 600 dealers across Europe.<br/>
                Created financial monitoring modules for the treasury department.<br/>
                Stack: Symfony, API Platform, VueJS, Microservices, RabbitMQ.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>PHP Developer @ Macopedia (Poznań)</h4>
                <p className="timeline-date">01.2017 - 04.2020</p>
                <p><strong>Apteline.pl:</strong> Developed an e-commerce platform for a top Polish pharmacy client. Debugged and optimized using NewRelic and Kibana. Stack: Magento, Typo3.<br/>
                <strong>Benefitsystems.pl:</strong> Developed modules for integrating third-party applications with the Typo3 framework. Provided technical support to end-users.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>PHP Developer @ Couporando (Poznań)</h4>
                <p className="timeline-date">05.2015 - 12.2016</p>
                <p>Developed a voucher platform using PHP, HTML, CSS, jQuery, and MySQL.<br/>
                Debugged and tested the application for performance and accuracy.<br/>
                Developed modules for integrating third-party applications.</p>
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
                <strong>Marketing Data AI Agent (<a href="https://illuminart.pl" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Illuminart.pl</a>):</strong> A custom AI agent I built to analyze data from GA4, Google Ads, and Search Console. It tracks the changes implemented by our external marketing agency and correlates them with actual sales results so we know exactly what we are paying for. <a href="https://github.com/Wales86/illuminart-ads-agent/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" style={{ fontSize: '0.85rem', color: 'var(--accent-primary)' }}>[Link to GitHub Repo]</a>
              </li>
              <li>
                <strong>Crypto Trading App (API):</strong> A personal tool built with Laravel and Vue.js. Features real-time updates and websockets for live market data.
              </li>
              <li>
                <strong>Net-Worth & Asset Tracker (WIP):</strong> Currently developing a comprehensive tracking tool for personal finance, global index ETFs, and crypto portfolios.
              </li>
              <li>
                <strong>Auto Repair Shop Manager (10xDevs MVP):</strong> Built with Laravel, Inertia.js, and React to test Spec-Driven Development using AI tools. <a href="https://github.com/Wales86/fixflow" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" style={{ fontSize: '0.85rem', color: 'var(--accent-primary)' }}>[Link to GitHub Repo]</a>
              </li>
            </ul>

            <h3 className="mt-4">Certifications & AI Focus</h3>
            <ul className="certification-list">
              <li style={{ alignItems: 'flex-start' }}>
                <Brain size={16} style={{ marginTop: '4px' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Google "Umiejętności Jutra: AI"</span>
                  <div style={{ fontSize: '0.85rem', marginTop: '4px', display: 'flex', gap: '8px' }}>
                    <a href="https://cdn.umiejetnoscijutra.pl/certificates/66a8c03d-69f1-49ab-b22a-f3b62b6afe81" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Certificate</a>
                    <span style={{ color: 'var(--text-muted)' }}>|</span>
                    <a href={`${import.meta.env.BASE_URL}assets/business_development_suplement.pdf`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Supplement</a>
                  </div>
                </div>
              </li>
              <li style={{ alignItems: 'flex-start' }}>
                <Brain size={16} style={{ marginTop: '4px' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>10xDevs - AI in Software Development</span>
                  <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>
                    <a href="https://credsverse.com/credentials/605a58c5-6be7-4b4b-9756-1e3c8417449e" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Certificate</a>
                  </div>
                </div>
              </li>
            </ul>

            <h3 className="mt-4">Beyond the Code</h3>
            <div className="hobby-card">
              <img src={`${import.meta.env.BASE_URL}assets/profile_hobby.jpg`} alt="Gravel Cycling" className="hobby-image" />
              <div className="hobby-info">
                <h4>Endurance Gravel Cycling</h4>
                <p>I love long-distance bike trips. Riding up to 200km a day on my gravel bike to reach the sea or the mountains with friends is my favorite way to disconnect and recharge. I also enjoy multi-day bikepacking travels, exploring new countries and regions from the saddle.</p>
              </div>
            </div>
            <div className="hobby-card mt-2">
              <img src={`${import.meta.env.BASE_URL}assets/investing_chart.png`} alt="Investing Chart" className="hobby-image" />
              <div className="hobby-info">
                <h4>Investing & Markets</h4>
                <p>I actively follow the stock market and crypto space. I enjoy analyzing market trends and building my own tools (like the trading API and net-worth tracker mentioned above) to manage my investments. Always happy to chat about current market situations!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
