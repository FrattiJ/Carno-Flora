import Placeholder from "../../assets/plant.jpg";
import { useCartContext } from "../../utils/GlobalState";

const Product = ({ id, name, description, price, image }) => {
  const { dispatch } = useCartContext();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, name, price, quantity: 1 },
    });
    dispatch({
      type: "SET_NOTIFICATION",
      payload: `${name} added to cart!`,
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-auto w-full rounded-md p-4 md:max-w-screen-sm">
      <img
        src={image || Placeholder}
        alt={name}
        className="rounded-t-lg object-cover scale-x-[1]"
      />
      <div>
        <div className="flex justify-between items-center p-1 w-full bg-[#588157]">
          <h3>{name}</h3>
          <p>${price}</p>
        </div>
        <p className="flex justify-between items-center p-1 w-full bg-[#A3B18A] rounded-b-lg shadow-lg">
          {description}
        </p>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
