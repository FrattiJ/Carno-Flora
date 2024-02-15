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
    <div
      className="mx-auto my-8 p-4 flex flex-col items-center bg-[#bfc4ac] rounded-md shadow-lg"
      style={{ maxWidth: "90%", minHeight: "60vh", maxHeight: "80vh" }}
    >
      <h1
        className="text-center font-bold text-zinc-900 mb-4"
        style={{ fontSize: "3vh" }}
      >
        Today's Featured Items
      </h1>
      <div className="w-full h-3/4 overflow-hidden">
        <img
          src={image}
          alt={description}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-1/4 flex flex-col items-center justify-center bg-[#A3B18A] rounded-b-md p-2">
        <h2 className="font-bold text-zinc-800" style={{ fontSize: "2.5vh" }}>
          {name}
        </h2>
        <p className="italic text-zinc-800" style={{ fontSize: "2vh" }}>
          ${price}
        </p>
        <p className="text-center text-zinc-800" style={{ fontSize: "2vh" }}>
          {description}
        </p>
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-[#588157] text-white px-6 py-2 rounded hover:bg-[#3A5A40]"
          style={{ fontSize: "2vh" }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Jumbotron;
