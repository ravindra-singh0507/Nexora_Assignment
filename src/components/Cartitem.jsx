import React, { useContext } from 'react';
import { Context } from './Context';
import { NavLink, useNavigate } from 'react-router-dom';
import CartProduct from './CartProduct';

function CartItem() {
  const { cart, noOfItems, totalPrice } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="flex max-w-6xl mx-auto  px-2  relative">
      {cart.length === 0 ? (
        <div className='absolute left-[40%] top-[300px] '>
          <div className=' flex flex-col justify-center items-center mx-auto space-y-6'>
            <h1 className='font-semibold text-2xl text-center'>Your Cart is Empty</h1>
            <div className=''>
              <NavLink to="/">
                <button className='border-2 rounded-lg bg-green-600 text-white font-semibold
                            hover:bg-white hover:text-green-600 hover:border-green-600 py-3 text-center px-10
                             transition-all duration-[400ms] '>Shop Now</button>
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex space-x-10 items-stretch py-4'>
          <div className='w-[60%]'>
            {/* cart-item */}
            {cart.map((item, index) => (
              <div key={index}>
                <CartProduct item={item} />
                {index < cart.length - 1 && <div className='h-[2px] bg-slate-900'></div>}
              </div>
            ))}
          </div>

          <div className='flex flex-col justify-between py-6 w-[35%] '>
            <div className='flex flex-col space-y-2'>
              <div className='flex flex-col space-y-1'>
                <h2 className='font-semibold text-2xl text-green-800'>Your Cart</h2>
                <h1 className='font-bold text-5xl text-green-700 uppercase tracking-wider '>Summary</h1>
              </div>
              <p>Total item: {noOfItems}</p>
            </div>
            <div>
              <div className='flex flex-col space-y-4'>
                <p className='text-xl flex items-center space-x-2 '>
                  <span className='font-semibold text-gray-700'>Total Amount:</span>
                  <span className='text-black  font-bold'>${totalPrice.toFixed(2)}</span>
                </p>

                <button
                  onClick={() => navigate('/checkout')}
                  className='bg-green-700 w-full py-2 text-2xl font-bold text-white border-2 rounded-lg
                                  hover:text-green-700 hover:bg-white transition-all duration-200
                                  hover:border-green-700'
                >
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
