function StoreItemsLI(props) {
  const id = props.id
  const vegName = props.vegName
  const addvegtocart = props.addvegtocart

  return (
    <li>
      <img
        src={process.env.PUBLIC_URL + `./assets/icons/${id}.svg`}
        alt={vegName}
      />
      <button>Add veg to cart</button>
    </li>
  )
}

export default StoreItemsLI
