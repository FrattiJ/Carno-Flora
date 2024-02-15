import { useEffect } from 'react';
import { Link} from "react-router-dom";
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import { ADD_CART } from '../utils/mutations';
import { SEARCH_USER } from '../utils/queries';


function Success() {
  const [addCart] = useMutation(ADD_CART);
  const [addOrder] = useMutation(ADD_ORDER);


  useEffect(() => {
    async function sOrder() {
      const userId = localStorage.getItem("userId")
      console.log(userId)
      const data = SEARCH_USER(userId)
      console.log(data)
      
    }

            sOrder();
  }, []);

  useEffect(() => {
    async function sCart() {
      const userId = localStorage.getItem("userId")
      const cart =  localStorage.getItem(`cart_${userId}`)
      console.log(cart)
      console.log(userId)
      const Items = cart.map((item) => item._id);

      if (Items.length) {
        const { data } = await addCart({ variables: { Items } });
        const productData = data.addOrder.Items;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

            sCart();
  }, [addCart]);

  return (
    <div className="m-auto flex flex-col md:w-[75%] h-[700px] justify-center items-center bg-[#bfc4ac] rounded-md p-2">
        <h1 className='sm:text-2xl text-xl font-bold text-neutral-800 text-center'>Success!</h1>
        <h2 className='items-center p-4 w-[75%] text-center sm:text-xl text-lg text-neutral-700'>Thank you for your purchase!</h2>
        <button className="bg-[#588157] text-white px-4 py-2 rounded hover:bg-[#3A5A40]"><Link to="/">Return to Home</Link></button>
    </div>
  );
}

export default Success;
