import React, { useContext, useState } from 'react';
import { Context } from './Context';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function Checkout() {
  const { cart, noOfItems, totalPrice, clearCart } = useContext(Context);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    cardNumber: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear cart
    clearCart();
    toast.success('Order placed successfully!');
    
    // Reset form
    setFormData({
      fullName: '',
      address: '',
      cardNumber: ''
    });

    // Redirect to home after 2 seconds
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="mb-4">Your cart is empty.</p>
          <NavLink to="/">
            <button className="px-4 py-2 bg-green-600 text-white rounded">Back to shop</button>
          </NavLink>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-semibold text-xl mb-4">Order Summary ({noOfItems} items)</h2>
            <div className="space-y-4">
              {cart.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between border-b py-2">
                  <div>
                    <div className="font-medium">{item.name || item.title || 'Product'}</div>
                    <div className="text-sm text-gray-600">Qty: {item.quantity || 1}</div>
                  </div>
                  <div className="font-semibold">${(item.price || 0).toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-right">
              <div className="text-lg">Total: <span className="font-bold">${totalPrice.toFixed(2)}</span></div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-4">Billing & Payment</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block text-sm">Full name</label>
                <input 
                  required 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full border px-3 py-2 rounded" 
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm">Address</label>
                <input 
                  required 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full border px-3 py-2 rounded" 
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm">Payment details</label>
                <input 
                  required 
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="Card number" 
                  className="w-full border px-3 py-2 rounded" 
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-green-700 text-white py-2 rounded font-bold
                         hover:bg-green-800 transition-colors"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;