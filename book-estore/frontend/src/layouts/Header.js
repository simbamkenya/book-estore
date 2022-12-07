import React from 'react'

function Header() {
  return (
    <header className='bg-green-300'>    
        <div className='md:container md:mx-auto bg-indigo-400'>
           <div className='flex'>
                <img src="/bookstore-logo.JPG" className='h-12 w-48'/>
                <div>
                  <input className='bg-white h-12 pr-8 pl-2 rounded-full text-sm focus:outline-none' placeholder='Search...'/>
                </div>
                <div>
                  {/* account */}
                  <div>

                  </div>

                  {/* cart */}
                  <div></div>

                </div>
           </div>

           <div className='flex items-center'>
             <div className='px-4 py-3 bg-black text-white font-bold'>
               <i className='mr-2'>X</i>
               <span className=''>Shop by Category</span>
             </div>
             <ul className='flex space-x-8 px-4 py-3'>
                <li className=''><a className='font-semibold'>Home</a></li>
                <li className=''><a className='font-semibold'>Books</a></li>
                <li className=''><a className='font-semibold'>e-Gifts</a></li>
                <li className=''><a className='font-semibold'>Kenyan Books</a></li>
                <li className=''><a className='font-semibold'>Contact Us</a></li>
             </ul>
           </div>
        </div>
    </header>
  )
}

export default Header