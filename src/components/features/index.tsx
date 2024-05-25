import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Feature() {
  const [scale, setScale] = useState(95);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const w = screen.width;
    if (w > 1200) {
      if (scrollTop > 900 && scrollTop < 3144) {
        setScale(100);
        setOverlayVisible(true);
      } else {
        setScale(95);
        setOverlayVisible(false);
      }
    } else if (w > 768 && w < 1200) {
      console.log('masuk sini');
      if (scrollTop > 1027 && scrollTop < 4070) {
        setScale(100);
        setOverlayVisible(true);
      } else {
        setScale(95);
        setOverlayVisible(false);
      }
    } else {
      if (scrollTop > 800 && scrollTop < 2354) {
        setScale(100);
        setOverlayVisible(true);
      } else {
        setScale(95);
        setOverlayVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-700 pointer-events-none -z-10 ${
          overlayVisible ? 'opacity-95' : 'opacity-0'
        }`}
      ></div>
      <section
        className='mt-32 mx-auto w-full text-center mb-4 relative z-20'
        data-aos='fade-up'
      >
        <h1
          className={`text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight ${
            scale == 100 ? 'text-white opacity-10' : 'text-black'
          }`}
        >
          Unmatchable features.
          <span className='block text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight self-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 text-transparent bg-clip-text'>
            Free, forever.
          </span>
        </h1>
      </section>
      <section
        className={`relative w-full ${
          scale === 100
            ? 'pt-0 md:pt-16 pb-10 px-0'
            : 'py-10 md:pt-1 lg:pt-10 px-3 md:px-24'
        } transition-all duration-700 z-20`}
      >
        <div
          className={`relative w-full transition-transform duration-700 ${
            scale === 95 ? 'scale-95' : 'scale-100 rounded-cstm'
          } ${scale === 95 && 'rounded-cstm'} overflow-hidden`}
          id='black-box'
        >
          <div
            className='bg-black w-[100%] h-full mx-auto flex justify-center items-center'
            data-aos='fade-up'
          >
            <div
              className={`${
                scale === 100
                  ? 'py-16 px-0 md:px-32'
                  : 'py-10 md:py-32 px-6 md:px-9'
              } transition-all duration-700`}
            >
              <div
                className='flex justify-center flex-col-reverse md:flex-col-reverse lg:flex-row items-center mb-24 md:mb-60 mx-0 px-0'
                data-aos='zoom-out'
              >
                <div className='text-white flex flex-col justify-center gap-5 md:gap-8 w-[80%] md:w-full md:mt-0 mt-12'>
                  <h3 className='text-3xl md:text-5xl font-bold'>
                    HIGH QUALITY SOUND
                  </h3>
                  <p className='md:w-[490px] w-[250px] text-xs md:text-base'>
                    Enjoy a seamless transition between wired and wireless modes
                    with these headphones, enhancing your listening experience.
                    You can effortlessly switch between the two modes,
                    connecting to your devices in whichever way suits you best.
                    Benefit from the flexibility of wireless communication
                    combined with the reliability of corded audio.
                  </p>
                </div>

                <div
                  className={`bg-zinc-900 rounded-cstm ${
                    scale === 100 ? 'w-[95%] h-[260px]' : 'w-[90%] h-[230px]'
                  } md:w-[90%] md:h-[500px] transition-all duration-700`}
                >
                  <img
                    className={`${
                      scale === 100 ? 'w-full h-full' : 'w-[95%] h-[95%]'
                    } transition-all duration-700`}
                    src='https://cdn.bio.link/landing/new-features/embed-apps.png'
                    alt=''
                  />
                </div>
              </div>
              <div
                className='flex justify-center flex-col-reverse md:flex-col-reverse lg:flex-row items-center mb-24 md:mb-60 mx-0 px-0'
                data-aos='zoom-in'
              >
                <div className='text-white flex flex-col justify-center gap-5 md:gap-8 w-[80%] md:w-full md:mt-0 mt-12'>
                  <h3 className='text-3xl md:text-5xl font-bold'>
                    HIGH QUALITY SOUND
                  </h3>
                  <p className='md:w-[490px] w-[250px] text-xs md:text-base'>
                    Enjoy a seamless transition between wired and wireless modes
                    with these headphones, enhancing your listening experience.
                    You can effortlessly switch between the two modes,
                    connecting to your devices in whichever way suits you best.
                    Benefit from the flexibility of wireless communication
                    combined with the reliability of corded audio.
                  </p>
                </div>

                <div
                  className={`bg-zinc-900 rounded-cstm ${
                    scale === 100 ? 'w-[95%] h-[260px]' : 'w-[90%] h-[230px]'
                  } md:w-[90%] md:h-[500px] transition-all duration-700`}
                >
                  <img
                    className={`${
                      scale === 100 ? 'w-full h-full' : 'w-[95%] h-[95%]'
                    } transition-all duration-700`}
                    src='https://cdn.bio.link/landing/new-features/embed-apps.png'
                    alt=''
                  />
                </div>
              </div>
              <div
                className='flex justify-center flex-col-reverse md:flex-col-reverse lg:flex-row items-center mb-24 md:mb-60 mx-0 px-0'
                data-aos='zoom-in'
              >
                <div className='text-white flex flex-col justify-center gap-5 md:gap-8 w-[80%] md:w-full md:mt-0 mt-12'>
                  <h3 className='text-3xl md:text-5xl font-bold'>
                    HIGH QUALITY SOUND
                  </h3>
                  <p className='md:w-[490px] w-[250px] text-xs md:text-base'>
                    Enjoy a seamless transition between wired and wireless modes
                    with these headphones, enhancing your listening experience.
                    You can effortlessly switch between the two modes,
                    connecting to your devices in whichever way suits you best.
                    Benefit from the flexibility of wireless communication
                    combined with the reliability of corded audio.
                  </p>
                </div>

                <div
                  className={`bg-zinc-900 rounded-cstm ${
                    scale === 100 ? 'w-[95%] h-[260px]' : 'w-[90%] h-[230px]'
                  } md:w-[90%] md:h-[500px] transition-all duration-700`}
                >
                  <img
                    className={`${
                      scale === 100 ? 'w-full h-full' : 'w-[95%] h-[95%]'
                    } transition-all duration-700`}
                    src='https://cdn.bio.link/landing/new-features/embed-apps.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`max-w-6xl mx-auto px-4 space-y-3 text-center ${
          scale == 100 ? 'mt-48' : 'mt-28'
        }`}
      >
        <div
          className='mb-20 md:mb-28'
          data-aos='fade-up'
        >
          <h1
            className={`text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight ${
              scale == 100 ? 'text-white opacity-10' : 'text-black'
            }`}
          >
            Loved by{' '}
            <span className='bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 inline-block text-transparent bg-clip-text'>
              5.000.000+
            </span>
          </h1>
          <span
            className={`block text-3xl md:text-4xl lg:text-6xl font-semibold scale == 100 ? ${
              scale == 100 ? 'text-white opacity-10' : 'text-black'
            }`}
          >
            Creators
          </span>
        </div>
      </section>
    </>
  );
}
