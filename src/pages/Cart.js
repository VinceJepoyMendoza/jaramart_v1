import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import ProductsBtn from '../components/ProductsBtn'
import EmptySelected from '../components/EmptySelected'
import { useGlobalContext } from '../context'

const Cart = () => {
  const { cart, isLoading } = useGlobalContext()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  if (!cart.length) {
    return <EmptySelected title='products' page='cart' />
  }

  return isLoading ? (
    <Loading />
  ) : (
    <section className='cart'>
      {cart.map((product) => {
        const { id, title, image } = product
        return (
          <article className='cart-content' key={`cart product ${id}`}>
            <img src={image} alt={title} />
            <ProductsBtn {...product} />
          </article>
        )
      })}
    </section>
  )
}

export default Cart
