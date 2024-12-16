import React from 'react'
import Image from 'next/image'

const Topbar = () => {
  return (
    
         <div>
            <nav className='flex justify-end'>
                <div className='h-5 w-5 absolute left-2'>
                 <Image src={`/Frame@2x.png`}
                 alt='icon'
                 height={20}
                 width={20}
                  />
                </div> 
      <ul className='flex justify-end gap-4 text-sm'>
        <li>Find a Store |</li>
        <li>Help |</li>
        <li>Join Us |</li>
        <li>Sign In |</li>
      </ul> 
      </nav> 
           </div>
      
    
  )
}

export default Topbar
