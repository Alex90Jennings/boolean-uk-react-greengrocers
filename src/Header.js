import StoreItemsLI from './StoreItemsLI.js'
import { useState } from 'react'

function Header(props) {
  const storeState = props.storeState
  const addVegToCart = props.addVegToCart
  let filteredStore = []

  const [filterBy, setFilterBy] = useState('no-filter')
  const filter = () => {
    if (filterBy === 'veg-filter') {
      for (let i = 0; i < storeState.length; i++) {
        if (storeState[i].type === 'vegetable') {
          filteredStore.push(storeState[i])
        }
      }
    }
    if (filterBy === 'fruit-filter') {
      for (let i = 0; i < storeState.length; i++) {
        if (storeState[i].type === 'fruit') {
          filteredStore.push(storeState[i])
        }
      }
    } else filteredStore = [...storeState]
  }
  filter()

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <div class="filter-by-type">
        <div></div>
        all
        <input
          class="no-filter"
          type="radio"
          name="no-filter"
          onChange={() => setFilterBy('no-filter')}
        />
        vegetables
        <input
          class="veg-filter"
          type="radio"
          name="veg-filter"
          onChange={() => setFilterBy('veg-filter')}
        />
        fruit
        <input
          class="fruit-filter"
          type="radio"
          name="fruit-filter"
          onChange={() => setFilterBy('fruit-filter')}
        />
        <div></div>
      </div>
      <ul className="item-list store--item-list">
        {filteredStore.map((item, index) => (
          <StoreItemsLI
            id={item.id}
            key={index}
            vegName={item.name}
            price={item.price}
            addVegToCart={addVegToCart}
          />
        ))}
      </ul>
    </header>
  )
}

export default Header
