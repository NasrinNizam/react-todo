import React, { useState } from 'react'
import register from "../../assets/register.json";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './signUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification  } from "firebase/auth";


export const SignUp = () => {
   // ====== react states =====
   const [showPassword, setShowPassword] =useState(false);
   const [confirmShowPassword, setConfirmShowPassword] =useState(false);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [nameError, setNameError] = useState('');
   const [emailError, setEmailError] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [confirmPasswordError, setConfirmPasswordError] = useState('');
   const navigate = useNavigate();

   // ===== firebase variables =====
    const auth = getAuth();


   // ====== functions =====
   const handleName=(e)=>{
      setName(e.target.value)
       setNameError('')
   }
   const handleEamil=(e)=>{
       setEmail(e.target.value)
       setEmailError('')
   }
   const handlePassword=(e)=>{
       setPassword(e.target.value)
       setPasswordError('')
   }
   const handleConfirmPassword=(e)=>{
       setConfirmPassword(e.target.value)
       setConfirmPasswordError('')
   }
   const handleSubmit=(e)=>{
       e.preventDefault();
       if(!name){
          setNameError('Please enter name')
       }
       else if(!email){
           setEmailError('Please enter email')
       }
       else if(!password){
           setPasswordError('Please enter password')
       }
       else if(!confirmPassword){
           setConfirmPasswordError('Please enter confirm password')
       }
      else{
       if(password !== confirmPassword) {
           setConfirmPasswordError('Passwords do not match')
        }else{
           // ==== firebase code======
           createUserWithEmailAndPassword(auth, email, password)
           .then((userCredential) => { 
             const user = userCredential.user;
             //   === update profile===
             updateProfile(auth.currentUser, {
               displayName: name,
               photoURL: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
             })
             //   ======= navigate to login =======
           console.log(user)
           navigate('/')
           // ========= toastify =========
           toast.error('Verify your Email!', {
               position: "top-left",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
               transition: Bounce,
               });
               // ==== email verification
               sendEmailVerification(auth.currentUser)
           })
           .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
         // ====== password condition
           if(errorCode == 'auth/weak-password'){
               toast.error('weak password!', {
                   position: "top-right",
                   autoClose: 5000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: "dark",
                   transition: Bounce,
                   });
           }
          // ======= email condition
          if(errorCode == 'auth/email-already-in-use'){
              toast.error('this email already exist!', {
                  position: "top-right",
                  autoClose: 5000,
                   hideProgressBar: false,
                  closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: "dark",
                  transition: Bounce,
                  });
           }
           });
        }
      }
   }
  return (
    <>
        <section className='register'>
        <div className="container">
            <div className="main">
                <div className="lotti">
                  <Lottie animationData={register} loop={true} />;
                </div>
                <form className='form2' onSubmit={handleSubmit}>
                    <h2>Registration</h2>
                    {/* ===== Name ====== */}
                    <label className='headings'>Full Name:</label><br/>
                    <input onChange={handleName} type="text" placeholder='Your Email' />
                    <p className='err email'>{nameError} </p>
                    {/* ===== email ===== */}
                    <label className='headings'>Email:</label><br/>
                    <input onChange={handleEamil} type="email" placeholder='Your Email' />
                    <p className='err email'>{emailError} </p>
                    <label className='headings'>Password:</label><br/>
                    {/* ===== password ===== */}
                    <div className="passDivOne">
                        {
                            showPassword?
                            <FaEye onClick={() => setShowPassword(!showPassword)} className='icon' />
                            :
                            <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className='icon' />
                        }
                        <input onChange={handlePassword} className='pass' type={showPassword? 'text' : 'password'} placeholder='Password' />
                    </div>
                    <p className='err'>{passwordError} </p>
                    {/* ===== confirm password ===== */}
                    <label className='headings'>Confirm Password:</label><br/>
                    <div className="confirmPassDiv">
                        {
                            confirmShowPassword?
                            <FaEye onClick={() => setConfirmShowPassword(!confirmShowPassword)} className='icons' />
                            :
                            <FaEyeSlash onClick={() => setConfirmShowPassword(!confirmShowPassword)} className='icons' />
                        }
                        <input onChange={handleConfirmPassword} className='pass' type={showPassword? 'text' : 'password'} placeholder='Password' />
                    </div>
                    <p className='err'>{confirmPasswordError} </p>
                    <button type='submit'>Register</button>
                    <h5>Already have an account? <Link to='/login'><span>Login</span></Link></h5>
                </form>
            </div>
        </div>
    </section></>
  )
}
