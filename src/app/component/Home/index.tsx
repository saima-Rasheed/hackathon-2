import Link from 'next/link'
import React from 'react' 
import Image from 'next/image'
import { LuIndianRupee } from "react-icons/lu";
import { AiOutlineRightCircle } from "react-icons/ai";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div>
        <div className='bg-white w-[full] h-12 flex flex-col justify-center items-center '> 
<div  className='size-32 font-medium sm:size-40 md:size-56px lg:size-60 lg:font-bold'>
Hello Nike App</div>
<div className='top-10 sm:top-15 text-sm sm:text-sm md:large lg:large lg:font-semibold '>
Download the app to access everything Nike.<Link href="#" className='underline'> Get Your Great</Link></div>
</div>
 <div className=' flex justify-center'>
  <Image src={`/main.png`} 
  alt='shoes'
  height={400}
  width={500} 
 className='sm:h-[400px] w-[800px]' 
  
  />
  
  </div>
  <div className='flex flex-col justify-center items-center '>
    <p>First Look</p>
    <h1 className='font-bold text-5xl'>NIKE AIR MAX PULSE</h1>
    <p> Extreme comfort Hyper  double volume introducing the Air Max Pulse</p><p>  designed to push your past your limits and help you go the max.</p>
    </div>
    <div className='flex justify-center items-center  gap-5'>
    <button className='bg-black w-[110.58px] h-[39px] rounded-2xl text-white mt-5'>Notify Me</button>

    <button className='bg-black w-[120.58px] h-[39px] rounded-2xl text-white mt-5'>Shop Air Max</button>
  </div>
  <p className=' flex justify-start  ml-20 font-semibold text-xl sm:text-sm lg:ml-28'>Best of Air Max</p>
  <section className=' grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-1 flex-wrap justify-center p-4'>
    
    
    <div className=' justify-center items-center   w-full h-auto '>
    
      <div className='relative'>
      
    <Image src={`/shoe-1.png`}
    alt='Image'
    height={400}
    width={500}
  
    />
    
    <div className=' flex absolute right-2 px-3 py-1 text-sm'><LuIndianRupee />13,995</div>
    </div>
    <p className='text-sm font-semibold'>Nike Air max Pulse</p>
    <p className='text-sm'>Women&apos;s shoes </p>
  
    </div>

    <div className='flex flex-col gap-1 p-1'>
      <div className='relative '>
    <Image src={`/shoe 2.png`}
    alt='Image'
    height={400}
    width={500}
   className='sm:w-200 h-200 md: w-200 h-200 lg:w-160 h-300 '
    />
    <div className=' flex absolute right-2 px-3 py-1 text-sm'><LuIndianRupee />13,995</div>
    </div>
    
    <p className='text-sm font-semibold'>Nike Air max Pulse</p>
    <p className='text-sm '>Men&apos;s shoes </p>
    </div>
    
    <div className='flex flex-col gap-1 p-1'>
      <div className='relative '>
     <Image src={`/shoe 3.png`}
    alt='Image' 
    height={400}
    width={500}
    />
    <div className=' flex absolute right-2 px-3 py-1 text-sm'><LuIndianRupee />16,995</div>
    </div>
    <p className='text-sm font-semibold'>Nike Air max Pulse</p>
    <p className='text-sm'>Men&apos;s shoes</p>
    </div>
    </section>

    <section  className='flex flex-col gap-5 '>
    <p className='font-semibold  sm:ml-96 '>Featured</p>

    <div className='flex justify-center'>
    <Image src={`/Image (10).png`}
    alt='image'
    height={400}
    width={500}
    />
    
    </div>
      <div className='text-center'>
        
        <p className='text-2xl font-bold'>STEP IN WHAT FEELS GOOD</p>
        <p className='text-sm'>Cause everyone should know the feelings of running in that perfect pair</p>
        <button className='bg-black w-[120.58px] h-[39px] rounded-2xl text-white mt-5 '>Find Your Shoe</button>
        
      </div>
    </section>
      
      <div className='font-semibold bg-red-300 mt-4 ml-96 xm:ml-20 mb-4 top-4'>Gear Up<IoChevronBackCircleOutline className='absolute right-1/4 h-5 w-8 ' /> <IoChevronForwardCircleOutline className='absolute right-96  h-5 w-8 mb-4' /></div>
    <section  className='flex justify-center gap-5'>
      
      <div className='flex flex-col '> 
      <div className='relative '>
    <Image src={`/Image (11).png`}
    alt='image1'
    height={248}
    width={248}
    />
  
      <div className=' flex absolute right-1 px-0 py-1 text-sm'><LuIndianRupee />3,895</div>
    
     </div>
    <p className='font-semibold text-sm '>Nike Dri FIT Techknit Ultra </p>
    <p className='text-sm'>Men&apos;s short-sleeves</p>
     <p className='text-sm'>Running Top</p>
    </div>

    
     
    <div className='relative'>

     <Image src={`/Image (12).png`}
    alt='image2'
    height={248}
    width={248}
    />
    <div className=' flex absolute right-1 px-0 py-1 text-sm'><LuIndianRupee />2,495</div>
    
    <p className='font-semibold'>Nike Dri FIT challenger</p>
    <p className='text-sm'>Men&apos;s 18cm approx 2-</p>
     <p className='text-sm'>in-1 versatile shorts</p>
     </div>
     
     <div className='flex flex-col '> 
     
     <div className='relative '>

<Image src={`/Image (18).png`}
alt='image3'
height={248}
width={248}

/>
<div className=' flex absolute right-1 px-0 py-1 text-sm'><LuIndianRupee />5,295</div>

<p className='font-semibold'>Nike Dri FIT Run Division</p>
<p className='text-sm'>Women&apos;s Long Sleeve</p>
<p className='text-sm'>Running Top</p>
</div>
</div>
<div className='flex flex-col '> 

<div className=' relative '>
<Image src={`/Image (19).png`}
alt='image4'
height={248}
width={248}

/>
<div className=' flex absolute right-2 px-0 py-1 text-sm'><LuIndianRupee />3,795</div>

<p className='font-semibold'>Nike Fast</p>
<p className='text-sm'>Women&apos;s Mid-Rise 7/8 Running</p>
<p className='text-sm'>Leggings With Pockets</p>
</div>
</div>


 </section>
  
    
    <section className='flex flex-col gap-5 mt-20'>
    <p className='font-semibold ml-96'>Dont Miss</p>
    <div className='flex justify-center'>
    <Image src={`/Image (13).png`}
    alt='image'
    height={200}
    width={1000}
    />
    </div>
      <div className='text-center'>
      
        <p className='text-4xl font-bold'>FLIGHT ESSENTIAL</p>
        <p className='text-sm'>Your built-to-last,all week wears-but with style only Jordan Brand can deliver. </p>
        <button className='bg-black w-[100px] h-[39px] rounded-2xl text-white mt-5 '>Shop</button>
        
      </div>
    </section>
    <p className='font-semibold ml-96 mt-4 mb-2'>The Essentials</p>
    <section className=' grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-1 flex-wrap justify-center p-4'>
    
     <div className=' justify-center items-center   w-full h-auto '>
    
      
      
        <Image src={`/pic1.png`}
        alt='image'
        height={400}
        width={500}
        />

</div>

<div>
<Image src={`/pic2.png`}
        alt='image'
        height={400}
        width={500}
        />
        
        </div>
 
 <div>
<Image src={`/pic3.png`}
        alt='image'
        height={400}
        width={500}
        />
       </div>
        
        
    
    </section>

    <section className='grid sm:grid-cols-2 md:grid-cols-4  gap-20'>
    

      <div>
      <p className='font-bold'>Icons</p>
      <p>Air Force 1</p>
      <p>Huarache</p>
      <p>Air Max 90</p>
      <p>Air Max 95</p>
       </div>
    
      <div>
      <p className='font-bold'>Shoes</p>
      <p>All Shoes</p>
      <p>Custom  Shoes</p>
      <p>Jordan Shoes</p>
      <p>Running Shoes</p>
      </div>

  
    <div>
      <p className='font-bold'>Kids&apos;</p>
      <p>Infant $ toddlers Shoes</p>
      <p>Kid&apos;s Shoes </p>
      <p>Kid&apos;s Jordan Shoes</p>
      <p>Kide&apos;s Basketball Shoes</p>
       </div>
    
    <div>
      <p className='font-bold'>Clothing</p>
      <p>All Clothing</p>
      <p>Modest wear </p>
      <p>Hoodies $ Pullovers</p>
      <p>Shirt $ Tops</p>
    </div>
    

    </section>
    
    
      

    

    </div>
  
    
      
    
  
  )
}

export default Home
