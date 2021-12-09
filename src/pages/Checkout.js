import React, { useRef } from 'react'
import Modal from '../components/Modal'
import LoginAlert from '../components/LoginAlert'
import { DiscountStrip } from './ProductOV'
import { useNavigate } from 'react-router'
import { useGlobalContext } from '../context'

// Images
import bdo from '../img/banks/bdo.png'
import mastercard from '../img/banks/mastercard.png'
import gcash from '../img/banks/gcash.jpg'
import paypal from '../img/banks/Paypal-Logo.jpg'

const Checkout = () => {
  const { cart, confirmPayment, isLoggedIn, loginAlert, loginErr } =
    useGlobalContext()
  // Bank infos
  const cardNum = useRef(null)
  const expiration = useRef(null)
  const cvc = useRef(null)
  const cardOwner = useRef(null)
  // Client's info
  const fName = useRef(null)
  const lName = useRef(null)
  const address = useRef(null)
  const city = useRef(null)
  const country = useRef(null)
  const postal = useRef(null)
  const clientInfo = [fName, lName, address, city, country, postal]
  // const clientInfo = {
  //   firstName: fName.current.value || `Javier`,
  //   lastName: lName.current.value || `Sta. Cruz`,
  //   address: address.current.value || `Rolando R. Andaya Hwy`,
  //   city: city.current.value || `Ragay, Camarines Sur`,
  //   country: country.current.value || `Philippines`,
  //   postal: postal.current.value || 4410,
  // }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    confirmPayment(
      cardNum.current.value,
      expiration.current.value,
      cvc.current.value,
      cardOwner.current.value,
      clientInfo,
      navigate
    )
  }

  return (
    <>
      <DiscountStrip />
      {!isLoggedIn && <Modal />}
      <section className='checkout'>
        <div className='container'>
          <form onSubmit={handleSubmit}>
            {/* Client's info */}
            <div className='checkout-infos'>
              <h3>Shipping information</h3>
              <div>
                <label>
                  <small>First Name</small>
                  <input type='text' ref={fName} />
                </label>
              </div>
              <div>
                <label>
                  <small>Last Name</small>
                  <input type='text' ref={lName} />
                </label>
              </div>
              <div>
                <label>
                  <small>Address</small>
                  <input type='text' ref={address} />
                </label>
              </div>
              <div>
                <label>
                  <small>City</small>
                  <input type='text' ref={city} />
                </label>
              </div>
              <div>
                <label>
                  <small>Country</small>
                  <input type='text' ref={country} />
                </label>
              </div>
              <div>
                <label>
                  <small>Postal Code</small>
                  <input type='text' ref={postal} />
                </label>
              </div>
              {/* Client's contact info */}
              <div className='checkout-infos__contact'>
                <h3>Contact information</h3>
                <div>
                  <label>
                    <small>Email Address</small>
                    <input type='text' />
                  </label>
                </div>
                <div>
                  <label>
                    <small>Phone Number</small>
                    <input type='text' />
                  </label>
                </div>
              </div>
            </div>
            {/* Bank account payment */}
            <aside>
              <h3>Payment Details</h3>
              <div className='checkout-img'>
                <img src={bdo} alt='BDO' />
                <img src={mastercard} alt='Master card' />
                <img src={gcash} alt='Gcash' />
                <img src={paypal} alt='Paypal' />
              </div>
              {/* Error */}
              {loginAlert.show && (
                <LoginAlert {...loginAlert} removeAlert={loginErr} />
              )}
              <div>
                <label>
                  <small>Card number</small>
                  <input type='text' ref={cardNum} />
                </label>
              </div>
              <div>
                <label>
                  <small>Expiration data</small>
                  <input type='text' ref={expiration} />
                </label>
              </div>
              <div>
                <label>
                  <small>Cv code</small>
                  <input type='text' ref={cvc} />
                </label>
              </div>
              <div>
                <label>
                  <small>Card Owner</small>
                  <input type='text' ref={cardOwner} />
                </label>
              </div>
              <button type='submit' className='btn btn-payment'>
                Confirm Payment of ${cart.total}
              </button>
            </aside>
          </form>
        </div>
      </section>
    </>
  )
}

export default Checkout
