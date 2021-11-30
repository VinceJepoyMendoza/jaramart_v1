import React, { useContext, useReducer, useEffect, useCallback } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  products: [],
  categoryProducts: [],
  wishlist: [],
  cart: [],
  isLoading: false,
  isLoggedIn: true,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = `https://fakestoreapi.com/products/`
  const categoryUrl = `https://fakestoreapi.com/products/category/`

  const fetchData = useCallback(async () => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      const finalData = data.map((currProd) => {
        return { ...currProd, isInWishlist: false, isInCart: false }
      })
      dispatch({ type: 'GET_PRODUCTS', payload: finalData })
    } catch (error) {
      console.log('fetching data from api error')
    }
  }, [url])

  // Getting all the data from API
  useEffect(() => {
    loading()
    fetchData()
  }, [fetchData])

  // useEffect(() => {
  //   console.log('products changed')
  //   dispatch({ type: 'COLLECT_WISHLIST', payload: state.products })
  // }, [])

  // Getting category products from categoryProducts
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
  const toggleWishlist = (id) => {
    dispatch({ type: 'TOGGLE_WISHLIST', payload: id })
  }

  // Toggle isInCart
  const toggleCart = (id) => {
    dispatch({ type: 'TOGGLE_CART', payload: id })
  }

  // User Authentication related
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
