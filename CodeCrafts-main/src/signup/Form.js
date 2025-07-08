import React, { useState } from "react";
import styles from './Signup.module.css';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Form() {
    const [password, hidepassword] = useState(false);
    const [data, setdata] = useState({
        uemail: '',
        upassword: '',
        uname: '',
    });
    const [userdata, setuserdata] = useState(null);

    const getvalue = (event) => {
        const { name, value } = event.target;
        setdata(prev => ({ ...prev, [name]: value }));
    };

    // Import useNavigate from react-router-dom
    const navigate = useNavigate();

    // Update handleSubmit to navigate after successful registration
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const confirmEmail = form.elements.confirmEmail.value;
        const confirmPassword = form.elements.confirmPassword.value;

        if (userdata && userdata.uemail === data.uemail) {
            toast.error("User already exists");
            return;
        }
        if (data.uemail !== confirmEmail) {
            toast.error("Emails don't match");
            return;
        }
        if (data.upassword !== confirmPassword) {
            toast.error("Passwords don't match");
            return;
        }

        const currentuserdata = {
            uemail: data.uemail,
            upassword: data.upassword,
            uname: data.uname,
        };

        try {
            localStorage.setItem("userdata", JSON.stringify(currentuserdata));
            toast.success("Registration successful!");
            setuserdata(currentuserdata);
            setdata({
                uemail: '',
                upassword: '',
                uname: '',
            });

            setTimeout(() => {
                navigate("/"); 
            }, 2000); 
        } catch (error) {
            toast.error("Failed to save user data");
            console.error("LocalStorage error:", error);
        }
    };

    return (
        <div className={`${styles.formContainer} container`}>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                
                <div className={styles.formItem}>
                    <div className={styles.formChild}>
                        <input type="text" onChange={getvalue} value={data.uname} name="uname" required placeholder="Name"/>
                    </div>

                    <div className={styles.formChild}>
                        <input type="email" onChange={getvalue} value={data.uemail} name="uemail" autoComplete="email" required placeholder="Email"/>
                    </div>

                    <div className={styles.formChild}>
                        <input type="email" name="confirmEmail" required placeholder="Confirm Email"/>
                    </div>

                    <div className={styles.formChild}>
                        <input type={password ? 'text' : 'password'} onChange={getvalue} value={data.upassword} name="upassword" required placeholder="Choose a Password" />
                    </div>

                    <div className={styles.formChild}>
                        <input type={password ? 'text' : 'password'} name="confirmPassword" required placeholder="Confirm Password"/>
                        <button type="button" className={styles.showPassword} onClick={() => hidepassword(!password)}>
                            {password ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    <div className={styles.formChild}>
                        <button type="submit">Sign Up</button>
                    </div>
                </div>
            </form>

            <div className={styles.orLineContainer}>
                <div className={styles.orLine}></div>
                <span>or</span>
                <div className={styles.orLine}></div>
            </div>

            <div className={styles.googleLoginContainer}>
                <div className={styles.googleLogin}>
                    <div className={styles.googleLoginChild}>
                        <div className={styles.googleLoginImg}>
                            <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" alt="google-logo"/>
                        </div>
                        <span>Continue with Google</span>
                    </div>

                    <div className={styles.googleLoginChild}>
                        <div className={styles.googleLoginImg}>
                            <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="facebook-logo"/>
                        </div>
                        <span>Continue with Facebook</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;