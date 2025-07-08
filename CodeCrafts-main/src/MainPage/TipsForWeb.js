import React from 'react';
import styles from './Main.module.css';
import { Link } from 'react-router-dom';

export default function TipsForWeb() {
  return (
    <div className={styles.tipsContainer}>
      <div className={styles.tipsItems}>
        <div className={styles.tipsItemsChild}>
          <h2>How to create a website </h2>
        </div>
        <div className={styles.tipsItemsChild}>
          <p>Follow these 7 simple steps to create a website today.</p>
        </div>
        <div className={styles.tipsItemsChild}>
          <span>
            <Link to='/pricing' className={styles.tipsGetStarted}>Get Started
            </Link>
          </span>
          <Link to='/contact' className={styles.tipsLearnMore}>Learn more</Link>
        </div>
      </div>

      <div className={styles.tipsItems2}>
        <div className={styles.tipsList}>
          <ul>
            <li>
              <span>
                <span className={styles.listBold}>Pick a platform. </span>
                <span>Sign up for a secure and reliable free website builder like CODECRAFTS</span>
              </span>
            </li>
            <li>
              <span>
                <span className={styles.listBold}>Plan out your website.</span>
                <span> Map out your goals, site structure and who your audience is.</span>
              </span>
            </li>
            <li>
              <span>
                <span className={styles.listBold}>Start creating. </span>
                <span>Choose from 900+ free templates or use the AI website builder.</span>
              </span>
            </li>
            <li>
              <span>
                <span className={styles.listBold}>Customize your website. </span>
                <span>Use the drag and drop editor and tailor your site to fit your brand.</span>
              </span>
            </li>
            <li>
              <span>
                <span className={styles.listBold}>Optimize for search engines.</span>
                <span>Increase your site's visibility with a suite of built-in SEO tools.</span>
              </span>
            </li>
            <li>
              <span>
                <span className={styles.listBold}>Publish your website.</span>
                <span> Register and connect a custom domain name and go live.</span>
              </span>
            </li>
            <li>
              <span>
                <span className={styles.listBold}>Promote and drive traffic.</span>
                <span> Use built-in marketing tools to grow and expand your reach.</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}