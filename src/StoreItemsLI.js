function StoreItemsLI(props) {
  const id = props.id
  const vegName = props.vegName
  const addVegToCart = props.addVegToCart

  return (
    <li>
      <img src={`./assets/icons/${id}.svg`} alt={vegName} />
      <button onClick={() => addVegToCart(vegName)}>Add veg to cart</button>
    </li>
  )
}

export default StoreItemsLI
