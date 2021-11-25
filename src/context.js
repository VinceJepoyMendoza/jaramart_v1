import React, { useContext, useReducer, useEffect } from 'react'
import { products } from './data'
import reducer from './reducer'
// Importing dummy data
// import { products } from './data'

const AppContext = React.createContext()

const initialState = {
  products: [],
  // product: {
  //   id: 1,
  //   title: '',
  //   price: 0,
  //   category: '',
  //   image: '',
  //   description: '',
  //   rating: {
  //     rate: 0,
  //     count: 0,
  //   },
  // },
  isLoading: false,
  isLoggedIn: false,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = `https://fakestoreapi.com/products`

  // Getting all the data from API
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'LOADING' })
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

  return (
    <AppContext.Provider
      value={{
        ...state,
        loginAcc,
        logoutAcc,
        loading,
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
