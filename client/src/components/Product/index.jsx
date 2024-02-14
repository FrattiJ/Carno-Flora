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
        className="rounded-t-lg object-cover w-full h-48 md:h-64"
      />
      <div className="w-full">
        <div className="flex justify-between items-center p-1 w-full bg-[#588157]">
          <h3 className="font-bold">{name}</h3>
          <p className="italic">${price}</p>
        </div>
        <div className="flex flex-col bg-[#A3B18A] rounded-b-lg shadow-lg">
          <p className="flex justify-between items-center p-1 w-full">
            {description}
          </p>
          <div className="flex justify-center"> {/* Center the button */}
            <button onClick={handleAddToCart} className="bg-[#588157] text-white px-4 py-2 rounded hover:bg-[#3A5A40]">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
