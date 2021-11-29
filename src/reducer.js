// Reducers

// Importing user data
import { users } from './data'

const Reducer = (state, action) => {
  const { name, password: passDb } = users[0]
  let logStatus = false

  // Get all products
  if (action.type === 'GET_PRODUCTS') {
    return {
      ...state,
      products: action.payload,
      isLoading: false,
    }
  }

  // Get all products from certain category
  if (action.type === 'GET_CATEGORY_ITEMS') {
    return {
      ...state,
      categoryProducts: action.payload,
      isLoading: false,
    }
  }

  // Fetch single product from api
  if (action.type === 'FECT_SINGLE_PRODUCT') {
    return {
      ...state,
      singleProduct: action.payload,
      isLoading: false,
    }
  }

  if (action.type === 'TOGGLE_WISHLIST') {
    console.log('toggle wishtlist')
    const newProd = {
      ...state.singleProduct,
      isInWishlist: !state.singleProduct.isInWishlist,
    }
    return {
      ...state,
      singleProduct: newProd,
    }
  }

  if (action.type === 'TOGGLE_CART') {
    console.log('toggle cart')
    const newProd = {
      ...state.singleProduct,
      isInCart: !state.singleProduct.isInCart,
    }
    return {
      ...state,
      singleProduct: newProd,
    }
  }

  // Authentication related section
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
