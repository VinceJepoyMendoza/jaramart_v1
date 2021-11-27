import React from 'react'
import { FiSearch, FiHeart } from 'react-icons/fi'
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router'

const ProductsBtn = ({ id }) => {
  const navigate = useNavigate()

  // navigate to productOV and diplasy single product
  const displayProduct = () => {
    console.log(`clicked ${id}`)
    navigate(`/product/${id}`)
  }

  return (
    <div className='product-card__btn'>
      <button type='button' className='btn'>
        <FiHeart />
      </button>
      <button type='button' className='btn' onClick={displayProduct}>
        <FiSearch />
      </button>
      <button type='button' className='btn'>
        <BsCart3 />
      </button>
    </div>
  )
}

export default ProductsBtn
