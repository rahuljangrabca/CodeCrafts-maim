import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../signup/Signup.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormLogin() {
    const [showpass, setShowpass] = useState(false);
    const [userdata, setUserdata] = useState({
        remail: '',
        rpassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserdata(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const storedData = localStorage.getItem('userdata');
            
           
            if (!storedData) {
                toast.error('No account found. Please register first.');
                return;
            }

            const gotData = JSON.parse(storedData);
            
            
            if (!gotData?.uemail || !gotData?.upassword) {
                toast.error('Invalid account data. Please register again.');
                return;
            }

  
            if (userdata.remail === gotData.uemail && userdata.rpassword === gotData.upassword) {
                toast.success('Login successful!');
                setTimeout(() => navigate('/'), 1500);
            } else {
                toast.error('Invalid email or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error('Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const shouldShowToggle = userdata.rpassword.length > 0;

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formItem}>
                        <div className={styles.formChild}>
                            <input
                                name="remail"
                                type="email"
                                onChange={handleInputChange}
                                value={userdata.remail}
                                required
                                autoComplete="email"
                                placeholder="Email"
                                disabled={isLoading}
                            />
                        </div>

                        <div className={styles.formChild}>
                            <input
                                name="rpassword"
                                type={showpass ? 'text' : 'password'}
                                onChange={handleInputChange}
                                value={userdata.rpassword}
                                required
                                placeholder="Enter Your Password"
                                disabled={isLoading}
                            />
                            {shouldShowToggle && (
                                <button
                                    type="button"
                                    className={styles.showPassword}
                                    onClick={() => setShowpass(!showpass)}
                                    disabled={isLoading}
                                >
                                    {showpass ? "Hide" : "Show"}
                                </button>
                            )}
                        </div>

                        <div className={styles.formChild}>
                            <button 
                                type="submit" 
                                disabled={isLoading}
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </button>
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
                                <img
                                    src="https://img.icons8.com/fluency/48/000000/google-logo.png"
                                    alt="google-logo"
                                />
                            </div>
                            <span>Continue with Google</span>
                        </div>

                        <div className={styles.googleLoginChild}>
                            <div className={styles.googleLoginImg}>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
                                    alt="facebook-logo"
                                />
                            </div>
                            <span>Continue with Facebook</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormLogin;