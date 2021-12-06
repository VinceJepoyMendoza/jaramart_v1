import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useGlobalContext } from './context'
import ScrollToTopBtn from './components/ScrollToTopBtn'

// Import pages
import Home from './pages/Home'
import Product from './pages/ProductOV'
import WishList from './pages/WishList'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'
import Error from './pages/Error'
import SingleCategory from './pages/SingleCategory'

// Import navbar
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const { fetchData } = useGlobalContext()

  useEffect(() => {
    window.scrollTo({ top: 0 })
    // Fetch data every page refresh
    fetchData()
  }, [fetchData])

  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/welcome' />} />
          <Route path='/welcome' element={<Home />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/category/:cgryTitle' element={<SingleCategory />} />
          <Route path='/product/:prodId' element={<Product />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
        <ScrollToTopBtn />
      </Router>
    </main>
  )
}

export default App
