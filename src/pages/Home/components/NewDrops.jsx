import React from 'react'
import banner1 from "../../../assets/Images/Banner2.png"

const NewDrops = () => {
  return (
    <>
    <div className='px-15 py-6'>
    <div className="max-w-2xl space-y-3">
          <h1 className="font-extrabold text-4xl">SWEATSHIRTS</h1>
          <p className="font-medium">
            Check out our latest arrivals in the New Drops section — fresh
            styles, trending picks, and must-haves just landed. Stay ahead with
            the newest in fashion, tech, and more.
          </p>
        </div>
        <div className='flex gap-5 overflow-x-hidden w-auto  items-center py-10'>
            <img className='w-[49%] rounded-3xl' src={banner1} alt="" />
            <img className='w-[49%] rounded-3xl' src={banner1} alt="" />
        </div>
    </div>
    </>
  )
}

export default NewDrops
