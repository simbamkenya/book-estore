import React from 'react'
import Rate from './Rate'

function HotPick() {
  return (
    <div className="md:container md:mx-auto">
        <h2>Hot Pick</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <a href="#">
                <div className="">
                    <img className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"/>
                </div>
                <h3 className='capitalize font-medium'>Category</h3>
                <h3>Book title</h3>
                <Rate />
                <p className='text-lg font-bold'>Ksh 1,000.00 </p>
            </a>



            <a href="#">
                <div className="">
                    <img className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"/>
                </div>
            </a>
            <a href="#">
                <div className="">
                    <img className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"/>
                </div>
            </a>
            <a href="#">
                <div className="">
                    <img className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"/>
                </div>
            </a>
            <a href="#">
                <div className="">
                    <img className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"/>
                </div>
            </a>
            <a href="#">
                <div className="">
                    <img className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"/>
                </div>
            </a>
            <a href="#">
                <div className="">
                    <img className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"/>
                </div>
            </a>
            <a href="#">
                <div className="">
                    <img className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"/>
                </div>
            </a>
        </div>
    </div>
  )
}

export default HotPick