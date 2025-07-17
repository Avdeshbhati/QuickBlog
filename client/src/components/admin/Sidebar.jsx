import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-2 p-4 bg-white border-r border-gray-200 h-full w-64'>
      <NavLink end={true} to='/admin' className={({ isActive }) => 'flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors ' + (isActive ? 'bg-gray-200' : '')}> 
        <img src={assets.home_icon} alt="" className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Dashboard</p>
      </NavLink>
      <NavLink to='/admin\addBlog' className={({ isActive }) => 'flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors ' + (isActive ? 'bg-gray-200' : '')}> 
        <img src={assets.add_icon} alt="" className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Add blogs</p>
      </NavLink>
      <NavLink to='/admin\ListBlog' className={({ isActive }) => 'flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors ' + (isActive ? 'bg-gray-200' : '')}> 
        <img src={assets.list_icon} alt="" className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>List blogs</p>
      </NavLink>
      <NavLink to='/admin\comments' className={({ isActive }) => 'flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors ' + (isActive ? 'bg-gray-200' : '')}> 
        <img src={assets.list_icon} alt="" className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Comments</p>
      </NavLink>
    </div>
  )
}

export default Sidebar
