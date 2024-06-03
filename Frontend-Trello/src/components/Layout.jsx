import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
function Layout({ token }) {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    if (token) {
      navigate('/dashboard')
    }
    setLoading(false)
  }, [token])
  return loading ? (<div>Loading...</div>) : (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout