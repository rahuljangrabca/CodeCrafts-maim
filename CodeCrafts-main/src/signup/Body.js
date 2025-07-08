import React from 'react';
import styles from './Signup.module.css';
import { Link } from 'react-router-dom';
function Body() {
    return (
        <div className={`${styles.bodyContainer} container`}>
            <div className={styles.bodyItem1}>
                <h1>Sign Up to CodeCrafts</h1>
                <span>Already have an account?
                    <Link to='/login'>Login</Link>      
                    </span>
            </div>
        </div>
    );
}

export default Body;