import React, { useContext } from 'react';
import { Context } from './Context';

const CartItem = ({ item }) => {
  const { cart, addToCart, removeFromCart ,setTotalPrice,totalPrice} = useContext(Context);

  return (
    <div className='w-[20%] flex flex-col space-y-2 p-2 border-2 justify-between
    rounded-[12px] shadow-[rgba(0,_0,_0,_0.24)]
    relative mb-10 ease-in
    hover:scale-110 hover:shadow-[0px_0px_95px_53px_#00000024] transition-all duration-[400ms] '>

      <div>
        <h1 className='font-semibold leading-10 text-center'>
          {item.title.length > 17 ? item.title.slice(0, 17) + '...' : item.title}
        </h1>
        <p className='text-sm opacity-75 text-center'>
          {item.description.length > 51 ? item.description.slice(0, 51) + '...' : item.description}
        </p>
      </div>

      <div>
        <div className='flex justify-center items-center mb-6'>
          <img src={item.image} alt={item.title} className='h-[180px] object-contain' />
        </div>

        <div className=' w-full px-2'>
          <div className='flex justify-between items-center'>
            <div className='text-green-700 font-bold'>${item.price}</div>
            <button className='border-2 rounded-lg py-1 text-sm px-3 hover:bg-black
             hover:text-white transition-all duration-200'> 
              {cart.some(cartItem => cartItem.id === item.id) ? (
                <span onClick={() => removeFromCart(item)}>Remove item</span>
              ) : (
                <span onClick={() => addToCart(item)}>Add to Cart</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
