import React, { useEffect } from 'react'

const LoginAlert = ({ msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)

    return () => clearTimeout(timeout)
  }, [removeAlert])

  return <small className='popup-error'>{msg}</small>
}

export default LoginAlert
