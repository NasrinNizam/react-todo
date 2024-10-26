import React, { useEffect } from 'react'
import { NavbarTwo } from '../Navbars/NavbarTwo'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const LayoutTwo = () => {
  const userSlice = useSelector((state)=>state.counterTwo.value)
  const navigate = useNavigate()
    useEffect(()=>{
      if(userSlice==null){
        navigate('/')
      }
    },[])

  return (
    <div>
        <NavbarTwo />
        <Outlet />
    </div>
  )
}
