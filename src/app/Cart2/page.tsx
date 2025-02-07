"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../type/products";
import {
  getCardItem,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/router";

const CartPage = () => {
  const [cartItem, setCartItem] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCardItem();
      setCartItem(items);
    };
    fetchCartItems();
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are You Sure?",
      text: "You will not be able to recover this item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItem(getCardItem());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItem(getCardItem());
  };

  const handleIncrement = (id: string) => {
    const product = cartItem.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItem.find((item) => item._id === id);
    if (product && product.inventory > 1)
      handleQuantityChange(id, product.inventory - 1);
  };

  const totalAmount = () =>
    cartItem.reduce((total, item) => total + item.price * item.inventory, 0);
    const router =useRouter()
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been placed successfully", "success");
        router.push("/checkout")
        setCartItem([]);
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItem.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItem.map((item) => (
            <div key={item._id} className="flex items-center border p-4 rounded-lg shadow-md">
              <Image
                src={urlFor(item.image).url()}
                alt={item.productName}
                height={500}
                width={500}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">{item.productName}</h3>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-3 py-1 bg-gray-300 text-black rounded-lg"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.inventory}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-3 py-1 bg-gray-300 text-black rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-4">
            <h3 className="text-xl font-semibold">{`Total: $${totalAmount()}`}</h3>
            <button
    onClick={handleProceed}
    className="mt-4 px-4 py-2 bg-gray-600 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition"
  >
    Proceed to Checkout
  </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
