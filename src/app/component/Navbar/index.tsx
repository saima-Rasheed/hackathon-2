import React from 'react'
import Link from 'next/link'
import { SiNike } from "react-icons/si";
import { CiSearch } from "react-icons/ci";




const Navbar = () => {
  return (
    
   
    <nav className='flex items-center justify-between bg-white w-full h-auto px-4'>
      {/*first div icon on left side*/}
      <div className='bg-white w-1/8 flex items-center justify-center p-2'>
        <SiNike className=' flex-1 flex items-center justify-center h-5 w-5 md:h-8 lg:h-10 text-black '/>

      </div>
      {/* second navigation */}
      <div className=' bg-white h-12 w-full'>
        <ul className='flex justify-center items-center  gap-3'>
          <li><Link href="/" className=' sm:text-xs md:text-sm lg:text-large'>New & featured</Link></li>
          <li><Link href="/all-product"  className='sm:text-xs md:text-xs lg:text-large'>All Product</Link></li>
          <li><Link href="/product-detail"className='sm:text-xs md:text-xs lg:text-large'>Product Detail</Link></li>
          <li><Link href="/login"  className='sm:text-xs md:text-xs lg:text-large'>Login</Link></li>
          <li><Link href="/join-us"  className='sm:text-xs md:text-xs lg:text-large'>Join Us</Link></li>
          <li><Link href="/contact-us" className='sm:text-xs md:text-xs lg:text-large'>Contact Us</Link></li>
          <li><Link href="/cart" className='sm:text-xs md:text-xs lg:text-large'>Cart</Link></li>
          <li><Link href="/checkout" className='sm:text-xs md:text-xs lg:text-large'>Checkout</Link></li>
          
        </ul>
      </div>
      {/*third div*/}
       
     
<div className='  bg-white w-20  flex justify-end items-center sm:w-0 lg:w-36 py-2'>
<div className='flex items-center bg-white w-10 rounded px-3 py-1 sm:w-0 lg:w-36'> 
<CiSearch className='text-gray-500  h-5 w-10 hidden lg:block ' />
  <input type='text'placeholder='search'
  className='outline-gray-900 text-gray-700 rounded-xl w-24 hidden lg:block' />

</div>
      </div> 
    </nav>
    
      
              
          

 
          
          
          
             
          
      
      
  



    
    
  )
}
  export default Navbar