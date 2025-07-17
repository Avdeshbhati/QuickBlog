import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate, Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'

const Layout = () => {
  const navigate = useNavigate()
  const logout = () => {
    navigate('/')
  }
  return (
    <>
      <div className="flex items-center justify-between px-8 py-6 bg-white shadow rounded-b-xl mb-8">
        <img src={assets.logo} alt="" className='w-32 sm:w-40 cursor-pointer' onClick={() => navigate('/')} />
        <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer shadow hover:bg-primary/90 transition'>Logout</button>
      </div>
      <div className='flex h-[calc(100vh-70px)]'>
            <Sidebar/>
             <Outlet />
      </div>
   
    </>
  )
}

export default Layout
