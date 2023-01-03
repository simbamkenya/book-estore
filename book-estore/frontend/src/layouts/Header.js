import React from 'react'

function Header() {
  return (
    <header>    
     <div className='bg-green-300 py-4'>
        <div className='md:container mx-auto bg-indigo-400 py-2'>
          <div className='flex justify-between'>
              <div className='flex'>
                <div className='flex-none'>
                  <img src="/bookstore-logo.JPG" className='h-12 w-48'/> 
                </div>

                <div className='flex-auto '>
                  <input className='w-full bg-white py-3 px-4 pr-8 pl-2 rounded-full text-sm focus:outline-none' placeholder='Search...'/>
                </div>
              </div>
              
              <div className='flex items-center'>
               <div className='flex'>
                 <div className='mr-2'>
                   <svg xmlns="http://www.w3.org/2000/svg" className='fill-white h-12 w-12' viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/></svg>
                 </div>
                 <div className=''>
                   <span className='text-sm font-thin block text-white leading-3'>Hello!</span>
                   <span className="font-semibold text-sm text-white leading-3">My Account</span>
                 </div>
               </div>
               <div>
                 <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 fill-white' viewBox="0 0 24 24"><path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z"/></svg>
               </div>

              </div>
          </div>
        </div>
     </div>
           
    <div className='container mx-auto'>
      <div className='flex items-center'>
          <div className='px-4 py-3 bg-black text-white font-bold flex items-center'>
            <i className='mr-2'>
              <svg  className='fill-white h-8 w-8' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
            </i>
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