import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Register from '../pages/Register'
function Layout() {
  return (
    <div>
        <Header />
        <Outlet /> //Home Page
        <Footer />
    </div>
  )
}

export default Layout