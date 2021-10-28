import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className="">
      <Image
        src="/images/avatar.jpg"
        alt="user-avatar"
        className="w-32 h-32 mx-auto rounded-full"
        objectFit="contain"
        width="100"
        height="100"
        quality={100}
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Bob </span>Rowsse
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="https://github.com/"
        download="name"
      >
        <GiTie /> Download Resume
      </a>
      {/* social Icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* adress */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Stockholm, Sweden</span>
        </div>
        <p className="my-2">bobrowsse@gmail.com</p>
        <p className="my-2">+46762554295</p>
        <button
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r focus:outline-none from-green to-blue-400"
          onClick={() => window.open('mailto:bobrowsse@gmail.com')}
        >
          Email Me
        </button>
        <button
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
          onClick={changeTheme}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
