import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const NavbarTwo = () => {
  // ===== react state =====
  const [show , setShow] = useState(false)

  // ===== toggle show menu =====
  const handleToggle = () => {
    setShow(!show)
  }
  return (
    <nav className='w-full md:py-5 py-3 border-[1px] border-[#DFF2EB] '>
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="logo">
                    <h1 className='md:text-xl text-lg font-serif font-semibold'>MyToDo</h1>
                </div>
                <div className="flex justify-center items-center gap-5 relative">
                    <h3 className='text-[13px] md:text-[16px] '>Name</h3>
                  <div onClick={handleToggle} className="w-[40px] h-[40px] overflow-hidden ">
                    <img className='w-full h-full rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf49fton7yztt_1Xmzro_oc-xSEV9oa-JzXg&s" alt="profile" />
                  </div>
                  {
                    show &&
                    <div className="bg-white py-5 px-10 rounded-lg absolute top-[100%] right-0 ">
                      <ul className='flex flex-col justify-center items-center gap-8'>
                        <li className='hover:text-orange-300'><Link to='#'>Profile</Link></li>
                        <li className='hover:text-orange-300'><Link to='#'>Settings</Link></li>
                        <li className='hover:text-orange-300'><Link to='#'>LogOut</Link></li>
                      </ul>
                    </div>
                  }
                </div>
            </div>
        </div>
    </nav>
  )
}
