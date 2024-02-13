// import Placeholder from "../../assets/plant.jpg";

function Jumbotron({ id, name, description, price, image }) {
  return (
    <div className="m-auto w-full flex flex-col justify-center items-center bg-[#bfc4ac]  rounded-md">
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
      <div className="flex justify-between items-center p-1 w-full h-1/2 bg-[#A3B18A] rounded-b-md">
        <h2 className="flex sm:text-xl text-l p-2 text-zinc-800">{name}</h2>
        <h2 className="flex sm:text-xl text-l p-2 text-zinc-800">
          {description}
        </h2>
        <p className="flex sm:text-xl text-l p-2 text-zinc-800">${price}</p>
        {/* <button onClick={addToCart}><img src="" alt="" /></button> */}
      </div>
    </div>
  );
}

export default Jumbotron;
