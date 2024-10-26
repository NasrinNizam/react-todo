import React from 'react'
import { NavbarTwo } from '../Navbars/NavbarTwo'
import { Outlet } from 'react-router-dom'

export const LayoutTwo = () => {
  return (
    <div>
        <NavbarTwo />
        <Outlet />
    </div>
  )
}
