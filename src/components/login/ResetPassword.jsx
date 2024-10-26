import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export const ResetPassword = () => {
    const navigate = useNavigate()
    const auth = getAuth();

    const [email , setEmail] = useState('')

    const handleEmail=(event)=>{
        setEmail(event.target.value)
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
         if(!email){
            alert('please enter your email')
         }else{
          sendPasswordResetEmail(auth, email)
          .then(() => {
            alert('verify your email')
            navigate('/login')

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
          });
         }
         

    }
  return (
    <div>
               <div className="section w-full h-screen flex justify-center items-center">
       <div className='w-[300px] md:w-[400px] bg-[#B9E5E8] flex flex-col justify-center items-center gap-5 rounded-lg p-10'>
          <div className="flex justify-center items-center gap-3 flex-col md:flex-row">
            <input onClick={handleEmail} className='p-2 rounded-lg w-[250px] ' type="email" placeholder='Give your email' />
            <button onClick={handleSubmit}  className='px-5 py-2 bg-white rounded-lg'>Send</button>
          </div>
        <Link className='px-5 py-2 bg-white rounded-lg' to='/'>Home</Link>
    </div>
       </div>
    </div>
  )
}
