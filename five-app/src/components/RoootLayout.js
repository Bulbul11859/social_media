import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const RoootLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <h1>I am Foteer Part</h1>
    </div>
  )
}

export default RoootLayout
