import React, { useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { BiUser } from 'react-icons/bi'
import { HiOutlineKey } from 'react-icons/hi'
import LoginImg from '../img/loginimg.svg'
import LoginAlert from '../components/LoginAlert'

const Login = () => {
  const { loginAcc, loginAlert, loginErr } = useGlobalContext()

  const submitHandler = (e) => {
    e.preventDefault()
    const userValue = userInput.current.value
    const passValue = passInput.current.value
    loginAcc(userValue, passValue, navigate)
  }

  const userInput = useRef(null)
  const passInput = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Preventing page to load on bottom every redirects
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <section className='login'>
      <div className='login-content'>
        <form onSubmit={submitHandler}>
          <h3>Log in your account</h3>
          {loginAlert.show && (
            <LoginAlert {...loginAlert} removeAlert={loginErr} />
          )}
          <div>
            <label>Enter username</label>
            <input type='text' ref={userInput} />
            <BiUser className='input-svg' />
          </div>
          <div>
            <label>Enter password</label>
            <input type='password' ref={passInput} />
            <HiOutlineKey className='input-svg' />
          </div>
          <button type='submit' className='btn btn-login'>
            Login
          </button>
          <small>
            Don't have an account yet? <Link to='/register'>Create one</Link>
          </small>
        </form>
        <div>
          <img src={LoginImg} alt='Login' />
        </div>
      </div>
    </section>
  )
}

export default Login
