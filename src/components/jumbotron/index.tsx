export default function Jumbotron() {
  return (
    <header>
      <div className='flex relative items-center justify-center overflow-hidden max-w-7xl w-full mx-auto'>
        <div className='container flex-col sm:flex-row md:flex-col lg:flex-row justify-center items-center mx-auto px-6 flex relative py-2 sm:py-10 md:py-3 lg:py-16'>
          <div
            className='sm:w-2/3 lg:w-full flex flex-col relative'
            data-aos='zoom-out-right'
          >
            <span className='w-20 h-2 bg-gray-800 dark:bg-white mb-12'></span>
            <h1
              className='font-bebas-neue uppercase text-6xl sm:text-7xl font-black flex flex-col leading-none text-gray-800 animate-text 
              bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'
            >
              Create your site in
            </h1>
            <span className='font-bebas-neue uppercase font-black text-5xl sm:text-6xl text-gray-800'>
              seconds
            </span>
            <p className='text-sm sm:text-base text-gray-700'>
              Create Instant Mobile Webpage to sell your knowledge. Chat, Video
              Calls, Events, Digital Product. Share it across social media. It’s
              free, and takes less than a minute. Loved by 500,000+ creators
            </p>
            <div className='flex mt-8'>
              <div>
                <form className='flex gap-0 relative'>
                  <div className='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
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
                    <div className='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
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
            </div>
          </div>
          <div
            className='w-full text-center sm:w-1/3 md:w-[80%] lg:w-full relative flex justify-center'
            data-aos='zoom-in-up'
          >
            <div className='w-full relative overflow-hidden h-[330px] md:h-[500px] p-8'>
              <div className='z-[3] absolute w-full md:-right-5 lg:-right-28 animate-bounce'>
                <img
                  src='https://www.lynk.id/static/assets/imgs/new-index/mid.webp'
                  loading='eager'
                  className='delay-1000 w-[80%]'
                  alt=''
                />
              </div>
              <div className='z-[2] absolute w-full md:-right-5 lg:-right-28 animate-bounce-reverse'>
                <img
                  src='https://www.lynk.id/static/assets/imgs/new-index/front.webp'
                  loading='eager'
                  className='delay-1000 w-[80%]'
                  alt=''
                />
              </div>
              <div className='z-[1] w-full absolute md:-right-5 lg:-right-28 animate-bounce'>
                <img
                  src='https://www.lynk.id/static/assets/imgs/new-index/back.webp'
                  loading='eager'
                  className='delay-1000 w-[80%]'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
