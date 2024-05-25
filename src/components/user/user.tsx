export default function CardUser({
  images,
  name,
  url,
}: {
  images: string;
  name: string;
  url: string;
}) {
  return (
    <a
      href='#'
      target='_blank'
      className='flex flex-col justify-center text-center cursor-pointer w-[175px] transition-all duration-700'
    >
      <div className='rounded-full overflow-hidden w-[175px] h-[175px] bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500'>
        <img
          className='object-cover w-full h-full rounded-full transform hover:scale-95 duration-300'
          src={images}
          alt='userImage'
        />
      </div>
      <div className='mt-6 text-lg leading-[17px] font-medium text-black'>
        {name}
      </div>
      <div className='mt-4 text-base leading-[17px] bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 inline-block text-transparent bg-clip-text'>
        {url}
      </div>
    </a>
  );
}
