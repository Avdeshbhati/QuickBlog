import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets'
import Moment from 'moment'

const Blog = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [commenrs, setComments] = useState([])
  const fetchComments = async () => {
    setComments(comments_data)
  }
  const addComment=async(e)=>{
    e.preventDefault()
  }
  useEffect(() => {
    const blog = blog_data.find(item => item._id === id)
    setData(blog)
    fetchComments()
  }, [id])

  return data ? (
    <div className='relative'>
      <img
        src={assets.gradientBackground}
        alt=""
        className='absolute -top-50 -z-10 opacity-50 pointer-events-none'
      />
      <Navbar />
      <div className='text-center mt-20 text-gray-600'>
        <p className='text-primary py-4 font-medium'>
          Published on {Moment(data.createdAt).format('MMMM Do YYYY')}
        </p>
        <h1 className='text-2xl sm:text-5xl font-bold max-w-2xl mx-auto text-gray-800 leading-tight tracking-tight'>
          {data.title}
        </h1>
        <h2 className='my-5 max-w-lg truncate mx-auto text-lg text-gray-500 font-medium'>
          {data.subTitle}
        </h2>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary shadow-sm'>
          Michael Brown
        </p>
      </div>

      <div className="mx-auto max-w-5xl my-12 flex flex-col items-center px-4">
        <img
          src={data.image}
          alt="Blog visual"
          className="w-full max-w-5xl max-h-[36rem] min-h-[18rem] object-cover rounded-2xl mb-10 shadow-lg border border-gray-200"
        />
        <div
          className="rich-text w-full max-w-2xl mx-auto text-base md:text-lg bg-white/95 p-8 rounded-xl shadow-md"
          dangerouslySetInnerHTML={{ __html: data.description }}>
        </div>
        {/* Comments Section */}
        <div className='mt-14 mb-10 max-w-3x1 mx-auto'>
          <p className='font-semibold mb-4'>Comments {comments_data.length}</p>
          <div className='flex flex-col gap-4'>
            {comments_data.map((item, index) => (
              <div key={index} className='relative bg-primary/2 border border-primary/5n max-w-xl p-4 rounded texxt-gray-700'>
                <div className='flex items-center gap-2 mb-2'>
                <img src={assets.user_icon} alt="" className='w-6' />
                <p className='font-medium'>{item.name}</p>
                </div>
                <p className='text-sm max-w-md ml-8'>{item.content}</p>
                <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{Moment(item.createdAt).fromNow()}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Comment Box*/ }
        <div className='max-w-3x1 mx-auto'>
          <p className='font-semibold mb-4'>Add your comment</p>
          <form onSubmit={addComment} className='flex flex-col items-start gap-4 max-w-lg'>
            <input type='text' placeholder='Your Name' className='w-full p-2 border border-gray-300 rounded outline-none'/>
            <textarea placeholder='Comment' className='w-full p-2 border border-gray-300 rounded outline-none h-48'></textarea>
            <button type='submit' className='bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointercon'>Submit</button>
          </form>
        </div>

      </div>
    </div>

  ) : <div>Loading...</div>
}

export default Blog
