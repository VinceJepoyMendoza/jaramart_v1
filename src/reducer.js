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

  // Get all categories from api
  if (action.type === 'GET_CATEGORIES') {
    return {
      ...state,
      categories: action.payload,
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

  // Retrieving all products from wishlist
  if (action.type === 'COLLECT_INTEREST') {
    const wishes = state.products.filter((currProd) => currProd.isInWishlist)
    const inCart = state.products.filter((currProd) => currProd.isInCart)
    return {
      ...state,
      wishlist: wishes,
      cart: inCart,
    }
  }

  if (action.type === 'TOGGLE_WISHLIST') {
    console.log('toggle wishtlist')
    const newProd = state.products.map((currProd) => {
      if (currProd.id === action.payload) {
        return { ...currProd, isInWishlist: !currProd.isInWishlist }
      }
      return { ...currProd }
    })

    return {
      ...state,
      products: newProd,
    }
  }

  if (action.type === 'TOGGLE_CART') {
    console.log('toggle cart')
    const newProd = state.products.map((currProd) => {
      if (currProd.id === action.payload) {
        return { ...currProd, isInCart: !currProd.isInCart }
      }
      return { ...currProd }
    })
    return {
      ...state,
      products: newProd,
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

  // Open modal when toggling wishlist/cart if not logged in
  if (action.type === 'LOG_FIRST') {
    // Disabling scroll
    document.body.style.overflow = 'hidden'
    return { ...state, isModalOpen: true }
  }

  if (action.type === 'CLOSE_MODAL') {
    document.body.style.overflow = ''
    return { ...state, isModalOpen: false }
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

  return { ...state }
}

export default Reducer
