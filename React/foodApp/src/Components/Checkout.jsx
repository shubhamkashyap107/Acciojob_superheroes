import React from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Cloudinary_URL } from '../Utils/Constants';
import { addToCart, removeFromCart } from '../Utils/CartSlice';

const Checkout = () => {
  const cartData = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  let total = 0

  for(let item of cartData)
  {
    total += item.quantity * item.price
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto  w-fit">
        {cartData.length > 0 ? (
          <div className="grid gap-6">
            {cartData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 p-4 border rounded-md shadow-md w-[100%]"
              >
                {/* Product Image */}
                <img
                  className="h-28 w-28 object-cover rounded-md"
                  src={Cloudinary_URL + item.img}
                  alt={item.name}
                />

                {/* Product Details */}
                <div className="flex justify-between gap-2 w-full">
                  <div className="text-lg font-medium">{item.name}</div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                      onClick={() =>
                        dispatch(
                          addToCart({
                            name: item.name,
                            img: item.img,
                            isVeg: item.isVeg,
                            price: item.price,
                          })
                        )
                      }
                    >
                      +
                    </button>
                    <div className="text-lg font-semibold">{item.quantity}</div>
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                      onClick={() =>
                        dispatch(
                          removeFromCart({
                            name: item.name,
                            img: item.img,
                            isVeg: item.isVeg,
                            price: item.price,
                          })
                        )
                      }
                    >
                      -
                    </button>
                  </div>

                  {/* Price */}
                  <div className="text-lg font-semibold">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              </div>
            ))}

            <div>
              Total Amount : {total}
            </div>
          </div>
          
        ) : (
          <div className="text-center text-lg font-medium text-gray-600">
            Your cart is empty!
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
