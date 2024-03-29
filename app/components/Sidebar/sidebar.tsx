
"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from "@/public/assets/logo.png";
import { Home, Search, LibraryBig, LogIn } from 'lucide-react';


import Avatar from '@mui/material/Avatar';

type ButtonName = 'home' | 'search' | 'library' | 'login';

const Sidebar: React.FC = () => {
  const [activeButton, setActiveButton] = useState<ButtonName | null>(null);

  const handleButtonClick = (buttonName: ButtonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className='text-white h-[905px]	 border border-gray-100 border-opacity-20 bg-[#141414] bg-opacity-35 rounded-xl p-5'>
      <Avatar src="https://mcusercontent.com/4d495ae0bbe9396d5b9e37d4a/images/a87ee1e9-bf51-e393-4b28-3682dae1bf2e.png" alt='logo' />

      <div className='flex items-center justify-center mt-8'>
        <ul className='flex flex-col items-center justify-between gap-8 self-center'>
          
          <button
            className={`cursor-pointer hover:bg-gray-200 hover:bg-opacity-15 p-3 rounded-full ${
              activeButton === 'home' ? 'bg-gray-200 bg-opacity-15' : ''
            }`}
            onClick={() => handleButtonClick('home')}
            title="Home Tooltip"
          >
            <Home />
          </button>

          <button
            className={`cursor-pointer hover:bg-gray-200 hover:bg-opacity-15 p-3 rounded-full ${
              activeButton === 'search' ? 'bg-gray-200 bg-opacity-15' : ''
            }`}
            onClick={() => handleButtonClick('search')}
          >
            <Search />
          </button>

          <button
            className={`cursor-pointer hover:bg-gray-200 hover:bg-opacity-15 p-3 rounded-full ${
              activeButton === 'library' ? 'bg-gray-200 bg-opacity-15' : ''
            }`}
            onClick={() => handleButtonClick('library')}
          >
            <LibraryBig />
          </button>

          <button
            className={`cursor-pointer hover:bg-gray-200 hover:bg-opacity-15 p-3 rounded-full ${
              activeButton === 'login' ? 'bg-gray-200 bg-opacity-15' : ''
            }`}
            onClick={() => handleButtonClick('login')}
          >
            <LogIn />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
