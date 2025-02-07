"use client";

import Link from 'next/link'
import React, { useEffect, useState } from 'react' 
import Image from 'next/image'
import { LuIndianRupee } from "react-icons/lu";
import { AiOutlineRightCircle } from "react-icons/ai";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

import { client } from '@/sanity/lib/client';
import { Product } from '../../../../type/products';
import { allProducts, four } from '@/sanity/lib/queries';
import { productSchema } from '@/sanity/schemaTypes/product';
import { url } from 'node:inspector';
import { urlFor} from '@/sanity/lib/image';
import { addToCart } from '@/app/actions/actions';
import swal from "sweetalert2"
import Swal from 'sweetalert2';

const Home = () => {

  const[product,setProduct]= useState<Product[]>([])

  useEffect(() =>{
    async function fetchproduct(){
      const fetchedProduct:Product[] = await client.fetch(four)
      setProduct(fetchedProduct)
    }
    fetchproduct()
 
    },[]);
    const handleAddToCart =(e:React.MouseEvent,product:Product) =>{
      e.preventDefault()
      Swal.fire({
        position:"top-right",
        icon:"success",
        title : `${product.productName} added to cart`,
        showConfirmButton : false,
        timer :1000
      })
      addToCart(product)
    }
  
  
  return (
   <div>
<div  className='font-medium sm:text-sm md:text-sm lg:text-lg lg:font-bold text-center'>
Hello Nike App</div>
<div className='top-10 sm:top-15 text-sm sm:text-sm  lg:text-lg lg:font-semibold text-center '>
Download the app to access everything Nike.<Link href="/all-product" className='underline'> Get Your Great</Link></div>

 <div className=' flex justify-center'>
  <Image src={`/Image (5).png`} 
  alt='shoes'
  height={300}
  width={500} 
 className='sm:h-[200px] w-[500px] md:h-[300px] lg:h-[400px]' 
  
  />
  
  </div>
  <div className='flex flex-col justify-center items-center '>
    <p>First Look</p>
    <h1 className='font-bold text-sm sm:text-sm lg:text-lg '>NIKE AIR MAX PULSE</h1>
    <p> Extreme comfort Hyper  double volume introducing the Air Max Pulse</p><p>  designed to push your past your limits and help you go the max.</p>
    </div>
    <div className='flex justify-center items-center  gap-5'>
    <button className='bg-black w-[60px] h-[30px] rounded-2xl text-white mt-5'>Notify Me</button>

    <button className='bg-black w-[60px] h-[30px] rounded-2xl text-white mt-5'>Shop Air Max</button>
  </div>
  <p className=' flex justify-start mb-0 ml-20 font-semibold text-sm sm:text-sm lg:text-lg'>Best of Air Max</p>
  
  <section>
    <div className='max-w-7xl mx-w-screen-lg max-auto px-4 py-8'>
    <h1 className='text-3xl font-bold mb-6 text-center'>Newly introduce</h1> 
        <div className='bg-white h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-4 gap-8 '> 
          {product.map((product)=>(
            <div className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 '
             key={product._id}>
             <Link href={`/product/${product.slug.current}`}>
            {product.image &&(
              <Image
              src={urlFor(product.image).url()}
              alt="image"
              width={150}
              height={150}
              className='w-full h-40 object-contain rounded-md '
              />
            )}
            
             <h2 className='text-lg font-semibold mt-2 text-red-500'>{product.status}</h2>
             <h2 className='text-lg font-semibold mt-1'>{product.productName}</h2>
             <p className='text-gray-500 mt-1'>
              {product.price? `$${product.price}`: "Price not available"}</p>
              <button className='bg-gradient-to-r from-lime-300 to-lime-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out'
              onClick={(e) => handleAddToCart(e, product)}
              >
                Add To Cart
              </button>
              
              </Link>
              
              </div>
          ))}
            
            </div>
            </div>  
         
      </section>
          
          
          
 
  

  
 
  
  





    <section  className='flex flex-col gap-5 '>
    <p className='font-semibold  sm:ml-96 '>Featured</p>

    <div className='flex justify-center'>
    <Image src={`/Image (10).png`}
    alt='image'
    height={300}
    width={500}
    className='sm:h-[200px] w-[500px] md:h-[250px] lg:h-[300px]' 
    />
    
    </div>
      <div className='text-center'>
        
        <p className='text-sm md:text-sm lg:text-lg font-bold'>STEP IN WHAT FEELS GOOD</p>
        <p className='text-sm'>Cause everyone should know the feelings of running in that perfect pair</p>
        <button className='bg-black w-[60px] h-[30px] rounded-2xl text-white mt-5 '>Find Your Shoe</button>
        
      </div>
    </section>
      
      <div className='font-semibold bg-white mt-4 ml-96 xm:ml-20 mb-4 top-4'>Gear Up<IoChevronBackCircleOutline className='absolute right-1/4 h-5 w-8 ' /> <IoChevronForwardCircleOutline className='absolute right-96  h-5 w-8 mb-4' /></div>
    <section  className='justify-center gap-5  grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 flex-wrap p-4'>
      
      <div className='flex flex-col '> 
      <div className='relative '>
    <Image src={`/Image (11).png`}
    alt='image1'
    height={300}
    width={500}
    className='sm:h-[200px] w-[500px] md:h-[300px] lg:h-[200px]' 
    />
  
      <div className=' flex absolute right-1 md:left-56 lg:left-44 px-0 py-1 text-sm'><LuIndianRupee />3,895</div>
    
     </div>
    <p className='font-semibold text-xs lg:text-sm'>Nike Dri FIT Techknit Ultra </p>
    <p className='text-xs'>Men&apos;s short-sleeves</p>
     <p className='text-xs'>Running Top</p>
    </div>

    
     
    <div className='relative'>

     <Image src={`/Image (12).png`}
    alt='image2'
    height={300}
    width={500}
    className='sm:h-[200px] w-[500px] md:h-[300px] lg:h-[200px]'  
    />
    <div className=' flex absolute  right-1 md:left-56 lg:left-44 px-0 py-1 text-sm'><LuIndianRupee />2,495</div>
    
    <p className='font-semibold text-xs lg:text-sm'>Nike Dri FIT challenger</p>
    <p className='text-xs'>Men&apos;s 18cm approx 2-</p>
     <p className='text-xs'>in-1 versatile shorts</p>
     </div>
     
     <div className='flex flex-col '> 
     
     <div className='relative '>

<Image src={`/Image (18).png`}
alt='image3'
height={200}
width={500}
className='sm:h-[200px] w-[500px] md:h-[300px] lg:h-[200px]' 

/>
<div className=' flex absolute  right-1 md:left-56 lg:left-44 px-0 py-1 text-sm'><LuIndianRupee />5,295</div>

<p className='font-semibold text-xs lg:text-sm'>Nike Dri FIT Run Division</p>
<p className='text-xs'>Women&apos;s Long Sleeve</p>
<p className='text-xs'>Running Top</p>
</div>
</div>
<div className='flex flex-col '> 

<div className=' relative '>
<Image src={`/Image (19).png`}
alt='image4'
height={200}
width={500}
className='sm:h-[200px] w-[500px] md:h-[300px] lg:h-[200px]' 

/>
<div className=' flex absolute  right-1 md:left-56 lg:left-44 px-0 py-1 text-sm'><LuIndianRupee />3,795</div>

<p className='font-semibold text-xs lg:text-sm'>Nike Fast</p>
<p className='text-xs'>Women&apos;s Mid-Rise 7/8 Running</p>
<p className='text-xs'>Leggings With Pockets</p>
</div>
</div>


 </section>
  
    
    <section className='flex flex-col gap-5 mt-20'>
    <p className='font-semibold text-sm lg:text-lg ml-96'>Dont Miss</p>
    <div className='flex justify-center'>
    <Image src={`/Image (13).png`}
    alt='image'
    height={300}
    width={500}
    className='sm:h-[200px] w-[500px] md:h-[250px] lg:h-[300px]' 
    />
    </div>
      <div className='text-center'>
      
        <p className='text-sm lg:text-lg font-bold'>FLIGHT ESSENTIAL</p>
        <p className='text-sm'>Your built-to-last,all week wears-but with style only Jordan Brand can deliver. </p>
        <button className='bg-black w-[100px] h-[39px] rounded-2xl text-white mt-5 '>Shop</button>
        
      </div>
    </section>
    <p className='font-semibold text-sm lg:text-lg ml-96 mt-4 mb-2'>The Essentials</p>
    <section className=' grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-1 flex-wrap justify-center p-4'>
    
     <div className=' justify-center items-center   w-full h-auto '>
    
      
      
        <Image src={`/es1.png`}
        alt='image'
        height={300}
        width={500}
        className='sm:h-[200px] w-[500px] md:h-[250px] lg:h-[300px]' 
        />

</div>

<div>
<Image src={`/es2.png`}
        alt='image'
        height={300}
        width={500}
        className='sm:h-[200px] w-[500px] md:h-[250px] lg:h-[300px]' 
        />
        
        </div>
 
 <div>
<Image src={`/es3.png`}
        alt='image'
        height={300}
        width={500}
        className='sm:h-[200px] w-[500px] md:h-[250px] lg:h-[300px]' 
        />
       </div>
        
        
    
    </section>

    <section className='grid sm:grid-cols-2 md:grid-cols-4  gap-20 ml-5 mb-5'>
    

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
