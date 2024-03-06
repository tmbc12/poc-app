import React from 'react'
import Button from '@mui/material/Button';

const cards = () => {
    return (
        <div className=' mt-10'>
            <div className="px-5 max-w-[997px]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex overflow-hidden relative flex-col grow shadow-2xl aspect-[0.72] max-md:mt-6">
                            <img
                                loading="lazy"
                                srcSet="https://mcusercontent.com/4d495ae0bbe9396d5b9e37d4a/images/908d6eeb-63d7-7a0a-2fce-15f2239cbdd4.png"
                                className="object-cover absolute inset-0 size-full"
                            />
                            <div className="flex relative flex-col items-start pt-5 pr-16 pb-9 pl-5 rounded-none max-md:pr-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://mcusercontent.com/4d495ae0bbe9396d5b9e37d4a/images/163416ee-bf1b-9107-adba-6523aeac7ed8.png"
                                    className="rounded-full aspect-square w-[43px]"
                                />
                            </div>
                            <div className="flex relative z-10 flex-col mt-20 ml-5 w-14 font-medium whitespace-nowrap max-md:mt-10 max-md:ml-2.5">
                                <div className="flex gap-1.5 justify-between px-3 py-1.5 text-xs leading-5 text-black rounded-xl bg-stone-50">
                                    <h1 className="my-auto">4.4</h1>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e949587acd731e85e6203547249344304f22695853baa8b99cffc1e33be7eba?"
                                        className="w-3 aspect-[0.93]"
                                    />
                                </div>
                                <h1 className="mt-3 text-xs text-neutral-200">Jump Cuts </h1>
                            </div>
                            <div className="flex relative flex-col px-5 pt-2.5 pb-5 w-full rounded-none">
                                <h1 className="text-xl font-medium text-stone-50">
                                    Men Printed Polo Neck Polyester Black T-Shirt
                                </h1>
                                <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                                    <h1 className="my-auto text-xl font-bold text-stone-50">
                                        ₹349
                                    </h1>
                                    <Button className="justify-center px-4 py-3.5 text-sm font-medium leading-7 text-white rounded-2xl font-semibold backdrop-blur-[4.807136058807373px] bg-stone-50 bg-opacity-20 max-md:px-5">
                                        Shop now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cards