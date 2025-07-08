import styles from '../signup/Signup.module.css'
import { Link } from 'react-router-dom';
function Bodylogin(){
    return(
      <div className={styles.bodyContainer}>
            <div className={styles.bodyItem1}>
            <h1>Login Up to CodeCrafts</h1>
            <span>Not Have an Account?</span>
                <span>
              <Link to='/signup'>Sign up</Link>
               </span>
            </div>
        </div>
    );
}
export default Bodylogin;