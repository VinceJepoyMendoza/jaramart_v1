import React, { useContext, useReducer, useEffect, useCallback } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  products: [],
  categoryProducts: [],
  isLoading: false,
  isLoggedIn: false,
  singleProduct: {},
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = `https://fakestoreapi.com/products/`
  const categoryUrl = `https://fakestoreapi.com/products/category/`

  // Getting all the data from API
  useEffect(() => {
    const fetchData = async () => {
      loading()
      const resp = await fetch(url)
      const data = await resp.json()
      dispatch({ type: 'GET_PRODUCTS', payload: data })
    }
    fetchData()
  }, [url])

  const loginAcc = (username, password, redirect, setMessage, setIsError) => {
    dispatch({
      type: 'LOGIN_ACC',
      payload: { username, password, redirect, setMessage, setIsError },
    })
  }

  const logoutAcc = () => {
    dispatch({ type: 'LOGOUT_ACC' })
  }

  const loading = () => {
    dispatch({ type: 'LOADING' })
  }

  // getting category products from categoryProducts
  const getCategoryItems = useCallback(
    async (cgryTitle) => {
      loading()
      const resp = await fetch(`${categoryUrl}${cgryTitle}`)
      const data = await resp.json()
      dispatch({ type: 'GET_CATEGORY_ITEMS', payload: data })
    },
    [categoryUrl]
  )

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
  const toggleWishlist = () => {
    dispatch({ type: 'TOGGLE_WISHLIST' })
  }

  // Toggle isInCart
  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        loginAcc,
        logoutAcc,
        loading,
        getCategoryItems,
        fetchSingleProduct,
        toggleWishlist,
        toggleCart,
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
