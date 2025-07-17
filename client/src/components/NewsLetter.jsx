import React from 'react'

function NewsLetter() {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
  <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a Blog</h1>
  <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to get latest Blog, new Tech and Exclusive news.</p>
  <form className='flex items-center justify-center gap-0 max-w-3xl mx-auto mt-8 mb-16 w-full'>
    <input
      className='border border-gray-300 rounded-l-md h-12 outline-none w-full px-3 text-gray-500'
      type="email"
      placeholder='Enter your email'
      required
    />
    <button
      type='submit'
      className='md:px-12 px-8 h-12 text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-r-md'
    >
      Subscribe
    </button>
  </form>
</div>
  )
}

export default NewsLetter
