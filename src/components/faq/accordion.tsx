import { ReactNode, useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

const Accordion = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-aos='fade-up'
      className='shadow-xl rounded-md overflow-hidden'
    >
      <div className='relative'>
        <div className='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 flex justify-between w-full items-center relative duration-300 animate-border rounded-l-md bg-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:400%_400%]'
        >
          <span className='md:text-lg text-white font-medium'>{title}</span>
          <span>
            <RiArrowRightSLine
              className={`${
                isOpen ? '-rotate-90' : 'rotate-90'
              } duration-300 text-white w-4 h-4 md:w-6 md:h-6`}
            />
          </span>
        </button>
      </div>
      <div
        className={`grid overflow-hidden duration-300 border-gray-300 ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className='overflow-hidden'>
          <div className='p-4'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
