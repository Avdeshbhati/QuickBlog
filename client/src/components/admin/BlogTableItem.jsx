
import React from 'react'
import { assets } from '../../assets/assets'

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
    const { title, createdAt } = blog
    const blogdate = new Date(createdAt)
    return (
        <tr className='border-y border-gray-399'>
            <th className='px-2 py-4'>{index}</th>
            <td className='px-2 py-4'>{title}</td>
            <td className='px-2 py-4 max-sm:hidden'>{blogdate.toLocaleDateString()}</td>
            <td className='px-2 py-4 max-sm:hidden'>
                <p className={`${blog.isPublished ? 'text-green-600' : 'text-orange-600'} font-semibold`}>
                    {blog.isPublished ? 'Published' : 'Unpublished'}
                </p>
            </td>
            <td className='px-2 py-4 flex text-xs gap-3 items-center'>
                <button className='border px-2 py-0.5 mt-1 rounded cursor-pointer flex items-center gap-2'>
                    <span>{blog.isPublished ? 'Unpublish' : 'Publish'}</span>
                    <img src={assets.cross_icon} alt="Delete" className='w-5 h-5 hover:scale-110 transition-all cursor-pointer ml-1' />
                </button>
            </td>
        </tr>
    )
}

export default BlogTableItem