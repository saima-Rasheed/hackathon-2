import React from 'react'
import Link from 'next/link'
import { SiNike } from "react-icons/si";

const Login = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center text-2xl font-bold '>
               <SiNike className='mb-4 mt-4 '/>
        
            <h2>YOUR ACCOUNT</h2>
            <h2>EVERYTHING FOR </h2>
            <h2>NIKE</h2>
            </div>
            <form className='flex flex-col justify-center items-center text-gray-500 mt-8'>
              
            <input type='email' name='email' placeholder='E - mail  address' className='border  p-2 rounded  h-10 w-96'/>
            <input type='password' name='password' placeholder='Password' className='border p-2 rounded h-10 w-96 mt-2'/> 
            </form>
             <form className='p-4 text-gray-700 '>
              <div className='flex justify-center items-center space-x-2 mt-5'> 
            <input type='checkbox'id='keepMeSignIn' className='h-4 w-4  text-gray-500'/> <div className='text-large'> keep me signed in </div></div><div className='flex-col justify-center items-center ml-56  mt-5'> Forgotten your password? </div>
            
            <div className='flex flex-col justify-end items-center mt-8'>
              <div>By logging in. you agree to Nike&apos;s <a className='underline'>Policy </a>and<a className='underline'>Term of Use</a></div>
             <button className='bg-black text-gray-400 h-10 w-80 mt-8'>Sign In</button>
             <p className='mt-5'>Not a Member ? <a className='underline'>Join us </a></p>
            
            </div>
            
            </form>  
      
    </div>
  )  
}

export default Login
