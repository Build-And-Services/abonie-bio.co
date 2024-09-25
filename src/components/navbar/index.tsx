import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='py-3 my-4 px-4 w-[95%] md:w-[80%] bg-white rounded-full text-center shadow-md mx-auto'>
      <div className='justify-between items-center px-3 pb-1 hidden md:flex'>
        <div className='flex gap-3'>
          <div className='group'>
            <a href='#'>
              <img
                className='w-12 h-12 mx-auto'
                src='/src/assets/images/logo-abonie-new.png'
                alt='logo-abonie'
              />
            </a>
          </div>
          <div className='group'>
            <a
              href='#'
              className='flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-900 group-hover:text-blue-600'
            >
              <span className='block'>
                <span className='block text-base font-medium'>Features</span>
                <span className='block w-5 mx-auto h-1 group-hover:bg-blue-600 rounded-full'></span>
              </span>
            </a>
          </div>
          <div className='group'>
            <a
              href='#'
              className='flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-900 group-hover:text-blue-600'
            >
              <span className='block'>
                <span className='block text-base font-medium'>FAQ</span>
                <span className='block w-5 mx-auto h-1 group-hover:bg-blue-600 rounded-full'></span>
              </span>
            </a>
          </div>
        </div>
        <div className='flex gap-3'>
          <a
            href='#'
            target='_blank'
          >
            <span className='block'>
              <button className='middle none center rounded-3xl bg-blue-600 py-3 px-6 font-sans text-sm font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
                Join Us
              </button>
            </span>
          </a>
        </div>
      </div>

      <div
        onClick={handleNav}
        className='block md:hidden'
      >
        <div className='flex justify-between items-center'>
          <img
            className='w-7 h-7'
            src='/src/assets/images/logo-abonie.png'
            alt='logo-abonie'
          />
          <div>{nav ? '' : <AiOutlineMenu size={20} />}</div>
        </div>
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden right-0 h-full top-0 w-[100%] bg-white ease-in-out duration-500 z-10'
            : 'ease-in-out w-[100%] duration-500 fixed top-0 bottom-0 right-[-100%]'
        }
      >
        <div className='flex justify-between'>
          <div></div>
          <li
            className='mx-5 py-4 text-end'
            onClick={handleNav}
          >
            <AiOutlineClose
              size={25}
              className='text-right'
            />
          </li>
        </div>
        <div className='w-[90%] mx-auto my-auto'>
          <li className='text-start text-lg font-semibold p-4 border-b duration-300 hover:text-black cursor-pointer border-gray-200'>
            Features
          </li>
          <li className='text-start text-lg font-semibold p-4 border-b duration-300 hover:text-black cursor-pointer border-gray-200'>
            FAQ
          </li>
          <li className='text-start text-lg font-semibold p-4 border-b duration-300 hover:text-black cursor-pointer border-gray-200'>
            <button>Join Us</button>
          </li>
        </div>
      </ul>
    </nav>
  );
}
