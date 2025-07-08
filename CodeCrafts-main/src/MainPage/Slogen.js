import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Main.module.css';

export default function Slogen() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignupClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/signup');
    }, 1200); 
  };

  return (
    <div className={styles.slogenContainer}>
      <div className={styles.slogen}>
        <div className={styles.slogenContent1}>
          <h1>More than a website builder</h1>
        </div>
        <div className={styles.slogenContent2}>
          <h1 className={styles.animatedSlogen}>Your site should do more than look good</h1>
        </div>
        <div className={styles.slogenContent3}>
          <div className={styles.slogenContent3Items}>
            <p>
              As the first-ever website experience platform, CodeCrafts lets marketers, designers, and developers
              come together to build, manage, and optimize web experiences that get results.
            </p>
          </div>
          <div className={styles.slogenContent3Buttons}>
            <div className={styles.slogenContent3Items}>
              <button
                className={styles.startBuilding}
                onClick={handleSignupClick}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Start building'}
              </button>
            </div>
            <div className={styles.slogenContent3Items2}>
              <a href="/contact" className={styles.ctaButton}>Learn More</a>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className={styles.videoContainer}>
        <video
          src="https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/hero/hero-compress5.mp4"
          controls
          autoPlay
          muted
          loop
          className={styles.autoplayVideo}
        />
      </div>
    </div>
  );
}
