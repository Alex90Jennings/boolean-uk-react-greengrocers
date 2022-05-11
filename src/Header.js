import StoreItemsLI from './StoreItemsLI.js'

function Header(props) {
  const storeState = props.storeState
  const addVegToCart = props.addVegToCart

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {storeState.map(() => (
          <StoreItemsLI
            id={storeState.id}
            vegName={storeState.name}
            price={storeState.price}
            addVegToCart={addVegToCart}
          />
        ))}
      </ul>
    </header>
  )
}

export default Header
