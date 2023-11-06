import React from 'react'
import Image from 'next/image'


export default function Header() {
  return (
    <div className='min-h-[4rem] bg-red-400 items-center flex justify-start flex-row-reverse md:pr-20 pr-10'>
        

            <div className='text-white justify-self-start  pl-10'>
                Search
            </div>

            <div className='flex flex-row text-white justify-end basis-1/5  gap-3'>
                <div className=''>
                    Sign up
                </div>

                <div>
                    Login
                </div>

            </div>

            <div className='grow pl-6 md:pl-10'>
                <Image src='logo.svg' alt='logo' width={30} height={30}/>
            </div>

        
        
    </div>
  )
}
