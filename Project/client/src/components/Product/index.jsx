//Basic product component

const Product = ({ id, name, description, price, imageUrl }) => {
    return (
      <div className="product">
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
      {/* <button onClick={addToCart}>Add to cart</button> */}
      </div>
    );
  };
  
  export default Product;
