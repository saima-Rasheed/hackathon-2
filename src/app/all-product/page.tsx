import React from 'react'
import Image from 'next/image'
import { LuIndianRupee } from "react-icons/lu";


const page = () => { 
  return (
    <div>
        <div className='flex justify-center items-center'>
         { /*side bar*/}
         <div className='w-2/12 bg-white  text-gray-600  min min-h-40 space-y-5 absolute top-28 left-0 '>
          <h2 className='text-2xl font-extrabold'>New (500)</h2>
          <ul className=' text-sm sm:text-sm md:text-md lg:text-lg text-gray-700 space-y-8  '>
            <li>Shoes</li>
            <li>Sports Bras</li>
            <li>Tops & T-shirts</li>
            <li>Hoodies & Sweatshirts</li>
            <li>Jackets</li>
            <li>Trousrs & Tights</li>
            <li>Shorts</li>
            <li>Tracksuits</li>
            <li>Jumpsuits & Rompers</li>
            <li>Skirts & Dresses</li>
            <li>Socks</li>
            <li>Accessories & Equipments </li>
          </ul>
          <hr/>   
          <h2 className='font-bold text-sm sm:text-sm md:text-md lg:text-lg text-gray-800 mt-10 ml-2 '>Gender</h2>
          <div className='flex justify-center items-center space-x-2 mt-5 sm:space-x-0'> 
            <input type='checkbox'id='men' className='h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  text-gray-500 absolute left-1 '/> <div className='text-sm sm:text-sm md:text-md lg:text-lg text-gray-800  absolute left-7  lg:left-9'>Men</div>
            </div>
            <div className='flex justify-center items-center space-x-2 '> 
            <input type='checkbox'id='women'className='h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7 text-gray-500 absolute left-1 mt-8'/> <div className='text-gray-800 text-sm sm:text-sm md:text-md lg:text-lg absolute left-7 mt-8'>Women</div>
            </div>
            <div className='flex justify-center items-center space-x-2 '> 
            <input type='checkbox'id='unisex' className='h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  text-gray-500 absolute left-1 mt-14'/> <div className='text-gray-800 text-sm sm:text-sm md:text-md lg:text-lg  absolute left-7 mt-14'>Unisex</div>
            </div>
            <br/>
               <hr/>
          <h2 className='font-bold text-xl text-gray-800 mt-10 ml-2 '>Kids</h2>
          <div className='flex justify-center items-center space-x-2 mt-5'> 
            <input type='checkbox'id='men' className='h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7 text-gray-500 absolute left-1 '/> <div className=' text-gray-800 text-sm sm:text-sm md:text-md lg:text-lg  absolute left-7 '>Boys</div>
            </div>
            <div className='flex justify-center items-center space-x-2 '> 
            <input type='checkbox'id='women'className='h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7   text-gray-500 absolute left-1 mt-8'/> <div className='text-gray-800 text-sm sm:text-sm md:text-md lg:text-lg  absolute left-7 mt-8'>Girls</div>
            </div>
            <br/>
            <hr/>
            <h2 className='font-bold text-xl text-gray-800 mt-10 ml-2 '>Shop by Price</h2>
          <div className='flex justify-start items-center  space-x-0 sm:space-x-1 md:space-x-1 lg:space-x-2 mt-5'> 
            <input type='checkbox'id='men'className='h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  text-gray-500 '/> <span className='flex justify-center items-center text--gray-800'><LuIndianRupee /></span><span className='text-sm sm:text-sm md:text-md lg:text-lg  text-gray-800 ml-2'>2 500.00</span>
            </div>
            <div className='flex justify-start items-center  space-x-0 mt-5  lg:space-x-2'> 
            <input type='checkbox'id='women'className='h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7  text-gray-500 '/> <span className='text-gray-800 flex justify-center items-center'><LuIndianRupee /></span><span className='text-sm sm:text-sm md:text-md lg:text-lg  text-gray-800 ml-2'>2 501.00</span>
            </div>
            
            
          </div>
          
      
            
            
          
          
        
      
         {/*main content*/}
         <div className= 'bg-white w-8/12 h-full '>

        <div className='grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div>
            <Image src={ `/Image (7).png`}
            alt='image1'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Air Force 1 Mid&apos;07</p>
            <p className='text-gray-500'>Men&apos;s Shoes</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>10 795.00</span></p>
            </div>
            <div>
            <Image src={ `/Rectangle (1).png`}
            alt='image2'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Court Vision Next Low Nature</p>
            <p className='text-gray-500'>Men&apos;s Shoes</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>4 995.00 </span></p>
                </div>
                <div>
            <Image src={ `/Rectangle (2).png`}
            alt='image3'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Air Force 1 PLT.AF.ORM</p>
            <p className='text-gray-500'>Women&apos;s Shoes</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>8 695.00 </span></p>
            </div>
            <div>
            <Image src={ `/Rectangle (3).png`}
            alt='image4'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Air Force 1 React</p>
            <p className='text-gray-500'>Men&apos;s Shoes</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>13 295.00 </span></p>
             </div>
             <div>
            <Image src={ `/Rectangle (5).png`}
            alt='image5'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Promo Exculsion</p>
            <p className='text-gray-500'>Air jordan 1 Elevate Low</p>
            <p className='text-gray-500'>Women&apos;s Shoes</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>11 895.00 </span></p>

             </div>
             <div>

            <Image src={`/Rectangle (6).png`}
            alt='image6'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Standard Issue</p>
            <p className='text-gray-500'>Women&apos;s Basketball Jursey</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>2 895.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (7).png`}
            alt='image7'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Promo Exculsion</p>
            <p className='text-gray-500'>Nike Dunk Low Retro SE</p>
            <p className='text-gray-500'>Men&apos;s Shoes</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>9 695.00 </span></p>

             </div>
              <div>
            <Image src={ `/Rectangle (8).png`}
            alt='image8'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Sustainable Material</p>
            <p className='text-gray-500'>Nike Dry FIT UV Hyverse</p>
            <p className='text-gray-500'>Men&apos;s Short-sleeves Graphic Fitness Top</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>2 495.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (9).png`}
            alt='image9'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Court Vision Low</p>
            <p className='text-gray-500'>Men&apos;s Shoes</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>5 695.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (10).png`}
            alt='image10'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Dry FIT Ready</p>
            <p className='text-gray-500'>Men&apos;s Short-sleeves Top</p>
            <p className='text-gray-500'>3 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>2 495.00 </span></p>

             </div>
             < div>
            <Image src={ `/Rectangle (11).png`}
            alt='image11'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike One Leak Protection:Period</p>
            <p className='text-gray-500'>Women&apos;s Mid Rise 18cm(approx) Biker shorts</p>
            <p className='text-gray-500'>2 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>3 395.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (12).png`}
            alt='image12'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Air Force 1 LV8 3</p>
            <p className='text-gray-500'>Older Kide&apos;s shoe</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>7 495.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (29) - Copy.png`}
            alt='image13'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Blazer Low Platform</p>
            <p className='text-gray-500'>women&apos;s Shoes</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>8 195.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (13).png`}
            alt='image14'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Air Force 1&apos;07</p>
            <p className='text-gray-500'>women&apos;s Shoes</p>
            <p className='text-gray-500'>2 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>8 195.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (14).png`}
            alt='image15'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Pro Dry FIT </p>
            <p className='text-gray-500'>Men&apos;s Tight Fit sleeveless Top</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>1 495.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (15).png`}
            alt='image16'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Dunk Low Retro</p>
            <p className='text-gray-500'>Menvs Shoes</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>8 695.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (16).png`}
            alt='image17'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Air Max Sc</p>
            <p className='text-gray-500'>Women&apos;s Shoes</p>
            <p className='text-gray-500'>2 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>5 995.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (17).png`}
            alt='image18'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Dry FIT UV Miler</p>
            <p className='text-gray-500'>Men&apos;s Short sleeves Running Top</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>1 695.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (18).png`}
            alt='image19'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Air Max System</p>
            <p className='text-gray-500'>OLder kid&apos;s shoes</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>6 495.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (19).png`}
            alt='image20'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Alate All U</p>
            <p className='text-gray-500'>Women&apos;s Light Support Lightly Lined U  Sports Bra</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>2 195.00 </span></p>

             </div>
             < div>
             <Image src={ `/Rectangle (20).png`}
             alt='image21'
             height={400}
             width={400}
             />
           
             <p  className='text-red-600'>Just In</p>
             <p className='text-gray-500'>Nike Course Legacy Lift</p>
             <p className='text-gray-500'>Women&apos;s Shoes</p>
             <p className='text-gray-500'>2 Colour</p>
              <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>7 495.00 </span></p>
 
              </div>
              <div>
            <Image src={ `/Rectangle (31).png`}
            alt='image22'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Swoosh</p>
            <p className='text-gray-500'>Wome&apos;s Medium-support Padded support Bra Tank</p>
            <p className='text-gray-500'>2 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>3 095.00 </span></p>

             </div>
            <div>
            <Image src={ `/Rectangle (34).png`}
            alt='image23'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike SB Zoom Janoski OG+</p>
            <p className='text-gray-500'>Men&apos;s Shoes</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>8 995.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (32).png`}
            alt='image32'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Dri FIT Run Division Rise 365</p>
            <p className='text-gray-500'>Men&apos;s Runnig Tank</p>
            <p className='text-gray-500'>2 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>3 495.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (21).png`}
            alt='image33'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Dry FIT Challanger</p>
            <p className='text-gray-500'>Men&apos;s 18cm(approx) 2 in 1 versatile Shorts</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>2 495.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (22).png`}
            alt='image34'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Jordan Series ES</p>
            <p className='text-gray-500'>Men&apos;s Shoes</p>
            <p className='text-gray-500'>2 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>7 495.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (23).png`}
            alt='image35'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Outdoor Play</p>
            <p className='text-gray-500'>Over Kid&apos;s Oversized Jacket</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>3 895.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (25).png`}
            alt='image36'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Sportswear Trend </p>
            <p className='text-gray-500'>Older Kid&apos;s(Girl&apos;s)High Waisted Woven Shorts</p>
            <p className='text-gray-500'>2 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>2 495.00 </span></p>

             </div>
           <div>
            <Image src={ `/Rectangle (33).png`}
            alt='image37'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike Blazer Low &apos;77 Jumbo</p>
            <p className='text-gray-500'>women&apos;s Shoes</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>8 595.00 </span></p>

             </div>
             <div>
            <Image src={ `/Rectangle (26).png`}
            alt='image38'
            height={400}
            width={400}
            />
          
            <p  className='text-red-600'>Just In</p>
            <p className='text-gray-500'>Nike SB Force 58</p>
            <p className='text-gray-500'>Skate Shoes</p>
            <p className='text-gray-500'>1 Colour</p>
             <p className='flex'><span className='text-gray-800 '>MRP:</span> <span className='ml-1 mt-1'><LuIndianRupee /></span><span className='text-gray-800 ml-1'>5 995.00 </span></p>

             </div>
           
            
             




            </div>
            </div>
            </div>
            </div>
  )
}
            export default page