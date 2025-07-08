import React from 'react';
import styles from './Signup.module.css';

function Footer() {
    return (
        <div className={styles.footerContainerSignup}>
            <div className={`${styles.footerItemParentSignup} container`}>
                <div className={styles.footerItemSignup}> 
                    <span>* By signing up, you agree to our <a href="">Terms of Use</a> and acknowledge you've read our <a href="">Privacy Policy</a></span>
                </div>
                <div className={styles.footerItemSignup}>
                    <span>This site is protected by reCAPTCHA Enterprise. <a href="">Google's Privacy Policy</a> and <a href="">Terms of Service</a> Apply</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;