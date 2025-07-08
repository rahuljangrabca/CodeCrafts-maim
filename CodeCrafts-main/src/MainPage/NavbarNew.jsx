import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Codecrafts from '../codecrafts.png';
import Account from '../user-account/Account';

export default function NavbarNew() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUserData = () => {
      try {
        const storedData = localStorage.getItem('userdata');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          if (parsedData?.uname) {
            setUserData(parsedData);
          }
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('userdata');
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        <div className={styles.gridCard1}>
          <div className={styles.toggle} onClick={toggleMegaMenu}>
            <div className={`${styles.bar} ${isMegaMenuOpen ? styles.barActive : ''}`}></div>
            <div className={`${styles.bar} ${isMegaMenuOpen ? styles.barActive : ''}`}></div>
            <div className={`${styles.bar} ${isMegaMenuOpen ? styles.barActive : ''}`}></div>
          </div>
          
          <div>
            <Link to="/design" className={styles.navLink}>Design</Link>
            <Link to="/template" className={styles.navLink}>Template</Link>
          </div>
        </div>

        <div className={styles.gridCard2}>
          <div className={styles.logo}>
            <img src={Codecrafts} alt="CodeCrafts Logo" />
          </div>
        </div>

        <div className={styles.gridCard3}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
          
          {isLoading ? (
            <div className={styles.loading}>...</div>
          ) : userData?.uname ? (
            <Link to="/my-account" className={styles.username}>
              {userData.uname[0].toUpperCase()}
            </Link>
          ) : (
            <Link to="/login" className={styles.navLink}>Login</Link>
          )}
        </div>
      </nav>

      {isMegaMenuOpen && (
        <div className={styles.megaMenu}>
          <div className={styles.megaMenuContainer}>
            <div className={styles.megaMenuColumn}>
              <h3>Design Resources</h3>
              <ul className={styles.megaMenuList}>
                <li><Link to="/components" className={styles.megaMenuLink}>UI Components</Link></li>
                <li><Link to="/colors" className={styles.megaMenuLink}>Color Palettes</Link></li>
                <li><Link to="/typography" className={styles.megaMenuLink}>Typography</Link></li>
                <li><Link to="/icons" className={styles.megaMenuLink}>Icon Libraries</Link></li>
              </ul>
            </div>
            <div className={styles.megaMenuColumn}>
              <h3>Templates</h3>
              <ul className={styles.megaMenuList}>
                <li><Link to="/templates/landing" className={styles.megaMenuLink}>Landing Pages</Link></li>
                <li><Link to="/templates/admin" className={styles.megaMenuLink}>Admin Dashboards</Link></li>
                <li><Link to="/templates/ecommerce" className={styles.megaMenuLink}>E-commerce</Link></li>
                <li><Link to="/templates/portfolio" className={styles.megaMenuLink}>Portfolio</Link></li>
              </ul>
            </div>
            <div className={styles.megaMenuColumn}>
              <h3>Resources</h3>
              <ul className={styles.megaMenuList}>
                <li><Link to="/tutorials" className={styles.megaMenuLink}>Tutorials</Link></li>
                <li><Link to="/docs" className={styles.megaMenuLink}>Documentation</Link></li>
                <li><Link to="/community" className={styles.megaMenuLink}>Community</Link></li>
                <li><Link to="/support" className={styles.megaMenuLink}>Support</Link></li>
              </ul>
            </div>
            <div className={styles.megaMenuColumn}>
              <h3>Featured</h3>
              <div className={styles.featuredItem}>
                <h4>New Course</h4>
                <p>React Design Patterns for Modern Applications</p>
                <Link to="/courses/react" className={styles.featuredLink}>Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}