import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Modal, Row } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ICONS } from '../assets/images';
import OtpInput from 'react-otp-input';
import { message } from 'antd';
const Login = ({ setActiveForm, activeForm, ...props }) => {
    const [passwordVisibile, setPasswordVisibile] = useState(false);
    const [passwordVisibile2, setPasswordVisibile2] = useState(false);
    const [otp, setOtp] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const validationRules = {
        fullName: {
            required: "Full Name is required"
        },
        email: {
            required: "Email is required",
            pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address"
            }
        },
        gender: {
            required: "Gender is required"
        },
        dob: {
            required: "Date of Birth is required"
        },
        mobileNumber: {
            required: "Mobile Number is required"
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must be at least 8 characters long"
            }
        },
        confirmPassword: {
            required: "Confirm Password is required",
            validate: value => value === password.current || "The passwords do not match"
        },
        agreeTerms: {
            required: "You must agree to the Terms of Service and Privacy Policy"
        }
    };


    const onSubmit = async (data) => {
        try {
            const response = await axios.post("https://probable-phelia-ecb.koyeb.app/users/signup", data);
            message.success("Registration successful!");
            reset();

        } catch (error) {
            console.error("Registration error:", error);
            message.error("Registration failed. Please try again.");
        }
    };
    const togglePasswordVisibility = () => {
        setPasswordVisibile(!passwordVisibile);
    };
    const togglePasswordVisibility2 = () => {
        setPasswordVisibile2(!passwordVisibile2);
    };
    return (
        <>
            <Modal
                {...props}
                show={props.showLogin}
                size="xl"
                onHide={props.handleClose}
                centered
            >
                <Modal.Body className='w-auto'>
                    <>
                        <div className='auth-modal d-flex justify-content-center'>
                            <div className='d-flex align-items-center justify-content-center flex-column w-100 gap-2 '>
                                <div className='d-flex'>
                                    <img className='ecb-image' src={ICONS.loginecb} alt="Image2" />
                                    <img className="ecb" src={ICONS.logincontent} alt="Image" />
                                </div>
                                {activeForm === 'login' ? <>
                                    <h4 className="text-login">Login</h4>
                                    <div className="input-container3">
                                        <label htmlFor="email" className="input-label-cust">Email Id:</label>
                                        <div className="input-with-icon">
                                            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                                            <input type="email" id="email" className="input-field email " placeholder="Enter Email"  {...register("email", validationRules.email)}/>
                                             {errors.email && <span className="error-message-validationsLogin">{errors.email.message}</span>}
                                        </div>
                                    </div>
                                    <div className="input-container3">
                                        <label htmlFor="password" className="input-label-cust">Password:</label>
                                        <div className="input-with-icon">
                                            <FontAwesomeIcon icon={faLock} className="input-icon" />
                                            <input type="password" id="password" className="input-field password" placeholder="Enter Password" {...register("password", validationRules.password)} />
                                            {errors.password && <span className="error-message-validationsLogin">{errors.password.message}</span>}

                                        </div>
                                    </div>
                                    <a href="#" onClick={() => setActiveForm('forgetPassword')} className="forgot-password">Forgot Password?</a>
                                    <div className="remember-me-container">
                                        <input type="checkbox" id="rememberMe" className="remember-me-checkbox" />
                                        <label htmlFor="rememberMe" className="remember-me">Remember Me</label>
                                    </div>
                                    <button className="login-button-custom text-white"onClick={handleSubmit(onSubmit)}>Login</button>
                                </> : activeForm === 'signup' ? (
                                    <>
                                        <div className='customFields'>
                                            <h4 className="text-login-custom-1">Create an account</h4>
                                            <div className='modalcust7'>
                                                <div className="input-container-cust">
                                                    <label htmlFor="fullName" className="input-label-cust">Full Name:</label>
                                                    <div className="input-container-cust">
                                                        {/* <input type="text" id="fullName" className="input-field fullName custominput inputFullName" placeholder="Enter Full Name" /> */}
                                                        <input type="text" id="fullName" className="input-field fullName custominput inputFullName" placeholder="Enter Full Name" {...register("fullName", validationRules.fullName)} />
                                                        {errors.fullName && <span className="error-message-validationsLogin">{errors.fullName.message}</span>}
                                                    </div>
                                                </div>
                                                <div className="input-container-cust">
                                                    <label htmlFor="email" className="input-label-custommail">Email Id:</label>
                                                    <div className="input-with-icon">
                                                        <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                                                        <input type="email" id="email" className="input-field email custominput" placeholder="Enter Email" {...register("email", validationRules.email)} />
                                                        {errors.email && <span className="error-message-validationsLogin">{errors.email.message}</span>}
                                                    </div>
                                                </div>
                                                <div className="input-container-cust1">
                                                    <div className='customGender'>
                                                        <label htmlFor="gender" className="input-label-cust1">Gender:</label>
                                                        <select id="gender" className="input-field gender">
                                                            <option value="male">Select</option>
                                                            <option value="female">Female</option>
                                                            <option value="female">Male</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                    </div>
                                                    <div className='customDob'>
                                                        <label htmlFor="dob" className="input-label-cust1">Date of Birth:</label>
                                                        <input type="date" id="dob" className="input-field dob" />
                                                    </div>
                                                </div>
                                                <div className="input-container-cust">        <label htmlFor="mobileNumber" className="input-label-cust2 ">Mobile Number:</label>
                                                    <div className="input-container">
                                                        <input type="tel" id="mobileNumber" className="input-field mobileNumber custominput inputFullName"
                                                            placeholder="+91 | Enter Mobile Number"  {...register("mobileNumber", validationRules.mobileNumber)} />
                                                        {errors.mobileNumber && <span className="error-message-validationsLogin">{errors.mobileNumber.message}</span>}
                                                    </div>
                                                </div>
                                                <div className="input-container-cust">
                                                    <label htmlFor="password" className="input-label-cust">Password:</label>
                                                    <div className="input-with-icon">
                                                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                                                        <input type={passwordVisibile ? "text" : "password"} id="password" className="input-field password" placeholder="Enter Password"   {...register("password", validationRules.password)} />
                                                        {errors.password && <span className="error-message-validationsLogin">{errors.password.message}</span>}
                                                        <FontAwesomeIcon icon={passwordVisibile ? faEyeSlash : faEye} className="eye-icon customeye" onClick={togglePasswordVisibility} />
                                                    </div>
                                                </div>
                                                {/* <div className="input-container-cust">
                                                    <label htmlFor="confirmPassword" className="input-label-cust">Confirm Password:</label>
                                                    <div className="input-with-icon">
                                                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                                                        <input type={passwordVisibile2 ? "text" : "password"} id="password" className="input-field password" placeholder="Enter Password"  {...register("confirmPassword", validationRules.confirmPassword)} />
                                                        {errors.confirmPassword && <span className="error-message-validationsLogin">{errors.confirmPassword.message}</span>}
                                                        <FontAwesomeIcon icon={passwordVisibile2 ? faEyeSlash : faEye} className="eye-icon customeye" onClick={togglePasswordVisibility2} />
                                                    </div>
                                                </div> */}
                                                <div className="input-container-cust">
                                                    <input type="checkbox" id="agreeTerms" className="agree-terms-checkbox"  {...register("agreeTerms", validationRules.agreeTerms)}/>
                                                    <label htmlFor="agreeTerms" className="agree-terms">I agree to the Terms of Service and Privacy Policy.</label>
                                                </div>
                                                <div className='p-3 d-flex align-items-center justify-content-center'>
                                                    <button className="signup-button1 text-white" onClick={handleSubmit(onSubmit)}>Signup</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : activeForm === 'forgetPassword' ? (
                                    <>
                                        <div className="customForgotPassword1">
                                            <h4 className="text-forgotPassword1">Forgot Password</h4>
                                            <p className="customForgetContent">To reset your password, please enter your mobile number to receive a verification code.</p>
                                            <div className="input-container-custForgot">        <label htmlFor="mobileNumber" className="input-label-cust2 ">Mobile Number:</label>
                                                <div className="input-container">
                                                    <input type="tel" id="mobileNumber" className="input-field mobileNumber custominput inputFullName"
                                                        placeholder="+91 | Enter Mobile Number" />
                                                </div>
                                            </div>
                                            <div className='p-3 d-flex align-items-center justify-content-center'>
                                                <button className="forgotPassword-button-custom text-white" onClick={() => setActiveForm('verification')}>Send OTP</button>
                                            </div>
                                        </div>
                                    </>
                                ) : activeForm === 'verification' ? (<>
                                    <div className='custom-container-otp'>
                                        <h4 className='custom-verify-heading'>Verification Code</h4>
                                        <p className='custom-content-verify'>Please enter the Verification code sent to +60 95989 51547 </p>
                                        <div className="custom-input-otp">
                                            <OtpInput
                                                value={otp}
                                                onChange={setOtp}
                                                numInputs={4}
                                                renderSeparator={<span> </span>}
                                                renderInput={(props) => <input type="tel" {...props} />}
                                                containerStyle="otp-container"
                                                inputStyle="otp-input"
                                                autoFocus={false}
                                            />
                                        </div>
                                        <div className='p-3 d-flex align-items-center justify-content-center'>
                                            <button className="sendotp2-button-custom text-white" onClick={() => setActiveForm('createPassword')}>Send OTP</button>
                                        </div>
                                        <p className='text-verify-custom'>{`Didn't receive code`}?</p>
                                        <p className='text-verify-custom'>Resend code in 55s</p>
                                    </div>
                                </>) : activeForm === 'createPassword' ? (<>
                                    <div className='create-pasword-custom'>
                                        <h4 className='custom-createPassword-heading'>Create new password</h4>
                                        <p className='custom-content-createPassword'>Save the new password in safe place , if you forgot it then you have to do a forgot password again.</p>
                                        <div className="input-container-cust-createPassword">
                                            <label htmlFor="password" className="input-label-cust-createPassword">Create a new Password</label>
                                            <div className="input-with-icon">
                                                <FontAwesomeIcon icon={faLock} className="input-icon" />
                                                <input type={passwordVisibile ? "text" : "password"} id="password" className="input-field password" placeholder="Enter Password" />
                                                <FontAwesomeIcon icon={passwordVisibile ? faEyeSlash : faEye} className="eye-icon customeye" onClick={togglePasswordVisibility} />
                                            </div>
                                        </div>
                                        <div className="input-container-cust-createPassword">
                                            <label htmlFor="confirmPassword" className="input-label-cust-createPassword"> Confirm a new Password</label>
                                            <div className="input-with-icon">
                                                <FontAwesomeIcon icon={faLock} className="input-icon" />
                                                <input type={passwordVisibile2 ? "text" : "password"} id="password" className="input-field password" placeholder="Enter Password" />
                                                <FontAwesomeIcon icon={passwordVisibile2 ? faEyeSlash : faEye} className="eye-icon customeye" onClick={togglePasswordVisibility2} />
                                            </div>
                                        </div>
                                        <div className='p-3 d-flex align-items-center justify-content-center'>
                                            <button className="submit-button-custom text-white">Submit</button>
                                        </div>
                                    </div>
                                </>) : null}
                            </div>
                            <div className='p-0 w-100 d-flex align-items-center justify-content-center flex-column '>
                                <div className="background-image-container">
                                    <CloseButton onClick={props.handleClose} />
                                    <img className="background-image w-100 h-100" src={ICONS.backgroundImage} alt="Background" />
                                    {activeForm === 'login' || activeForm === 'forgetPassword' ? (<>
                                        <div className="text-over-image">
                                            <h5>New Here?</h5>
                                            <p>Unlocking Opportunities for Borrowers and Investors</p>
                                            <button className="signup-button-custom text-white" onClick={() => setActiveForm('signup')} >Signup</button>
                                        </div>
                                    </>
                                    ) : activeForm === 'signup' || activeForm === 'verification' || activeForm === 'createPassword' ? (<>
                                        <div className="text-over-image1">
                                            <h5>Have an account?</h5>
                                            <p>Unlocking Opportunities for Borrowers and Investors</p>
                                            <button className="login-button1" onClick={() => setActiveForm('login')}>Login</button>
                                        </div>
                                    </>) : null}
                                    <div className="grey-background2"></div>
                                </div>
                            </div>
                        </div>
                    </>
                </Modal.Body>
            </Modal>
        </>
    );
};
export default Login;