import React from 'react';
import styles from './Main.module.css';

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <h2>Learning</h2>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className={styles.footerContent}>
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Digital Content</a></li>
            <li><a href="#">Micro Blogs</a></li>
            <li><a href="#">Train Your Employee</a></li>
          </ul>
        </div>

        <div className={styles.footerContent}>
          <h2>Partners</h2>
          <ul>
            <li><a href="#">W3schools</a></li>
            <li><a href="#">LeetCode</a></li>
            <li><a href="#">HackerBlocks</a></li>
            <li><a href="#">Unstop</a></li>
            <li><a href="#">CodeForces</a></li>
          </ul>
        </div>

        <div className={styles.footerContent}>
          <h2>Connect</h2>
          <ul>
            <li><a href="tel:+9306762262">+91 9306762262</a></li>
            <li><a href="mailto:rahulljangra019@gmail.com">rahulljangra019@gmail.com</a></li>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Facebook"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook" /></a>
              <a href="#" aria-label="Twitter"><img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="Twitter" /></a>
              <a href="#" aria-label="LinkedIn"><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn" /></a>
              <a href="#" aria-label="Instagram"><img src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png" alt="Instagram" /></a>
            </div>
          </ul>
        </div>
      </div>

    </footer>
      <div className={styles.copyright}>"
        <p>© {new Date().getFullYear()} CodeCrafts. All Rights Reserved | Design by <a href="https://www.linkedin.com/in/rahul-jangra-116069323/ "target="_blank" rel="noopener noreferrer">Rahul jangra</a></p>
      </div>
      </>
  );
}
