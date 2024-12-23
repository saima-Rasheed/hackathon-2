import React from 'react'
import Image from 'next/image'
import { LuIndianRupee } from "react-icons/lu";
const page = () => {
  return (
    <div>
      <div className='flex '>
      <div className='h-screen w-6/12'>
       <Image src={`/Rectangle (2).png`}
       alt='image'
       height={200}
       width={200}
       className='ml-10 mt-10 sm:ml-20 md:ml-40 lg:ml-50 sm:mt-10 md:mt-20 lg:30 sm:h-300 md:h-400 lg:500'
       />
       

      </div>
      <div className='h-screen w-6/12'>
      <div className='flex flex-col justify-center items-center'>
       <h1 className='font-semibold  text-sm md:text-md lg:text-lg text-gray-800'>Nike Air Force 1</h1>
       <h1 className='font-semibold text-sm md:text-md lg:text-lg text-gray-800'>PLT.AF.ORM</h1>
      <p className=' text-gray-800 text-sm md:text-md lg:text-md'>Turn style on its head with this crafted take on the<br/>Air Jordan 1 Mid its &quot;inside out&quot; inspired<br/>
      construction,including unique layering and<br/>exposed foam accent, ups the ante on this<br/>timeless Jordan Brand silhouette
      .Details like the<br/>deco stitching on the swoosh add coveted<br/>appeal,while the unexpected shading,rich<br/>mixture of matrials and aged midsole aesthetic<br/>
      give this release an artisan finish.
      </p>
      </div>
      <p className='flex justify-center items-center'><span className='text-sm md:text-md lg:text-lg font-semibold text-gray-800 mt-0 sm:mt-2 md:mt-3 lg:mt-1'><LuIndianRupee/></span> <span className='text-sm md:text-md lg:text-md font-semibold text-gray-800 mt-0 sm:mt-2 md:mt-3 lg:mt-0'>8,6950.00</span></p>

       <button className='bg-black text-gray-300 h-8 w-36 md:h-12 md:w-44 lg:h-16 lg:72 rounded-full text-sm md:text-md lg:text-lg ml-10 md:ml-20 lg:ml-40 mt-0 sm:mt-2 md:mt-3 lg:mt-2'>Add To Cart</button>
      
    </div>
    </div>
    </div>
    
  )
}

export default page
