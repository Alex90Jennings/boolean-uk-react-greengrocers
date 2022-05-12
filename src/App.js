import './styles/reset.css'
import './styles/index.css'

import Icons from './Icons.js'
import Header from './Header.js'
import Main from './Main.js'

import initialStoreItems from './store-items'
import { useState } from 'react'

function App() {
  const [cartState, setCartState] = useState([])
  const [storeState, setStoreState] = useState(initialStoreItems)

  const addVegToCart = vegName => {
    const newCartState = [...cartState]
    if (isVegInCart(vegName)) {
      for (let i = 0; i < newCartState.length; i++) {
        if (vegName === newCartState[i].name) {
          newCartState[i].quantity++
          setCartState(newCartState)
        }
      }
    } else {
      const newVeg = createNewCartLI(vegName)
      setCartState([...newCartState, newVeg])
    }
  }

  const isVegInCart = vegName => {
    for (let i = 0; i < cartState.length; i++) {
      if (vegName === cartState[i].name) {
        return true
      }
    }
  }

  const createNewCartLI = vegName => {
    for (let i = 0; i < storeState.length; i++) {
      if (vegName === storeState[i].name) {
        const newVegObject = { ...storeState[i], quantity: 1 }
        return newVegObject
      }
    }
  }

  const calcTotal = () => {
    let total = 0
    cartState.forEach(item => {
      const totalPriceForEachVeg = item.price * item.quantity
      total += totalPriceForEachVeg
    })
    return total
  }

  const addOneToCart = item => {
    const newCartState = [...cartState]
    item.quantity++
    setCartState(newCartState)
  }

  const removeOneFromCart = item => {
    const newCartState = [...cartState]
    if (item.quantity === 1) {
      const index = newCartState.indexOf(item)
      newCartState.splice(index, 1)
      setCartState(newCartState)
    } else {
      item.quantity--
      setCartState(newCartState)
    }
  }

  const sortAlphabettically = () => {
    cartState.sort((a, b) => a.name.localeCompare(b.name))
    setCartState([...cartState])
  }

  return (
    <div>
      <Header storeState={storeState} addVegToCart={addVegToCart} />
      <Main
        cartState={cartState}
        addOneToCart={addOneToCart}
        removeOneFromCart={removeOneFromCart}
        calcTotal={calcTotal}
        sortAlphabettically={sortAlphabettically}
      />
      <Icons />
    </div>
  )
}

export default App
