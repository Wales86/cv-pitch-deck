import { motion } from 'framer-motion'
import { CheckCircle, Target, Briefcase, Zap } from 'lucide-react'

export default function WhyWorkTogether() {
  return (
    <section id="why-work-together" className="section">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why We Should Work Together
        </motion.h2>
        <p className="section-subtitle text-center">
          A conversation agenda highlighting how my background aligns perfectly with Central Point's goals.
        </p>

        <div className="features-grid">
          <motion.div 
            className="feature-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon"><Briefcase /></div>
            <h3>1. The Fintech Connection</h3>
            <p>You are building a central platform for construction loans. At Przelewy24, I work directly in the fintech sector. I understand distributed microservices and the real-world pain points of bank integrations. Stability and security always come first.</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="feature-icon"><Zap /></div>
            <h3>2. Mastering Legacy Code</h3>
            <p>Your platform uses PHP 8.4 with Vanilla JS and jQuery. For the last two years, my main task has been transforming exactly this kind of legacy system into a modern architecture (Symfony + React/Vue). I know how to extract modules step-by-step safely.</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="feature-icon"><Target /></div>
            <h3>3. The 30-60 Days "Kaizen" Plan</h3>
            <p><strong>Days 1-30:</strong> Embrace the chaos. Tackle the backlog of ~70 minor bugs using the current stack while migrating workflows to GitHub & CI/CD.</p>
            <p><strong>Days 30-60:</strong> Gradually take ownership. Plan architecture improvements and framework migration strategy with zero downtime.</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="feature-icon"><CheckCircle /></div>
            <h3>4. Business & Mindset Fit</h3>
            <p>As a B2B sole proprietor and an active e-commerce co-founder, I look at the product from a founder's perspective. I thrive in a culture with no micromanagement and am highly effective at self-management.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
