import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLoaderData } from 'react-router-dom'

const BlogDetails = () => {
 const details = useLoaderData()
 const {_id, author_name, author_img, blog_img, blog_title, desc, publish_date} = details;

  return (
    <section className="container px-4 md:px-12 lg:px-32 my-12">
      <div className='flex flex-col items-center'>
        <img src={author_img} alt='authorimg' className='w-16 h-16 rounded-full'/>
        <h3 className='text-[#888888] mt-2'>{author_name}</h3>
        <p className='text-[#888888]'>{publish_date}</p>
      </div>
      <div className='container px-32 my-12 text-center'>
        <h3 className='text-3xl font-bold'>{blog_title}</h3>
        <img src={blog_img} alt='authorimg' className='my-6 rounded-xl h-[70vh] w-full object-cover'/>
        <p className='mt-4 text-[#888888]'>{desc}</p>
      </div>
    </section>
  )
}

export default BlogDetails