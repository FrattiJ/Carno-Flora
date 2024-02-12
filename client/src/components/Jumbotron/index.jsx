

function Jumbotron({ id, name, description, price, imageUrl }) {
    return (
      <div className='max-w-[95%] m-auto h-full w-full flex flex-col justify-center items-center bg-[#DAD7CD]  rounded-md'>
        <h1 className='sm:text-3xl text-2xl font-bold text-zinc-900'>Todays Featured Items</h1>            
        <img src={imageUrl} alt={description} className='w-full h-3/5 object-cover scale-x-[1] z-[-1]' />
        <div className='flex justify-between items-center p-1 w-full h-1/2 bg-[#A3B18A] rounded-b-md'>
            <h2 className='flex sm:text-xl text-l p-2 text-zinc-800'>{name}</h2>
            <p className='flex sm:text-xl text-l p-2 text-zinc-800'>${price}</p>
            {/* <button onClick={addToCart}><img src="" alt="" /></button> */}
        </div>
      </div>
    );
  }
  
  export default Jumbotron;