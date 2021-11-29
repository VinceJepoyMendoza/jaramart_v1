import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiHeart } from 'react-icons/fi'
import { BsCart3 } from 'react-icons/bs'
import { HiOutlineShoppingBag } from 'react-icons/hi'

import { useGlobalContext } from '../context'

const Navbar = () => {
  const { isLoggedIn, logoutAcc } = useGlobalContext()

  return (
    <nav className='navbar'>
      <div className='navbar-search'>
        <input type='text' id='search-input' placeholder='Search' />
        <FiSearch />
      </div>
      <Link to='/welcome' className='logo'>
        Jaramart
        <HiOutlineShoppingBag />
      </Link>
      {isLoggedIn ? (
        <div className='navbar-links'>
          <Link to='/wishlist' className='iconScale'>
            <FiHeart />
            <p className='badge'>4</p>
          </Link>
          <Link to='/cart' className='iconScale'>
            <BsCart3 />
            <p className='badge'>3</p>
          </Link>
          <Link to='/welcome' onClick={logoutAcc}>
            Log out
          </Link>
        </div>
      ) : (
        <div className='navbar-links'>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
