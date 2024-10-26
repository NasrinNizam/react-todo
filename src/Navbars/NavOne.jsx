import React from 'react'
import { IoPersonAddSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

export const NavOne = () => {
  return (
    <nav className='w-full lg:py-5 py-3 bg-slate-200'>
       <div className="container">
         <div className="flex  justify-between">
            <div className=" ">
                <h2 className='text-lg md:text-2xl font-serif font-semibold'>MyToDo</h2>
            </div>
            <Link to='/login' className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:scale-95 duration-150 ">
              <IoPersonAddSharp size={20} />
            </Link>
        </div>
       </div>
    </nav>
  )
}
