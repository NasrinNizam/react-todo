import React from 'react'
import { Login } from '../components/login/Login'
import Lottie, { useLottie } from "lottie-react";
import todo2 from '../assets/todo2.json';
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <>
        <section className='w-full h-screen'>
          <div className="container">
            <div className="flex justify-around items-center flex-col md:flex-row">
              <Lottie animationData={todo2} loop={true} className='w-[200px] md:w-[400px] ' />
              <div className="flex flex-col justify-center items-center gap-5 ">
                <h1 className="text-xl md:text-2xl font-semibold"> Welcome to My To-Do</h1>
                <p className='hidden lg:block w-[350px] text-[16px] '>A to-do list organizes tasks, boosts productivity, and reduces stress by keeping priorities clear. It helps focus on one task at a time and brings a sense of accomplishment as items are completed, improving overall efficiency.</p>
                <Link to='/login' className='bg-yellow-100 px-5 py-3 rounded-lg text-lg font-semibold active:scale-95 '>Get Started</Link>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
