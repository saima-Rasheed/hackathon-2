import React from 'react'
import { SiNike } from "react-icons/si";
const page = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
            <SiNike className='mt-20 size-10'/>
            <h2 className='text-2xl font-bold text-gray-900  mt-5'>BECOME A NIKE MEMBER</h2>
            <p className='text-sm  text-gray-500 mt-5'>
                Create your Nike Member profile and get<br />
                first access to the every best of Nike<br />
                products inspiration and community.
            </p>
            <form className='flex flex-col gap-2 justify-center items-center mt-5'>
                <input type='email'name='E.mail'placeholder='Email address'  className='border  p-2 rounded  h-10 w-96'/>
                <input type='password'name='password'placeholder='password'  className='border  p-2 rounded  h-10 w-96'/>
                <input type='text'name='text'placeholder='First Name'  className='border  p-2 rounded  h-10 w-96'/>
                <input type='text'name='text'placeholder='Last Name' className='border  p-2 rounded  h-10 w-96' />
                <input type='date'name='Date'placeholder='Date of Birth'  className='border  p-2 rounded  h-10 w-96'/>
                <p className='text-gray-500'>Get a Nike's Member Reward every year on your Birth Day</p>
                 <div className='flex justify-center items-center'>
                <select id='countries'className='border border-gray-300 p-2 h-10 w-96 rounded text-gray-500'>
                    <option value=''disabled selected> choose a country</option>
                    <option value='USA'>Unites states</option>
                    <option value='UK'>United Kingdom</option>
                    <option value='INDIA'>INDIA</option>
                    <option value='PAKISTAN'>pakistan</option>
                </select>

                </div>
                <form className='flex flex-col gap-2 justify-center items-center mt-5'>
                <input type='e-mail'name='e-mail'placeholder='Enter Your E- mail'  className='border  p-2 rounded  h-10 w-96'/>
                </form>
                <div className='flex justify-center  gap-10'>
                    <button className='border border-gray-900 h-20 w-20 bg-white text-gray-600'>MALE</button>
                    <button  className='border border-gray-900 h-20 w-20 bg-white text-gray-600 '>FEMALE </button>
                
                </div>
                <div className='flex justify-center items-center space-x-2 mt-5'> 
            <input type='checkbox'id='keepMeSignIn' className='h-4 w-4  text-gray-500'/> <div className='text-sm md:text-md lg:text-lg text-gray-500'> Sign up for e-mails to getupdates from Nike on </div> <div className='text-gray-500 text-sm md:text-md lg:text-lg'>products ,offers and your Member benefits</div>
            </div>
            <div className='flex flex-col justify-end items-center mt-8'>
              <div className='text-gray-500'>By logging in. you agree to Nike's <a href='#' className='underline'>Policy </a>and<a className='underline'>Term of Use</a></div>
             <button className='bg-black text-gray-400 h-10 w-80 mt-2 md:mt-4 lg:mt-8'>Sign In</button>
             <p className='mt-5 text-gray-500'>Already a Member <a href='#' className='underline'>Sign In </a></p>
            </div>
            </form>
        
        </div>
      
    </div>
  )
}

export default page
