function Main(props) {
  const cart = props.cartState
  const removeOneFromCart = props.removeOneFromCart
  const addOneToCart = props.addOneToCart
  const calcTotal = props.calcTotal
  const sortAlphabettically = props.sortAlphabettically

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <button onClick={() => sortAlphabettically()}>
        Sort Alphabettically
      </button>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cart.map(item => (
            <li>
              <img
                class="cart--item-icon"
                src={`./assets/icons/${item.id}.svg`}
                alt={item.name}
              />
              <p>{item.name}</p>
              <button
                onClick={() => removeOneFromCart(item)}
                class="quantity-btn remove-btn center"
              >
                -
              </button>
              <span class="quantity-text center">{item.quantity}</span>
              <button
                onClick={() => addOneToCart(item)}
                class="quantity-btn add-btn center"
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">{`£${calcTotal().toFixed(2)}`}</span>
        </div>
      </div>
    </main>
  )
}

export default Main
