import React, { useState, useEffect } from 'react';
import styles from './AI.module.css';
import { Link } from 'react-router-dom';

export default function AIsection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiContent = {
    title: "Let's Start With AI",
    description: "Elevate your site with AI embedded across the CodeCrafts platform and extend its power with deep integrations with a growing ecosystem of AI-powered apps.",
    buttonText: "Discover AI",
    backgroundImage: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67ae3c267d585b9677fbe958_ai-bg.avif"
  };

  return (
    <div 
      className={styles.AIMainContainer}
      style={{ backgroundImage: `url(${aiContent.backgroundImage})` }}
    >
      <div className={`${styles.AiHeader} ${isVisible ? styles.visible : ''}`}>
        <h1>{aiContent.title}</h1>
        <p>{aiContent.description}</p>
        <Link to='/aiResponse' className={styles.btnAI}>
          <span>
            {aiContent.buttonText}
          </span>
        </Link>
      </div>
    </div>
  )
}
