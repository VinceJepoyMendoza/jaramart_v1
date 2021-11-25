import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Login = () => {
  const { loginAcc } = useGlobalContext()
  const [message, setMessage] = useState('message')
  const [isError, setIsError] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    const userValue = userInput.current.value
    const passValue = passInput.current.value
    loginAcc(userValue, passValue, redirect, setMessage, setIsError)
  }

  const userInput = useRef(null)
  const passInput = useRef(null)
  const navigate = useNavigate()

  const redirect = () => {
    navigate('/welcome')
  }

  return (
    <section className='login'>
      <form className='login-form' onSubmit={submitHandler}>
        {isError && <div className='login-message'>{message}</div>}
        <div>
          <input
            type='text'
            ref={userInput}
            id='AccUser'
            placeholder='Username'
          />
        </div>
        <div>
          <input
            type='password'
            ref={passInput}
            id='AccPassword'
            placeholder='Password'
          />
        </div>
        <div>
          <button type='submit' className='btn'>
            Login
          </button>
        </div>
        <div>
          <small>
            Don't have an Account yet? <a href='/register'>Register</a>
          </small>
        </div>
      </form>
    </section>
  )
}

export default Login
