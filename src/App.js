import './styles/reset.css'
import './styles/index.css'

import Icons from './Icons.js'
import Header from './Header.js'
import Main from './Main.js'

import initialStoreItems from './store-items'
import { useState } from 'react'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

console.log(initialStoreItems)

function App() {
  // Setup state here...
  //const [cartState, setCartState] = useState(null)
  const [storeState, setStoreState] = useState(initialStoreItems)
  //const [total, setTotal] = useState(0)

  const addVegToCart = () => {
    //take selected veg
    //create a new li for store item
    //update setStoreState
  }

  return (
    <>
      <Header storeState={storeState} />
      <Main />
      <Icons />
    </>
  )
}

export default App
