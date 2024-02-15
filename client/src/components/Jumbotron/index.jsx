import { useCartContext } from "../../utils/GlobalState";

function Jumbotron({ id, name, description, price, image }) {
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
    <div className="m-auto flex flex-col justify-center items-center bg-[#bfc4ac]  rounded-md">
      <h1 className="sm:text-3xl text-2xl font-bold text-zinc-900">
        Todays Featured Items
      </h1>
      <div className="w-full h-[600px] md:h-[700px] overflow-hidden">
        <img
          src={image}
          alt={description}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center p-1 w-full h-1/2 bg-[#A3B18A] rounded-b-md">
      <div className="flex justify-between items-center w-full">
        <h2 className="flex font-bold sm:text-xl text-l p-2 text-zinc-800">{name}</h2>
        <h2 className="flex sm:text-xl text-l p-2 text-zinc-800">
          {description}
        </h2>
        <p className="flex italic sm:text-xl text-l p-2 text-zinc-800">${price}</p>
      </div>
      <span className="w-[95%] border-b border-gray-500"></span>
      <div className="p-2">
        <button onClick={handleAddToCart} className="bg-[#588157] text-white px-4 py-2 rounded hover:bg-[#3A5A40]">Add to Cart</button>
      </div>
      </div>
    </div>
  );
}

export default Jumbotron;
