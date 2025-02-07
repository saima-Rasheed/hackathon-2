"use client";

import React, { ChangeEvent, useEffect, useState } from 'react';
import { Product } from '../../../type/products';
import { getCardItem } from '../actions/actions';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { CgChevronRight } from 'react-icons/cg';

const Checkout = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      city: "",
    });
    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        address: false,
        zipCode: false,
        city: false,
      });

    useEffect(() => {
        setCartItems(getCardItem());
        const fetchCartItems = async () => {
            const items = await getCardItem();
            setCartItems(items);
        };
    
        fetchCartItems();
    
        const appliedDiscount = localStorage.getItem("appliedDiscount");
        if (appliedDiscount) {
          setDiscount(Number(appliedDiscount));
        }
    }, []);
   

    const subTotal = cartItems.reduce(
        (total, item) => total + item.price * item.inventory, 0
    );

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        });
    };

    const validateForm = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            email: !formValues.email,
            phone: !formValues.phone,
            address: !formValues.address,
            zipCode: !formValues.zipCode,
            city: !formValues.city,
        };
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    };

    const handlePlaceOrder = () => {
        if (validateForm()) {
            localStorage.removeItem("appliedDiscount");
        }
    };

    return (
        <div className='min-h-screen bg-gray-50'>
            <div>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <nav>
                    <Link href={`/cart`} className='text-gray-500 hover:text-text-gray-800 transition text-sm'> 
                    <CgChevronRight/>  Cart  </Link>
                        
                    
                    <span>Checkout</span>
                </nav>
            </div>
            </div>

            <div className='max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='bg-white border rounded-lg p-6 p space-y-6'>
                    <h2 className='text lg font-semibold mb-4'>Order Summary</h2>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item._id} className='flex items-center gap-4 py-3 border-b'>
                                <div className='w-16 h-16 rounded overflow-hidden'>
                                    {item.image && (
                                        <Image 
                                        src ={urlFor(item.image).url()}
                                        alt='image'
                                        height={50}
                                        width={50}
                                        className='object cover w-full h-full'
                                        />
                                    )}
                                      </div>
                                    <div className='flex-1'>
                                    <h3 className='text-sm font-medium'>
                                    {item.productName}

                                </h3>
                                <p className='text-xs text-gray-500'>
                                Quantity :{item.inventory}
                                </p>
                                <p>
                                ${item.price * item.inventory}
                                </p>
                                    </div>
                                    

                                </div>
                            
                        ))
                    ) : (
                        <p className='text-xs font-medium'>No items in cart</p>
                    )}
                    <div className='text-right pt-4'>
                        <p className='text-sm'>SubTotal:<span>${subTotal}</span></p>
                        <p className='text-sm'>Discount:<span>${discount}</span></p>
                        <p className='text-lg font-semibold'>Total:<span>${subTotal.toFixed(2)}</span></p>
                    </div>
                </div>
                <div className='text-lg font-bold'>
                    <h2>Billing Information:</h2>
                    
                        <div>
                            <div className='mt-2 ml-2'>
                                <label>First Name:</label>
                                <input
                                type='text' 
                                id='firstName'
                                placeholder='Enter Your First Name'
                                value={formValues.firstName}
                                onChange={handleInputChange}
                                />
                                  {formErrors.firstName &&(
                                    <p className='text-sm text-red-500'>First Name is Required</p>
                                )}
                                
                            </div>
                            <div className='mt-2 ml-2'>
                                <label>Last Name: </label>
                                <input
                                type='text' 
                                id='lastName'
                                placeholder='Enter Your Last Name'
                                value={formValues.lastName}
                                onChange={handleInputChange}
                                />
                                {formErrors.lastName &&(
                                    <p  className='text-sm text-red-500'>Last Name is Required</p>
                                )}
                                
                            </div>
                            <div className='mt-2 ml-2'>
                                <label>Address: </label>
                                <input
                                type='text' 
                                id='address'
                                placeholder='Enter Your Address'
                                value={formValues.address}
                                onChange={handleInputChange}
                                />
                                {formErrors.address &&(
                                    <p  className='text-sm text-red-500'>Address is Required</p>
                                )}
                                
                            </div>
                            <div className='mt-2 ml-2'>
                                <label>Email : </label>
                                <input
                                type='email' 
                                id='email'
                                placeholder='Enter Your E-mail'
                                value={formValues.email}
                                onChange={handleInputChange}
                                />
                                {formErrors.email &&(
                                    <p  className='text-sm text-red-500'>E-mail is Required</p>
                                )}
                                
                            </div>
                            <div className='mt-2 ml-2'>
                                <label>Phone: </label>
                                <input
                                type='phone' 
                                id='phone'
                                placeholder='Enter Your Phone Number'
                                value={formValues.phone}
                                onChange={handleInputChange}
                                />
                                {formErrors.phone &&(
                                    <p  className='text-sm text-red-500'>Phone Number is Required</p>
                                )}
                                
                            </div>
                            <div className='mt-2 ml-2'>
                                <label>Zip Code: </label>
                                <input
                                type='text' 
                                id='zipCode'
                                placeholder='Enter Your zip Code'
                                value={formValues.zipCode}
                                onChange={handleInputChange}
                                />
                                {formErrors.zipCode &&(
                                    <p  className='text-sm text-red-500'>zip Code is Required</p>
                                )}
                                
                            </div>
                            <div className='mt-2 ml-2'>
                                <label>City :</label>
                                <input
                                type='text' 
                                id='city'
                                placeholder='Enter Your City'
                                value={formValues.city}
                                onChange={handleInputChange}
                                />
                                {formErrors.city &&(
                                    <p  className='text-sm text-red-500'>City is Required</p>
                                )}
                                
                            </div>
                            <button
                            className='w-full h-12 mt-8 px-4 py-2 bg-gray-600 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition' 
                            
                            onClick={handlePlaceOrder}>
                                Place Your Order
                            </button>
                           </div> 

                        </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Checkout;
