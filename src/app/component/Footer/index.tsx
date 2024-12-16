import React from 'react'
import Link from 'next/link'
import {FaYoutube,FaTwitter,FaInstagram,FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer className='bg-black py-4 px-5 text-white flex justify-around'>
      <div className='container mx-auto  grid-cols-1 md:grid-cols-4 gap-8'>
        <h3 className="text-sm font-bold mb-4 text-gray-300">FIND A STORE</h3>
        <ul className="space-y-2 text-sm text-gray-500">
        <li>BECOME A MEMBER </li>
       <li>SIGN UP FOR EMAIL</li>
       <li>SEND US FEED BACK</li>
       <li>STUDENT DISCOUNTS</li>
      
       
        </ul>
        </div>
        
         <div className='container mx-auto  grid-cols-1 md:grid-cols-4 gap-8'>
        <h3 className="text-sm font-bold mb-4 text-gray-300 ">GET HELP</h3>
        <ul className="space-y-2 text-sm text-gray-500 ">
        <li>Order status </li>
       <li>Delivery</li>
       <li>Returns</li>
       <li>Pyment options</li>
       <li>Contact Us On Nike.com Inquiries</li>
       <li>Contact Us On All Other Inquiries</li>
        </ul>
        </div>
       
         <div className='container mx-auto  grid-cols-1 md:grid-cols-4 gap-8'>
        <h3 className="text-sm font-bold mb-4 text-gray-300">ABOUT NIKE</h3>
        <ul className="space-y-2 text-sm text-gray-500">
        <li>News </li>
       <li>Careers</li>
       <li>Investors</li>
       <li>Sustainability</li>
       </ul>
       </div>

      
        
        <div className="flex space-x-4 ">
        <Link href="#"><FaTwitter  className=' text-black w-10 h-10 rounded-full bg-gray-500 pt-1 pb-1'/></Link>
        <Link href="#"><FaFacebookF className='w-10 h-10 rounded-full text-black  bg-gray-500  pt-1 pb-1'/></Link>
        <Link href="#"><  FaYoutube className='w-10 h-10 rounded-full text-black bg-gray-500  pt-1 pb-1'/></Link>
        <Link href="#"><FaInstagram className='w-10 h-10 rounded-full text-black  bg-gray-500  pt-1 pb-1'/></Link>
       </div>

        
         </footer>
              

        <footer>
           
        <span><ul className='flex justify-end bg-black gap-5 text-gray-500 mb-10'>
          <li>Guides </li>
          <li>Terms of Sale</li>
          <li>Term of Use</li>
          <li>Nike Privacy Policy</li>
          <li className='gap-0 absolute left-8'>
                     India            2023 Nike, Inc. All Rights Reserved
       </li>
        </ul>
        </span>

       
        </footer>


      
      </div>
    
  )
}

export default Footer
