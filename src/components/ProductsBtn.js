import React from 'react'
import { FiSearch, FiHeart } from 'react-icons/fi'
import { BsCart3 } from 'react-icons/bs'

const ProductsBtn = ({ id }) => {
  return (
    <div className='product-card__btn'>
      <button type='button' className='btn'>
        <FiHeart />
      </button>
      <a
        href={`/product/${id}`}
        target='_blank'
        rel='noreferrer'
        className='btn'
      >
        <FiSearch />
      </a>
      <button type='button' className='btn'>
        <BsCart3 />
      </button>
    </div>
  )
}

export default ProductsBtn
