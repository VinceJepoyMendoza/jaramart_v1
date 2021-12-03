import React from 'react'
import img from '../img/empty.svg'
import { useNavigate } from 'react-router'
// import { useGlobalContext } from '../context'

const EmptySelected = ({ page, title }) => {
  const navigate = useNavigate()
  // const { scrollToProducts, productsY } = useGlobalContext()

  // smooth scroll to home > products
  const navigateToProducts = () => {
    navigate('/welcome', { replace: true })
    // scrollToProducts()
  }

  return (
    <section className='emptySelected'>
      <h3>Your {page} is currently empty</h3>
      <img src={img} alt='empty cart' />
      <button
        type='button'
        className='btn btn-empty'
        onClick={navigateToProducts}
      >
        Add {title} now
      </button>
    </section>
  )
}

export default EmptySelected
