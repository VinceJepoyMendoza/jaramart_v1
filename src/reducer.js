// Reducers

// Importing user data
import { users } from './data'

const Reducer = (state, action) => {
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
    const { name, password: passDb } = users[0]
    const { username, password, navigate, loginErr } = action.payload
    // Validating submit credentials
    if (!username || !password) {
      console.log('incomplete')
      loginErr(true, 'Please fill up the following')
    } else if (username === name && password === passDb) {
      // Redirect to home page (Logged in)
      navigate(-1)
      return {
        ...state,
        isLoggedIn: true,
      }
    } else {
      console.log('not match')
      loginErr(true, 'Username and Password does not match')
    }
  }

  if (action.type === 'LOGIN_ERR') {
    const { show, msg } = action.payload
    return {
      ...state,
      isLoggedIn: false,
      loginAlert: { show, msg },
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
