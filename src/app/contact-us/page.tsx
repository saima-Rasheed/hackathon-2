import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";

const page = () => {
  return (
    
    <div>
        <div className='flex'>
        <div className='text-xl font-semibold text-gray-800 h-auto w-9/12 bg-white'>
        <div className='flex  flex-col items-center'>
            <h2 className='mt-5'> GET HELP</h2>
            <div className='relative'>
            <input type='text' placeholder='what can we help you with?' className='border border-gray-800 rounded-md p-2 w-80 focus-outline-none focus:ring-2 focus:ring-blue-500 mt-5'/>
            <IoSearchOutline  className='absolute right-3 top-1/2 pb-1'/>
          
            </div>
            <div>
            <h2 className='text-gray-800 text-xl mt-5'>What Payment Options Can I Use on Nike Orders? </h2>
            <p className='text-gray-500 text-sm'>We want to make buying your favourite shoes and gear online fast and easy,and we accept the following payment options : <br/>
            Visa ,Mastercard,Diners Club, Discover,American Express,Visa Electron,Maestro<br/> If you enter your PAN information at checkout,you w&apos;ll be able for your order with PayTM or a local credit or debit card.<br/>
            Apple Pay<br/> <a href='#' className=' text-gray-800 underline ml-2 mr-2'>Nike Members</a>can store multiple debit or credit card in their profile for faster checkout.If you&apos;re not already a Member<a href='#' className='text-gray-800 underline ml-2 mr-2'>join us</a>today</p></div></div>
             
             <div className='flex justify-start gap-4 items-start mt-5'> <button className='bg-black text-gray-300 h-12 rounded-full w-20 sm:w-20 sm:text-sm md:w-28 text-sm max-lg:w-36 text-md'>JOIN US</button>
             <button className='bg-black text-gray-300 h-12 rounded-full w-20 sm:w-20 sm:text-sm md:w-28 text-sm max-lg:w-36 text-md '>SHOP NIKE</button>
             </div>
             <h2 className='text-2xl font-semibold text-gray-800 mt-5 '>FAQs</h2>
             <p className='text-xl font-semibold text-gray-800 mt-5 '>Does my card need international purchases enabled?</p>
             <p  className='text-gray-500 text-sm'>Yes, we recommend asking your bank to enable international purchases on your card.You will be notified at checkout<br/>if internation purchases needs to  be enabled<br/>Please note,some banks may charge a small transaction fee for international orders</p>
             <h2 className='text-xl font-semibold text-gray-800 mt-5 '>Can I pay for my order with multiple method?</h2>
             <p  className='text-gray-500 text-sm'>No, payment for Nike orders can&apos;t be split between multilple payment methods.</p>
             <h2 className='text-xl font-semibold text-gray-800 mt-5 '>What payment method is acceptd for SNKRS orders?</h2>
             <p  className='text-gray-500 text-sm'>you can use any accepted credit card tp pay for your SNKRS order</p>
             <h2 className='text-xl font-semibold text-gray-800 mt-5 '>Why don&apos;t I see Apple Pay as an option?</h2>
             <p  className='text-gray-500 text-sm'>To see Apple Pay as an option in the Nike App or on Nike.com You w&apos;ll need to use a compatible Apple device running the latest<br/>OS 
             ,be signed in to your iCloud account and have a supported card in your wallet.Additionally, you will need to use Safari to use<br/>Apple Pay on Nike.com</p>
              <p className='mt-5 text-sm md:text-sm lg:text-md'>Was this answer helpful?</p>
              <div className='flex'>
                <div><AiFillLike /></div>
                <div><BiSolidDislike /></div>
                <div>
                <h2 className='text-gray-500 mt-2 text-xl'>RELATED</h2>
                <p><a href='#'className='underline mt-2 ml-5'>WHAT ARE NIKE DELIVERY OPTIONS</a></p>
                <p><a href='#'className=' mt-2 underline ml-5'>HOW TO I GET FREE DELIVERY ON NIKE ORDERS?</a></p>
                </div>
              </div>
           </div>

            
            <div className='bg-white h-full w-3/12 flex flex-col items-center'>
            <h2 className='mt-2 md:mt-3 lg:mt-5 text-gray-800 text-md lg:text-lg font-semibold'>Contact Us</h2>
            <div className='mt-2 md:mt-3 lg:mt-5'><FaMobileAlt className='text-3xl'/></div>
            <p className='text-gray-800 text-sm  lg:text-md mt-2 md:mt-3 lg:mt-5'>000 8009190566</p>
            <p className='text-gray-800 text-sm md:text-sm lg:text-md'>Product & Orders:24 hours a day,</p>
            <p className='text-gray-800  text-sm md:text-sm lg:text-md'>7 Days a week</p>
            <p className='text-gray-800  text-sm md:text-sm lg:text-md'>Company Info &Enquiries:7:30-</p>
            <p className='text-gray-800  text-sm md:text-sm lg:text-md'>16:30, Monday-Friday</p>
             <div className='mt-2 md:mt-3 lg:mt-5'><RiMessage2Fill className='text-3xl'/></div> 
             <p className='text-gray-800 text-sm md:text-sm lg:text-md mt-2 md:mt-3 lg:mt-5'>24 hours a day</p>
             <p className='text-gray-800 text-sm md:text-sm lg:text-md'>7 Days a week </p>
              <div className='mt-2 md:mt-3 lg:mt-5'> <MdEmail className='text-3xl'/></div>
              <p className='text-gray-800text-sm md:text-sm lg:text-md mt-2 md:mt-3 lg:mt-5 '>We&apos;ll reply within</p>
              <p className='text-gray-800 text-sm md:text-sm lg:text-md'>five working days</p>
              <div><FaLocationDot className='text-3xl mt-2 md:mt-3 lg:mt-5'/></div>
              
              <p  className='text-gray-800 text-sm md:text-sm lg:text-md font-semibold mt-2 md:mt-3 lg:mt-5'>STORE LOCATOR</p>
              <p  className='text-gray-800 text-sm md:text-sm lg:text-md '>Find Nike retail stores near you</p>
            
             
             </div>
             


            
            </div>
            
      
    </div>
  )
}

export default page
 