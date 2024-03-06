import React from 'react'
import { Sparkles, Lightbulb, Shirt } from 'lucide-react';

// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';
// import Card from '@mui/material/Card';
// import Box from '@mui/material/Box';
// import Chip from '@mui/material/Chip';
// import Divider from '@mui/material/Divider';
// import Typography from '@mui/material/Typography';
const home = () => {
    return (
        <div className='  p-10 flex flex-col justify-items-between  border border-gray-100 border-opacity-25 bg-[#141414] bg-opacity-20 rounded-xl	'>
            <div className="flex flex-col px-5 max-w-[953px]">
                <h1 className="w-full text-5xl font-medium tracking-tighter bg-clip-text text-zinc-500 max-md:max-w-full max-md:text-4xl">
                    <span className=' text-[#833991]'>Hello, John</span>
                    <br />
                    <span className="text-[#828282]">How can I help you today?</span>
                </h1>

                <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full cursor-pointer">
                            <Link href="/pages/product" >
                                <div className="flex flex-col grow px-5 pt-7 pb-4 w-full text-2xl font-medium tracking-tight text-gray-200 rounded-3xl bg-neutral-700 max-md:mt-5">
                                    <h1>Trending smart watches 2024</h1>
                                    <Sparkles size={40}
                                        className="self-end mt-16 rounded-full aspect-square bg-neutral-900  max-md:mt-10 p-2" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full cursor-pointer">
                            <div className="flex flex-col grow px-5 pt-7 pb-4 w-full text-2xl font-medium tracking-tight text-gray-200 rounded-3xl bg-neutral-700 max-md:mt-5">
                                <h1>Portable vacuum cleaner</h1>
                                <Lightbulb size={40}
                                    className="self-end mt-16 rounded-full aspect-square bg-neutral-900 max-md:mt-10 p-2"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full cursor-pointer">
                            <div className="flex flex-col grow px-5 pt-7 pb-4 w-full text-2xl font-medium tracking-tight text-gray-200 rounded-3xl bg-neutral-700 max-md:mt-5">
                                <h1>Kurti sets under <br /> 600</h1>
                                <Shirt size={40}
                                    className="self-end mt-16 rounded-full aspect-square bg-neutral-900  max-md:mt-10 p-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-96 bg-black p-5 rounded-full'>
                <div className=' flex gap-5 justify-between'>
                    <input type="text" placeholder='Search' className=' w-[1000px] bg-transparent border-none outline-none text-white pl-2' />
                    <Button className=' flex bg-white p-2 rounded-full  text-black hover:bg-white'><span className=' '><Sparkles /></span><span className=' ml-2 text-lg font-bold '>Shop</span></Button>
                </div>
            </div>
        </div>

    )
}

export default home

{/* <Card variant="outlined" sx={{ maxWidth: 360 }} className=' mt-12 w-80 bg-black border'>
                    <Box sx={{ p: 2 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography gutterBottom variant="h5" component="div" className=' text-white'>
                                Trending smart watches 2024
                            </Typography>
                        </Stack>

                    </Box>
                    <Box sx={{ p: 2 }}>
                        <Stack direction="row" spacing={1} className=' mt-5'>
                        <Sparkles size={40} color='white'
                                    className="self-end mt-16 rounded-full aspect-square bg-neutral-900  max-md:mt-10 p-2" />
                        </Stack>
                    </Box>
                </Card> */}