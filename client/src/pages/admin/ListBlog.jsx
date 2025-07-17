import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'

const ListBlog = () => {
  const [blogs, setBlogs] = useState([])
  const fetchBlogs = async () => {
    setBlogs(blog_data)
  }
  useEffect(() => {
    fetchBlogs()
  }, [])
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:ll-16 bg-blue-50/50'>
      <h1>All Blogs</h1>
      <div className='relative h-4/5 mt-4 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
        <table className='w-full text-base text-left text-gray-600'>
          <thead className='text-sm text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-4 text-center'>#</th>
              <th scope='col' className='px-6 py-4'>Title</th>
              <th scope='col' className='px-6 py-4 max-sm:hidden'>Date</th>
              <th scope='col' className='px-6 py-4 max-sm:hidden'>Status</th>
              <th scope='col' className='px-6 py-4 text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => {
              return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index + 1} />
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ListBlog
