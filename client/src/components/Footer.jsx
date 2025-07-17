import React from 'react'
import { assets, footer_data } from '../assets/assets'
import { dimensionValueTypes } from 'motion/react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='px-6 md:px-20 lg:px-24 xl:px-32 bg-primary/3'>
      <div className='flex flex-col md:flex-row items-start justify-between py-10 gap-10 border-b border-gray-500 text-gray-700'>
            <div>
                <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
                <p className='max-w-[410px] mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quidem possimus architecto nisi harum cupiditate, iste aliquid earum necessitatibus ad, non aut sequi debitis porro minus inventore tempore molestias tenetur!</p>
            </div>
            <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
                {footer_data.map((section,index)=> (
                    <div key={index}>
                            <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
                            <ul className='text-sm space-y-2'>
                                {section.links.map((links,i)=>(
                                  <li key={i}>
                                    <a href="#" className='hover:underline transition'>{links}</a>
                                  </li>
                                ))}
                            </ul>
                    </div>
                ))}
            </div>
      </div>
       <p className='py-4 text-center text-sm md:text-base text-gray-500'>
            Copyright 2025 © QuickBlog - All Rights Reserved. 
        </p>
    </div>
    
  )
}

export default Footer
