import React from 'react'
import Home from '../Home/Home'
import Blogs from '../Blogs/Blogs'
import NewsLetter from '../NewsLetter/NewsLetter'

const HomeLayout = () => {
  return (
    <div>
        <Home/>
        <Blogs/>
        <NewsLetter/>
    </div>
  )
}

export default HomeLayout