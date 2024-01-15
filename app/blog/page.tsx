import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Suggest from '../components/Suggest'
import Main from '../components/Main'
import Intro from '../components/Intro'
import SampleBlogPage from '../components/blog'

const Blog = () => {
  return (
    <main>
      <NavBar />
      <div className='px-12'>
      <SampleBlogPage/>
      </div>
      <Footer />
    </main>
  )
}

export default Blog