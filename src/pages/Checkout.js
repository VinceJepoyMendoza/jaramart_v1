import React from 'react'
import { useGlobalContext } from '../context'

const Checkout = () => {
  const { cart } = useGlobalContext()

  return (
    <section className='checkout'>
      <h2>checkout</h2>
      <h3>{cart.total}</h3>
    </section>
  )
}

export default Checkout
