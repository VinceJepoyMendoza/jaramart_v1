import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

// Import pages
import Home from './pages/Home'
import Product from './pages/ProductOV'
import Cart from './pages/Cart'
import WishList from './pages/WishList'
import Login from './pages/Login'
import Register from './pages/Register'
import Error from './pages/Error'
import SingleCategory from './pages/SingleCategory'

// Import navbar
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/welcome' />} />
          <Route path='/welcome' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/category/:cgryTitle' element={<SingleCategory />} />
          <Route path='/product/:prodId' element={<Product />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
