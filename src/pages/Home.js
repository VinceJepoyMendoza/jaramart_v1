import React from 'react'

// Import pages
import Header from '../components/Header'
import About from '../components/About'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Category from '../components/Category'

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Category />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
