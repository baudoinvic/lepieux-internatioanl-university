import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Campus from './Campus'
import Courses from './Courses'
import Quote from './Quote'
import Blog from './Blog'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Campus />
      <Courses />
      <Quote />
      <Blog />
      <Footer />
    </div>
  )
}

export default Homepage