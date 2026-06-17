import { motion } from 'framer-motion'
import { CheckCircle, Target, Briefcase, Zap, Brain } from 'lucide-react'

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
        <div style={{ marginBottom: '4rem', marginTop: '-2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            A conversation agenda highlighting how my background aligns perfectly with Center Point's goals.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', opacity: 0.8 }}>
            <strong>Quick note:</strong> My written/reading English is fluent. My spoken English is currently communicative (B2). I haven't had the chance to use it daily, so I might be a bit stressed at the beginning, but I am very eager to immerse myself in an English-speaking environment and get up to speed quickly!
          </p>
        </div>

        <div className="features-grid">
          <motion.div 
            className="feature-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="feature-header">
              <div className="feature-icon"><Briefcase /></div>
              <h3>1. The Fintech Connection</h3>
            </div>
            <p>You are building a central platform for construction loans and bank verifications. At Przelewy24, Poland's leading payment processor, I work directly in the fintech sector. I understand distributed microservices architecture and the real-world pain points of bank integrations. I know that in financial software, stability, security, and correct business logic always come first.</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="feature-header">
              <div className="feature-icon"><Zap /></div>
              <h3>2. From "Ugly Duckling" to "Swan" (Mastering Legacy Code)</h3>
            </div>
            <p>I noticed your platform is currently built on PHP 8.4 with Vanilla JS and jQuery, without a modern framework. I have extensive experience in exactly this scenario. For the last two years, my main task has been transforming a legacy system into a modern architecture (Symfony + React/Vue).</p>
            <p className="mt-2">I know how to extract modules step-by-step without breaking the production environment. I also understand the "nightmare" of maintaining a dual system (old and new running parallel) and how to navigate it safely. I am highly experienced with Laravel (and refactoring non-standard code into the "Laravel way"), which aligns with your future modernization plans.</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="feature-header">
              <div className="feature-icon"><Target /></div>
              <h3>3. Aligned with Your Roadmap: First 12 Months</h3>
            </div>
            <p>I believe in small, iterative steps. My onboarding approach maps directly to your expectations:</p>
            <p className="mt-2"><strong>First 90 Days (Learning & Contributing):</strong> Focus on deeply understanding the system architecture, workflows, and business logic. I will tackle the backlog of bugs using the current Vanilla JS/jQuery stack and start contributing to small features to become fully comfortable with the codebase.</p>
            <p className="mt-2"><strong>3-6 Months (Improving Maintainability):</strong> Shift towards independently delivering features. Drawing from my experience with legacy systems, I will help improve the structure and maintainability of targeted parts of the platform without breaking the production environment.</p>
            <p className="mt-2"><strong>6-12 Months (Taking Ownership):</strong> Gradually take ownership of specific domains. At this stage, I will be actively contributing to the system's long-term evolution and consistency improvements, ensuring zero downtime for paying customers.</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="feature-header">
              <div className="feature-icon"><CheckCircle /></div>
              <h3>4. Business & Mindset Fit</h3>
            </div>
            <p><strong>B2B & Independence:</strong> I already operate as a B2B sole proprietor, which fits perfectly with Top Three Devs' contract structure.</p>
            <p className="mt-2"><strong>Entrepreneurial Perspective:</strong> As a co-owner of an active e-commerce store, I don't just look at code. I look at the product from a founder's perspective. I know that software must solve business problems and generate revenue first.</p>
            <p className="mt-2"><strong>Self-Management:</strong> You mentioned a culture with no micromanagement. Between my remote work, side projects, and business, managing my own time and delivering results asynchronously is my standard mode of operation.</p>
            <p className="mt-2"><strong>Startup DNA & Direct Impact:</strong> I thrive in smaller, agile teams rather than massive corporate structures. In my past experiences (and in my own e-commerce business), I enjoyed having a direct impact on the product, fast feedback loops, and a close working relationship with the founders. Your setup—working directly with the Lead Developer and the Founder without layers of middle management—is exactly the environment I am looking for.</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="feature-header">
              <div className="feature-icon"><Brain /></div>
              <h3>5. AI as a Business & Development Tool</h3>
            </div>
            <p>While I know the immediate priority is stabilizing the current system, I am a huge advocate for practical AI implementation. Thanks to courses like 10xDevs and Google Skills of Tomorrow, I use coding agents to understand legacy code faster and speed up daily tasks.</p>
            <p className="mt-2">Beyond the code, I look for business optimizations - like the AI agent I built for my e-commerce store to audit our marketing agency's ROI. In the future, I'd love to help brainstorm how AI could add value directly to the Center Point platform.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
