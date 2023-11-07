import React from 'react'
import Image from 'next/image'


export default function Header() {

    const buttonStyle = 'p-3 rounded-md  transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-30'
   
  return (
    <div className=' text-white min-h-[4rem] bg-green-500 items-center flex  flex-row  '>
        

            <div className=' xsm:basis-1/2 pl-3 md:pl-10'>
                <div >
                    <a href='#'>
                        <Image className='' src='logo.svg' alt='logo' width={30} height={30}/>
                    </a>
                </div>
            </div>

            <div className=' xsm:basis-1/2 flex flex-row items-center justify-end gap-5 sm:pr-3 pr-1'>
                <div className=' flex rounded-xl p-2 hover:bg-green-400 duration-500 transition' >
                    

                    <Image className=' mx-1 ' src='./search_icon.svg' width={20} height={20} alt='search-logo' />
                    
                    <button className=''>

                    Search
                    </button>
                    

                </div>

                <div className='flex flex-row items-center gap-3 '>
                    <button type='button' className='rounded-xl p-2 hover:bg-green-400 duration-200 transition'>
                        Sign up
                    </button>

                    <div className= 'rounded-xl p-2 hover:bg-green-400 duration-200 transition'>
                        <button type='button'>

                        Login
                        </button>
                    </div>

                </div>

                

                <div className='rounded-xl p-2 hover:bg-green-400 duration-200 transition'>
                    <a>
                        <div className="hover:bg-gray-50 relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>
                    </a>
                </div>
            </div>


            



            

        
    </div>
  )
}
