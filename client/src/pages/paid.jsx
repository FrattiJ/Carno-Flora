import { useEffect } from 'react';
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
    <div>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
    </div>
  );
}

export default Success;
