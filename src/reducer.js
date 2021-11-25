// Reducers

// Importing user data
import { users } from './data'

const Reducer = (state, action) => {
  const { name, password: passDb } = users[0]
  let logStatus = false

  if (action.type === 'GET_PRODUCTS') {
    return {
      ...state,
      products: action.payload,
      isLoading: false,
    }
  }

  if (action.type === 'LOGIN_ACC') {
    const { username, password, redirect, setMessage, setIsError } =
      action.payload
    // Validating submit credentials
    if (!username || !password) {
      logStatus = false
      setMessage('please fill up username and password')
      setIsError(true)
    } else if (username === name && password === passDb) {
      // Redirect to home page (Logged in)
      redirect()
      setMessage('welcome')
      setIsError(false)
      logStatus = true
      console.log(`login success`)
    } else {
      logStatus = false
      setMessage("username and password didn't match")
      setIsError(true)
    }

    return {
      ...state,
      isLoggedIn: logStatus,
    }
  }

  if (action.type === 'LOGOUT_ACC') {
    return {
      ...state,
      isLoggedIn: false,
    }
  }

  if (action.type === 'LOADING') {
    return {
      ...state,
      isLoading: true,
    }
  }
}

export default Reducer
