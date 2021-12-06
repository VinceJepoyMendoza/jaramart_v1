import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import EmptySelected from '../components/EmptySelected'
import { BsStarFill } from 'react-icons/bs'
import { DiscountStrip } from './ProductOV'
import { GrClose } from 'react-icons/gr'
import { useGlobalContext } from '../context'

const Cart = () => {
  const { cart, isLoading } = useGlobalContext()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  if (!cart.inCart?.length) {
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
          <OrderSummary />
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
      {cart.inCart.map((product) => {
        const {
          id,
          title,
          image,
          amount,
          price,
          total,
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
                  <b>Price:</b> ${price}
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
                <h3>${total}</h3>
              </aside>
            </div>
          </article>
        )
      })}
    </div>
  )
}

const OrderSummary = () => {
  const { cart, cartCheckOut } = useGlobalContext()
  return (
    <aside>
      <h3>ORDER SUMMARY</h3>
      <div>
        <p>SubTotal</p>
        <p>${cart.total}</p>
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
        <p>${cart.total}</p>
      </div>
      <Link to='/checkout' className='btn' onClick={() => cartCheckOut(cart)}>
        Check out
      </Link>
    </aside>
  )
}

const CartBtn = () => {
  const { clearCart, cart, cartCheckOut } = useGlobalContext()

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
      <h3>Cart Total: ${cart.total}</h3>
      <Link
        to='/checkout'
        className='btn btn-cart-header cart-checkout'
        onClick={() => cartCheckOut(cart)}
      >
        Checkout
      </Link>
    </div>
  )
}

export default Cart
