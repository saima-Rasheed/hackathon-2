import React from 'react'
import Image from 'next/image'
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuIndianRupee } from "react-icons/lu";
const page = () => {
  return (
    
   <div>
    <div className='bg-gray-300 h-12 w-7/12 ml-0 text-md'><p className='text-gray-600 pl-2 md: ml-4 lg:ml-5'>Free Delivery</p><div className='flex text-gray-600 pl-2 md: ml-4 lg:ml-5 text-sm'><p>Applies to order of 14,000.00 or more.</p>
    <a href='#' className='underline text-sm'>View Details</a></div></div>
    <div className='flex'>
    <div className=' h-80 w-8/12'>
    <h2 className='text-gray-800 font-bold text-md lg:lg pl-10 lg:20 pt-5'>Bag</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <div>
        <Image src={`/Image (11).png`}
        alt='image'
        height={200}
        width={200}
        className='ml-20 mt-5'
        />
      </div>
      <div>
      <p className='font-semibold text-gray-800 text-sm lg:text-md pt-1 lg:ml-16'> Nike Dry FIT ADV TechKnit Ultra</p>
      <p className='pt-2 text-sm lg:ml-16'>Men's short-sleeve Running Top</p>
      <p className='pt-2 text-sm lg:ml-16'>Ashen Slate/Cobalt Bliss</p>
      <p className='flex pt-2 text-sm lg:ml-16'><p>Size L</p><p>Quantity 1</p></p>

      </div>
      <div className='mt-5 font-semibold text-gray-800 text-sm lg:text-md'>
        <p className='flex'>

      <span>MRP: </span><span className='mt-2'><LuIndianRupee /></span><span>3895.00 </span></p>
      </div>

    </div>
    
    
    
    
    
    
  </div>
    <div className=' h-80 w-4/12'>
    <h2 className='text-xl text-gray-800 font-semibold pl-20 pt-5'>Summary</h2>
    <div className='grid grid-cols-2'>
      <p  className='text-gray-800 text-sm pl-5'>Subtotal</p><p className='text-gray-800 text-sm flex'><span><LuIndianRupee /></span><span>20 890.00</span></p>
      <p className='text-gray-800 text-sm pl-5 pt-5'>Estimated Delivery & Handling</p><p className='text-gray-800 text-sm pl-5 pt-5'>Free</p>
      <hr/><hr/>
      <p className='text-gray-800 text-sm pl-5 pt-5'>Total</p><p className='text-gray-800 text-sm flex pt-5'><span><LuIndianRupee /></span><span>20 890.00</span></p>

    </div>
    
    <hr/>
    </div>
    </div>
    
    
    <div className='h-80 w-8/12'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <div>
        
        
      </div>
      <div>
      <p className='font-semibold text-gray-800 text-sm lg:text-md pt-28 lg:ml-16'> Nike Air Max 97 SE </p>
      <p className='pt-2 text-sm  lg:ml-16'>Men's shoes</p>
      <p className='pt-2 text-sm  lg:ml-16'>Flat Pewter/Light Bone/Black/White</p>
      <p className='flex pt-2 text-sm  lg:ml-16'><p>Size 8</p><p>Quantity 1</p></p>

      </div>

      <div className='mt-5 font-semibold text-gray-800 text-sm lg:text-md'>
        <p className='flex lg:mt-24'>

      <span>MRP:</span><span className='mt-2'><LuIndianRupee /></span><span>16 995.00</span></p>
      </div>
      
      
    </div>
  
        

      
        
        
        
     </div> 

        
    </div>
    
  )
}

export default page
