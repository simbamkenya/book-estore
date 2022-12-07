import React from 'react'

function Footer() {
    // grid grid-cols-8 gap-8 py-8 px-6
  return (
    <footer className='bg-yellow-900 mt-auto'>
        <div className='md:container md:mx-auto'>
            <div className='flex'>
                <div className='w-3/6 bg-slate-400 p-6'>
                    <div className=''>
                        <img src="/bookstore-logo.JPG" className='h-24'/>
                    </div>
                    <div className='flex gap-6 py-4'>
                        <ul className=''>
                            <li>
                                <h3 className='font-bold text-sm text-gray-800 uppercase'>address:</h3>
                                <span className='text-sm'>
                                    The one Building, Ground Floor Shop 12
                                </span>
                            </li>
                            <li>
                                <h3 className='font-bold text-sm text-gray-800 uppercase'>Phone:</h3>
                                <span className='text-sm'>
                                    +254 789 345768
                                    <br/>
                                    +254 734 787447
                                </span>
                            </li>
                        </ul>
                        <ul className=''>
                            <li>
                                <h3 className='font-bold text-sm text-gray-800 uppercase'>Email:</h3>
                                <span className='text-sm'>
                                    simbamkenya@gmail.com
                                </span>
                            </li>
                            <li>
                                <h3 className='font-bold text-sm text-gray-800 uppercase pt-8'>Opening Hours:</h3>
                                <span className='text-sm'>
                                    "Mon - Sat:8am -7pm"
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className='w-3/6 flex flex-1 justify-around bg-pink-300 p-8'>
                    <div>
                        <h2 className='font-bold text-sm text-gray-800 uppercase'>Shop</h2>
                        <ul className='text-gray-500 '>
                            <li className='mb-4'>Shop</li>
                            <li className='mb-4'>Books</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-bold text-sm text-gray-800 uppercase'>Simba Store</h2>
                        <ul className='text-gray-500'>
                            <li className='mb-4'>Shop</li>
                            <li className='mb-4'>Books</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=''>
                <hr className='my-8 border-gray-200 sm:mx-auto'/>
                <div className='flex justify-between px-4'>
                    <div>
                        <p> &copy; Simba Book Store 2022. All Rights Reserved.</p>
                    </div>
                    <div>
                        <p>MPESA</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer