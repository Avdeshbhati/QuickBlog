import React, { useEffect } from 'react'
import { comments_data } from '../../assets/assets'
import { complex } from 'motion/react'
import CommentTableItem from '../../components/admin/CommentTableItem'

const Comments = () => {
  const [comments, setComments] = React.useState([])
  const [filter, setFilter] = React.useState('Not Approved')
  const fetchComments = async () => {
    setComments(comments_data)
  }
  useEffect(() => { fetchComments() }, [])
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
      <div className='flex items-center justify-between max-w-3xl' >
        <h1>Comments</h1>
        <div className='flex gap-2'>
          <button onClick={() => setFilter('Approved')}
            className={`shadow-custom-sm border  rounded-full px-4 py-1 cursor-pointer text-xs ${filter === 'Approved' ? 'text-primary' : 'text-gray-700'}`}>Approved</button>
          <button onClick={() => setFilter('Not Approved')}
            className={`shadow-custom-sm border  rounded-full px-4 py-1 cursor-pointer text-xs ${filter === 'Not Approved' ? 'text-primary' : 'text-gray-700'}`}>Not Approved</button>
        </div>
      </div>
      <div className='relative h-4/5 mt-4 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
        <table className='w-full text-sm text-left text-gray-600'>
          <thead className='text-xs text-gray-700 uppercase text-left'>
            <tr>
              <th scope='col' className='px-6 py-3 '>Blog Title & Comments</th>
              <th scope='col' className='px-6 py-3 max-sm:hidden'>Date</th>
              <th scope='col' className='px-6 py-3 '>Action</th>
            </tr>
          </thead>
          <tbody>
            {comments.filter((comment)=>{
              if(filter === 'Approved') return comment.isApproved===true
              return comment.isApproved===false
            }).map((comment,index)=><CommentTableItem key={comment._id} comment={comment} fetchComments={fetchComments} index={index + 1} />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Comments
