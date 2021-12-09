import React, {
  useContext,
  useReducer,
  useEffect,
  useCallback,
  // useRef,
} from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  products: [],
  categories: [],
  wishlist: [],
  cart: [],
  checkout: [],
  isModalOpen: false,
  isLoading: true,
  isLoggedIn: true,
  loginAlert: { show: false, msg: '' },
  // productsY: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = `https://fakestoreapi.com/products/`
  const categoriesUrl = `https://fakestoreapi.com/products/categories`
  // const productsOffsetY = useRef(null)

  const fetchData = useCallback(async () => {
    // fetching all products from api
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      // Adding more product properties
      const finalData = await data.map((currProd) => {
        return {
          ...currProd,
          amount: 1,
          total: currProd.price,
          isInWishlist: false,
          isInCart: false,
        }
      })
      dispatch({ type: 'GET_PRODUCTS', payload: finalData })
    } catch (error) {
      console.log('fetching data from api error')
    }

    // Fetching all categories from api
    try {
      const resp = await fetch(categoriesUrl)
      const data = await resp.json()
      dispatch({ type: 'GET_CATEGORIES', payload: data })
    } catch (error) {
      console.log('fetching data from api error')
    }
  }, [url, categoriesUrl])

  // Collect wishlist and cart
  useEffect(() => {
    dispatch({ type: 'COLLECT_INTEREST' })
    // dispatch({ type: 'GET_CART_TOTAL' })
  }, [state.products])

  const getCategoryItems = useCallback((cgryTitle) => {
    dispatch({ type: 'GET_CATEGORY_ITEMS', payload: cgryTitle })
  }, [])

  // Getting single products from api
  const fetchSingleProduct = useCallback(
    async (id) => {
      loading()
      const resp = await fetch(`${url}${id}`)
      const data = await resp.json()
      const newData = {
        ...data,
        isInWishlist: false,
        isInCart: false,
        amount: 1,
      }
      dispatch({ type: 'FECT_SINGLE_PRODUCT', payload: newData })
    },
    [url]
  )

  // Toggle isInWishlist
  const toggleWishlist = (id) => {
    if (state.isLoggedIn) {
      dispatch({ type: 'TOGGLE_WISHLIST', payload: id })
    } else {
      dispatch({ type: 'LOG_FIRST' })
    }
  }

  // Toggle isInCart
  const toggleCart = (id) => {
    if (state.isLoggedIn) {
      dispatch({ type: 'TOGGLE_CART', payload: id })
    } else {
      dispatch({ type: 'LOG_FIRST' })
    }
  }

  // Clear cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  // Remove single item from cart
  const removeCartItem = (id) => {
    dispatch({ type: 'REMOVE_CART_ITEM', payload: id })
  }

  // Toggle amount
  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }

  // Payment confirmation
  const confirmPayment = (
    cardNum,
    expiration,
    cvc,
    cardOwner,
    clientInfo,
    navigate
  ) => {
    dispatch({
      type: 'CONFIRM_PAYMENT',
      payload: {
        cardNum,
        expiration,
        cvc,
        cardOwner,
        clientInfo,
        navigate,
        loginErr,
      },
    })
  }

  // const scrollToProducts = () => {
  //   window.scrollTo({
  //     top: state.productsY,
  //     left: 0,
  //     behavior: 'smooth',
  //   })
  // }

  // Close modal
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  // User Authentication related
  const loginAcc = (username, password, navigate) => {
    dispatch({
      type: 'LOGIN_ACC',
      payload: { username, password, navigate, loginErr },
    })
  }

  // Setting and displaying login alert messsage
  const loginErr = (show = false, msg = '') => {
    dispatch({ type: 'LOGIN_ERR', payload: { show, msg } })
  }

  const logoutAcc = () => {
    dispatch({ type: 'LOGOUT_ACC' })
  }

  const loading = () => {
    dispatch({ type: 'LOADING' })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        fetchData,
        loginAcc,
        logoutAcc,
        loading,
        getCategoryItems,
        fetchSingleProduct,
        toggleWishlist,
        toggleCart,
        closeModal,
        loginErr,
        clearCart,
        removeCartItem,
        toggleAmount,
        confirmPayment,
        // scrollToProducts,
        // productsOffsetY,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }
