import React, { useEffect } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import quill from 'quill'
import 'quill/dist/quill.snow.css';
const AddBlog = () => {

  const editorRef = React.useRef(null);
  const quillRef = React.useRef(null);

  const [image, setImage] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [subTitle, setSubTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [isPublished, setIsPublished] = React.useState(false);

  const generateContent = async () => {

  }
  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }
  useEffect(() => {
    // Initiate quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new quill(editorRef.current, { theme: 'snow' });
    }
  }, [])
  return (
    <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
      <div className='bg-white w-full max-w-3xl p-6 md:p-10 sm:m-10 shadow rounded'>
        <p>Upload Document</p>
        <label htmlFor="image">
          <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" className='mt-2 h-16 rounded cursor-pointer' />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
        </label>
        <p className='mt-4'>Blog Title</p>
        <input type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' onChange={e => setTitle(e.target.value)} value={title} />

        <p className='mt-4'>Sub title</p>
        <input type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' onChange={e => setTitle(e.target.value)} value={subTitle} />

        <p className='mt-4'>Blog Description </p>
        <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
          <div
            ref={editorRef}
            className="min-h-[150px] border border-gray-300 rounded p-2 bg-white"
          ></div>
          <button
            className='absolute bottom-1 right-2 ml-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 px-5 py-2 rounded-full shadow-md hover:from-blue-700 hover:to-blue-500 transition-all duration-200 cursor-pointer'
            type='button'
            onClick={generateContent}
          >
            Generate with AI
          </button>
        </div>
        <p className='mt-4'>Select Category </p>
          <select onChange={e=> setCategory(e.target.value)} name="cateogry" className='mt-2 px-3 py-2 border text-gray-600 border-gray-300 outline-none rounded w-full max-w-lg' >
          <option value="">Select category</option>
          {blogCategories.map((item, index) => {
             return <option key={index} value={item}>{item}</option>
  })}
        </select>
        <div className='flex items-center gap-2 mt-4'>
          <p>Publish Now</p>
          <input type="checkbox" checked={isPublished} className='scale-125 cursor-pointer ' onChange={e=> setIsPublished(e.target.checked)} />
        </div>
        <div className='flex justify-start mt-8'>
          <button
            type='submit'
            className='bg-primary text-white font-semibold px-8 py-2 rounded-full shadow-md hover:bg-primary/90 transition-all duration-200 cursor-pointer text-base'
          >
            Add Blog
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddBlog
