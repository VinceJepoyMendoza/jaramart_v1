import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiHeart } from 'react-icons/fi'
import { BsCart3 } from 'react-icons/bs'
import { useGlobalContext } from '../context'

const ProductsBtn = ({ id }) => {
  const { toggleWishlist, toggleCart } = useGlobalContext()

  return (
    <div className='product-card__btn'>
      <button type='button' className='btn' onClick={() => toggleWishlist(id)}>
        <FiHeart />
      </button>
      <Link to={`/product/${id}`} className='btn' replace>
        <FiSearch />
      </Link>
      {/* <a href={`/product/${id}`} className='btn'>
        <FiSearch />
      </a> */}
      <button type='button' className='btn' onClick={() => toggleCart(id)}>
        <BsCart3 />
      </button>
    </div>
  )
}

export default ProductsBtn
