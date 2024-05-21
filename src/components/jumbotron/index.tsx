// import './style.css';

import { useEffect, useState } from 'react';

export default function Jumbotron() {
  const [flipped, setFlipped] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setFlipped(scrollTop % 2 === 0); // Balik gambar setiap kali scrollTop bernilai genap
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      <div className='grid grid-cols-6 gap-2 place-items-stretch'>
        <div className='relative'>
          <div
            className='absolute bottom-0 top-0 left-20'
            style={{
              transform: flipped ? 'scaleX(-1)' : 'scaleX(1)',
              transition: 'transform 0.8s ease-in-out ',
            }}
          >
            <img
              width={'100%'}
              src='/src/assets/images/jumbotron/bio1.jpg'
              alt=''
              className='w-[224px] rotate-30 rounded-xl relative top-24'
            />
            <img
              width={'100%'}
              height={'100%'}
              src='/src/assets/images/jumbotron/car1.jpg'
              alt=''
              className='w-[200px] top-auto left-10 absolute rounded-xl rotate-30'
            />
          </div>
        </div>
        <div className='flex flex-col gap-3 text-center w-full py-4 md:py-11 xs:pb-0 mt-8 md:mt-24 col-span-4'>
          <div className='flex flex-col gap-2.5'>
            <span className='text-lg'>⭐⭐⭐⭐⭐⭐</span>
            <span className='text-sm md:text-[18px] font-normal'>
              Easy to use and make you famous
            </span>
          </div>
          <h1
            className='w-[95%] md:w-[69%] text-5xl md:text-6xl lg:text-8xl font-semibold mb-7 tracking-tight self-center animate-text 
        bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'
          >
            Create your site in seconds
          </h1>
          <div className='mx-auto'>
            <form className='flex gap-0 relative justify-center'>
              <div className='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
              <div className='relative w-[60%]'>
                <span className='absolute inset-y-0 flex items-center pl-3 text-gray-900 font-medium'>
                  bio.co/
                </span>
                <div className='animate-border inline-block rounded-l-md bg-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-[2px]'>
                  <input
                    type='text'
                    name='link'
                    className='pl-16 pr-4 py-3 w-full rounded-l focus:border-none focus:ring-0 focus:outline-none'
                    placeholder='yourname'
                  />
                </div>
              </div>
              <div className='relative inline-flex group'>
                <div className='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
                <a
                  href='#'
                  className='relative inline-flex items-center justify-center py-3 px-5 text-xs md:text-lg font-semibold text-white transition-all duration-200 bg-gray-900 font-pj rounded-r-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
                  role='button'
                >
                  Claim my site
                </a>
              </div>
            </form>
          </div>
          <span className='text-sm md:text-[16px] font-normal mt-2 md:mt-5 text-gray-600'>
            It’s free, and takes less than a minute
          </span>
        </div>
        <div className='relative'>
          <div className='absolute bottom-0 top-0 right-20'>
            <img
              width={'100%'}
              src='/src/assets/images/jumbotron/bio2.jpg'
              alt=''
              className='w-[224px] -rotate-30 rounded-xl relative top-24'
            />
            <img
              width={'100%'}
              height={'100%'}
              src='/src/assets/images/jumbotron/car2.jpg'
              alt=''
              className='w-[200px] absolute top-auto right-10 -rotate-30 rounded-xl'
            />
          </div>
        </div>
      </div>
    </header>
  );
}
