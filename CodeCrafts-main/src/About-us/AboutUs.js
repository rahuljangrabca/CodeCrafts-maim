import React, { useEffect } from 'react';
import styles from './AboutUs.module.css';
import NavbarNew from '../MainPage/NavbarNew';
import Footer from '../MainPage/Footer';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutUs() {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const stepVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6
      }
    })
  };

  return (
    <>
      <NavbarNew />
      <motion.section 
        className={styles.aboutUs}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className={styles.container}>
          {/* Hero Section */}
          <motion.div 
            className={styles.aboutHero}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Building Digital <span className={styles.highlight}>Success Stories</span>
            </motion.h1>
            <motion.p 
              className={styles.lead}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We transform business visions into high-performing websites that drive results.
            </motion.p>
            <div className={styles.floatingShapes}>
              <div className={styles.shape1}></div>
              <div className={styles.shape2}></div>
              <div className={styles.shape3}></div>
            </div>
          </motion.div>

          {/* Our Story */}
          <motion.div 
            className={styles.aboutSection}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants}>Our Story</motion.h2>
            <motion.div className={styles.storyContent} variants={itemVariants}>
              <p>
                Founded in 2025, Began by a single Developer <strong>Harshit Singh</strong> of passionate developer 
                who believed every business deserves an exceptional online presence. Today, we've grown into 
                a full-service web development agency serving clients across multiple industries.
              </p>
              <motion.div 
                className={styles.statsGrid}
                variants={containerVariants}
              >
                <motion.div 
                  className={styles.statItem}
                  variants={statItemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className={styles.statNumber}>150+</span>
                  <span className={styles.statLabel}>Websites Delivered</span>
                </motion.div>
                <motion.div 
                  className={styles.statItem}
                  variants={statItemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Client Satisfaction</span>
                </motion.div>
                <motion.div 
                  className={styles.statItem}
                  variants={statItemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className={styles.statNumber}>1</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Our Approach */}
          <motion.div 
            className={`${styles.aboutSection} ${styles.approachSection}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants}>Our Development Process</motion.h2>
            <motion.div 
              className={styles.processSteps}
              variants={containerVariants}
            >
              {[
                {
                  num: 1,
                  title: "Discovery",
                  desc: "We analyze your business needs and target audience to create the perfect strategy."
                },
                {
                  num: 2,
                  title: "Design",
                  desc: "Custom designs that reflect your brand identity and engage your customers."
                },
                {
                  num: 3,
                  title: "Development",
                  desc: "Clean, efficient code built with modern technologies for optimal performance."
                },
                {
                  num: 4,
                  title: "Launch & Support",
                  desc: "We handle deployment and provide ongoing maintenance and updates."
                }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  className={styles.step}
                  variants={stepVariants}
                  custom={i}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className={styles.stepNumber}>{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className={styles.ctaSection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 
              animate={{
                scale: [1, 1.05, 1],
                transition: { repeat: Infinity, duration: 3 }
              }}
            >
              Ready to Build Your Website?
            </motion.h2>
            <p>
              We're currently accepting new projects for {new Date().getFullYear()}. 
              Let's discuss how we can help grow your business online.
            </p>
            <motion.button 
              className={styles.ctaButton}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#000"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Consultation
              <span className={styles.arrow}>→</span>
            </motion.button>
            <div className={styles.pulseEffect}></div>
          </motion.div>
        </div>
      </motion.section>
      <Footer />    
    </>
  );
}