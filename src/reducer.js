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
    const newData = state.products.filter(
      (item) => item.category === action.payload
    )
    return {
      ...state,
      categoryProducts: newData,
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
        return { ...currProd, isInCart: !currProd.isInCart, amount: 1 }
      }
      return { ...currProd }
    })
    return {
      ...state,
      products: newProd,
    }
  }

  // Clear cart
  if (action.type === 'CLEAR_CART') {
    const newData = state.products.map((prod) => {
      return { ...prod, isInCart: false }
    })
    console.log('cart cleared')
    return {
      ...state,
      products: newData,
    }
  }

  // Remove single product from cart
  if (action.type === 'REMOVE_CART_ITEM') {
    const newData = state.products.map((prod) => {
      if (prod.id === action.payload) {
        return {
          ...prod,
          isInCart: false,
        }
      }
      return { ...prod }
    })

    return {
      ...state,
      products: newData,
    }
  }

  // Toggling amount
  if (action.type === 'TOGGLE_AMOUNT') {
    const { id, type } = action.payload
    const newData = state.products.map((item) => {
      // Checking if the item clicked id matches the current id
      if (item.id === id) {
        // Checking actions
        if (type === 'inc') {
          // increase
          return { ...item, amount: item.amount + 1 }
        }
        if (type === 'dec') {
          // Set isInCart to false once reach < 1
          if (item.amount <= 1) {
            return { ...item, isInCart: false }
          }
          // decrease
          return { ...item, amount: item.amount - 1 }
        }
      }

      return item
    })
    return {
      ...state,
      products: newData,
    }
  }

  if (action.type === 'GET_PRODUCT_TOTAL') {
    console.log("calculating product's total")
    // const newData = action.payload.map((item) => {
    //   console.log('hello world')
    //   return item
    // })
    return {
      ...state,
      // cart: newData,
    }
  }

  // Setting products offset Y
  // if (action.type === 'LOCATE_PRODUCTS') {
  //   return {
  //     ...state,
  //     productsY: action.payload,
  //   }
  // }

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
      navigate('/welcome', { replace: true })
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
