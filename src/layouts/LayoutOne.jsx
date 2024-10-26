import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavOne } from '../Navbars/NavOne'

export const LayoutOne = () => {
  return (
    <>
      <NavOne />
      <Outlet />
    </>
  )
}
