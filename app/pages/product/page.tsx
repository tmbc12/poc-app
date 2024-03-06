import React from 'react'
import Cards from '@/app/components/cards/cards';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const product = () => {
  return (
    <div className='  p-10 flex flex-col justify-items-between  border border-gray-100 border-opacity-25 bg-[#141414] bg-opacity-20 rounded-xl	'>
      <div className="flex flex-col px-5 max-w-[953px]">
        <h1 className="w-full text-3xl font-medium tracking-tighter bg-clip-text text-white max-md:max-w-full max-md:text-2xl">
          List of Black T-shirt
        </h1>
        <div className=' mt-5 gap-5 flex'>
          <Button
            className=' text-white bg-gray-200 bg-opacity-25 rounded-full p-3 font-semibold'>
            Recommended
          </Button>
          <Button
            className=' text-white bg-gray-200 bg-opacity-25 rounded-full p-3 font-semibold'>
            Lowest Price
          </Button>
          <Button
            className=' text-white bg-gray-200 bg-opacity-25 rounded-full p-3 font-semibold'>
            Top Rated
          </Button>
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default product