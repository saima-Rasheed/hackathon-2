import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import Image from 'next/image';
import { LuIndianRupee } from "react-icons/lu";



const page = () => {
  return (
    <div>
        <div className='flex'>
        
        <div className='bg-white h-full w-8/12 flex flex-col items-center'>
        <p className='text-gray-500 text-2xl'>How would you like to get your order?</p>
        <p className='text-sm text-gray-500 mt-10'> Custom regulation for India reuire a copy of recipient's <br />
            KYC.The address of the KYC needs to matc the shipping<br />
            address. Our courier will contact you via sms/e-mail to obtain<br />
            a copy of your KYC.the KYC will be stored securely and <br /> used solely for the purpose of claerin custom(incliuding
            <br />sharing it with custom officials) for all oreders and returns.If <br /> your KYC doesn't match your shipping addresss,please click
            <br />the link for more information.<p className='underline'>Learn More</p>

          </p>
          
        
        <div className='bg-white h-32 w-96 border border-gray-900 text-gray-600 flex justify-center items-center text-xl'><CiDeliveryTruck  className=' mr-10'/> Deliver it</div>
         <h2 className='font-bold text-2xl '>Enter your name and address:</h2> 
         <div className='flex flex-col justify-center items-center space-x-2 mt-5'>
         <form className='flex flex-col gap-5 justify-center items-center mt-5'>
         <input type='text'name='text'placeholder='First Name'  className='border  p-2 rounded  h-10 w-96'/>
        <input type='text'name='text'placeholder='Last Name'  className='border  p-2 rounded  h-10 w-96'/>
        <input type='text'name='text'placeholder='Address Line 1'  className='border  p-2 rounded  h-10 w-96'/>
      <input type='text'name='text'placeholder='Address Line 1'  className='border  p-2 rounded  h-10 w-96'/>
                <input type='text'name='text'placeholder='Address Line 1'  className='border  p-2 rounded  h-10 w-96'/>
         </form> 
         <div className='flex justify-center items-center gap-5 mt-5'>
         <div className='bg-white border border-gray-800 h-20 w-36 text-gray-800 text-center pt-4 '> postal code </div>
         <div className='bg-white border border-gray-800 h-20 w-36 text-gray-800 text-center pt-4'> locality</div>
         </div>
            <input type='checkbox'id='saveThisAddressToMyProfile' className='h-5 w-5  text-gray-500'/> <div className='text-large text-gray-500'> Save this address to my profile </div> 
            
            <input type='checkbox'id='MakeThisMyPreferredAddress' className='h-5 w-5  text-gray-500'/> <div className='text-large text-gray-500'> Make this my preferred address </div>
           <p className='text-2xl text-gray-900'> What is your contact Information?</p>
           <form className='flex flex-col gap-5 justify-center items-center mt-5'>
         
           <input type='e-mail'name='e-mail'placeholder='E-mail'  className='border  p-2 rounded  h-10 w-96'/>
           <input type='phone'name='phone'placeholder='Phone Number'  className='border  p-2 rounded  h-10 w-96'/>
           </form>
           <p className='text-2xl text-gray-900 mt-2'> What is your PAN?</p>
           <form className='flex flex-col gap-5 justify-center items-center mt-5'>
           <input type='PAN'name='PAN'placeholder='PAN'  className='border  p-2 rounded  h-10 w-96'/>
           <p className='text-gray-500 text-sm mt-0'>Enter your PAN to enable the payment with UPI,NET Banking or Local</p>
           <div className='flex justify-center items-center space-x-2 mt-2 mb-2'>
            
           <input type='checkbox'id='saveThisAddressToMyProfile' className='h-5 w-5  text-gray-500'/> <div className='text-large text-gray-500'> Save PAN detail to Nike profile </div> 
           
            
            
            </div>
           </form>
           <button className='text-gray-500 bg-gray-400 h-20 w-80 rounded-3xl'>continue</button>
            <hr/>
            <div className='text-xl font-bold'>Delivery</div>
            <hr />
            <div className='text-xl font-bold'>shipping </div>
            <hr />
            <div className='text-xl font-bold'>Billing</div>
            <hr  />
            <div className='text-xl font-bold'>Banking</div>
            </div>
            </div>
           
         
        <div  className='bg-white h-[full] w-4/12 ' >
        <h2 className='text-gray-500 '>Order Summary</h2>
        
        
        <p> SubTotal</p>     
         <p>20 890.00</p>
        
        <p> Delivery/Shipping</p> 
        <p>Free</p>
        <hr />
        <br/>
        <p>Total</p>
        <p>20 890</p>
        <hr />
        <br />
        <p className='text-gray-500 text-sm'>The total reflects the price of order including all duties and texes</p>
        <p className='font-bold text-xl text-gray-700'>Arrives Mon,27 Mar-Wed,12 April</p>
        <div className='grid grid-cols-2'>
            <div className='mt-5'>
        <Image src={`/Image (11).png`}
        alt='image'
        height={200}
        width={200}
        />
        </div>
        <div className='font-semibold text-xl text-gray-700'>
        <p>Nike Dri FIT</p>
        <p>ADV TechKnit</p>
        <p>Ultra Men's </p>
        <p>Short-sleeves</p>
         <p>Running Top</p>
         <p>QTY 1</p>
         <p>SIZE L</p>
          <LuIndianRupee/><p> 3895.00</p>
         </div>
         <div className='mt-5'>
        <Image src={`/shoe 3.png`}
        alt='image'
        height={200}
        width={200}
        />
        </div>
        <div className='font-semibold text-xl text-gray-700'>
        <p>Nike Air Max</p>
        <p>97 SE Men's</p>
        <p>shoes</p>
        <p>Short-sleeves</p>
         <p>Running Top</p>
         <p>QTY 1</p>
         <p>SIZE UK 8</p>
         <p> <LuIndianRupee /> 16,995.00</p>
         </div>
         </div>
        </div>
        </div>
        
        
        
        
        
    
    
        
        
        
    </div>

  )
}

export default page
