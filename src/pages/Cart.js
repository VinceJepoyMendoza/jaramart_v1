import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import EmptySelected from '../components/EmptySelected'
import { BsStarFill } from 'react-icons/bs'
import { DiscountStrip } from './ProductOV'
import { GrClose } from 'react-icons/gr'
import { useGlobalContext } from '../context'

const Cart = () => {
  const { cart, isLoading, getProductTotal } = useGlobalContext()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  // Get single product's total
  useEffect(() => {
    getProductTotal(cart)
  }, [getProductTotal, cart])

  if (!cart.length) {
    return <EmptySelected title='products' page='cart' />
  }

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <DiscountStrip />
      <section className='cart'>
        <h2 className='selected-h3'>Your Cart</h2>
        <CartBtn />
        <div className='cart-content'>
          <ProductDetails />
          <OrderSummary cart={cart} />
        </div>
      </section>
    </>
  )
}

// All products in cart
const ProductDetails = () => {
  const { removeCartItem, toggleAmount, cart } = useGlobalContext()

  const generateStars = (rating) => {
    const finalRate = Math.round(rating)
    let stars = []
    for (let i = 0; i < finalRate; i++) {
      stars.push(<BsStarFill key={i} />)
    }
    return stars
  }

  return (
    <div className='cart-content__products'>
      {cart.map((product) => {
        const {
          id,
          title,
          image,
          amount,
          price,
          rating: { rate, count },
        } = product
        return (
          <article key={`cart product ${id}`}>
            <button
              type='button'
              className='btn btn-cart-remove'
              title='Remove Item?'
              onClick={() => removeCartItem(id)}
            >
              <GrClose />
            </button>
            <img src={image} alt={title} />
            <div className='cart-content__info'>
              <div className='cart-content__info__details'>
                <p>
                  <b>Product:</b> {title}
                </p>
                <p>
                  <b>ID:</b> {id}
                </p>
                <p>
                  <b>Rating: </b> {generateStars(rate)} ({count})
                </p>
              </div>
              {/* Amount and price */}
              <aside>
                <span>
                  <button
                    type='button'
                    className='btn'
                    onClick={() => toggleAmount(id, 'dec')}
                  >
                    -
                  </button>
                  <p>{amount}</p>
                  <button
                    type='button'
                    className='btn'
                    onClick={() => toggleAmount(id, 'inc')}
                  >
                    +
                  </button>
                </span>
                <h3>${price}</h3>
              </aside>
            </div>
          </article>
        )
      })}
    </div>
  )
}

const OrderSummary = () => {
  return (
    <aside>
      <h3>ORDER SUMMARY</h3>
      <div>
        <p>SubTotal</p>
        <p>$80.0</p>
      </div>
      <div>
        <p>Estimated Shipping</p>
        <p>$5.90</p>
      </div>
      <div>
        <p>Shipping Discount</p>
        <p>- $5.90</p>
      </div>
      <div className='lead'>
        <p>Total</p>
        <p>$80.0</p>
      </div>
      <button type='button' className='btn'>
        Check out
      </button>
    </aside>
  )
}

const CartBtn = () => {
  const { clearCart } = useGlobalContext()

  return (
    <div className='btn-cart'>
      <button
        type='button'
        className='btn btn-cart-header'
        title='Clear all products from cart?'
        onClick={clearCart}
      >
        Clear cart
      </button>
      <h3>Cart Total: $500.00</h3>
      <button type='button' className='btn btn-cart-header cart-checkout'>
        Checkout
      </button>
    </div>
  )
}

export default Cart
