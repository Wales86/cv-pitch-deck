import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <div className="hero-text">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Leszek<br/>Walszewski
          </motion.h1>
          <motion.h2 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Backend PHP / Full-Stack Developer
          </motion.h2>
          <motion.p 
            className="tech-stack-preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Specializing in Fintech & E-commerce
          </motion.p>
          <motion.div 
            className="hero-note"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p>Backend PHP developer with over 10 years of experience, dedicated to self-development and continuous growth. With 6 years of full-stack development experience, currently working at Przelewy24, Poland's largest fintech company, developing and optimizing e-commerce payment solutions. Proficient in PHP, JavaScript, and frameworks such as Symfony, Laravel, VueJS, and React.js. I specialize in working with legacy code, refactoring, and system performance improvements. Leveraging AI-powered tools to boost development efficiency. Focused on delivering high-quality work on time and being a valuable team member.</p>
          </motion.div>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a href="#about-me" className="btn btn-primary">View My Profile</a>
            <a href="#why-work-together" className="btn btn-secondary">Why We Should Work Together</a>
          </motion.div>
        </div>
        <div className="hero-image-container">
           <motion.img 
             src="/cv-pitch-deck/assets/profile_photo.jpg" 
             alt="Leszek Walszewski" 
             className="profile-image"
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             whileHover={{ scale: 1.05 }}
           />
        </div>
      </motion.div>
    </section>
  )
}
