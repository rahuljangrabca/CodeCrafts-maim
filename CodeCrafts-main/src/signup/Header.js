import React from 'react';
import styles from './Signup.module.css';
import codecraft from "../codecrafts.png";

function Header() {
    return (
        <div className={styles.heading}>
            <img src={codecraft} className={styles.codeCraftLogo} alt="CodeCraft Logo"></img>
        </div>
    );
}

export default Header;