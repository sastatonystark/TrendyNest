import React from 'react'
import {HiArrowPathRoundedSquare} from "react-icons/hi2"
import {HiOutlineCreditCard, HiShoppingBag} from "react-icons/hi"
const FeaturesSection = () => {
  return (
    <section className='px-4 py-16 bg-white'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 text-center'>
            {/* Featured  */}
            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-4'>
                    <HiShoppingBag className="text-xl" />
                </div>
                <h4 className="tracking-tighter mb-2">
                    FREE INTERNATIONAL SHIPPING
                </h4>
                <p className='text-gray-600 text-sm tracking-tighter'>
                    On All Orders Over $100.00
                </p>
            </div>

            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-4'>
                    <HiArrowPathRoundedSquare className="text-xl" />
                </div>
                <h4 className="tracking-tighter mb-2">
                    45 Days Return
                </h4>
                <p className='text-gray-600 text-sm tracking-tighter'>
                    Money Back Guarantee
                </p>
            </div>


            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-4'>
                    <HiOutlineCreditCard className="text-xl" />
                </div>
                <h4 className="tracking-tighter mb-2">
                    SECURE CHECKOUT
                </h4>
                <p className='text-gray-600 text-sm tracking-tighter'>
                    100% Secured Checkout Process
                </p>
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection