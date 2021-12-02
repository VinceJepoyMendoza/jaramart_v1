import React, { useContext, useReducer, useEffect, useCallback } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  products: [],
  categories: [],
  categoryProducts: [],
  wishlist: [],
  cart: [],
  isLoading: false,
  isLoggedIn: false,
  isModalOpen: false,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = `https://fakestoreapi.com/products/`
  const categoriesUrl = `https://fakestoreapi.com/products/categories`
  const categoryUrl = `https://fakestoreapi.com/products/category/`

  const fetchData = useCallback(async () => {
    // fetching all products from api
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      const finalData = await data.map((currProd) => {
        return { ...currProd, amount: 1, isInWishlist: false, isInCart: false }
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

  // Getting all the data from API
  useEffect(() => {
    loading()
    fetchData()
  }, [fetchData])

  useEffect(() => {
    dispatch({ type: 'COLLECT_INTEREST' })
  }, [state.products])

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

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
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
        closeModal,
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
