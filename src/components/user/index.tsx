import { itemUser } from '../../utils/constans/user';
import CardUser from './user';

export default function User() {
  return (
    <section
      className='max-w-6xl mx-auto space-y-3 text-center'
      data-aos='fade-right'
      data-aos-offset='300'
      data-aos-easing='ease-in-sine'
    >
      <div className='flex flex-nowrap space-x-4 overflow-x-auto w-full p-3 my-8 md:my-16 gap-8'>
        {itemUser.map((item, index) => (
          <CardUser
            key={index}
            images={item.image}
            name={item.name}
            url={item.url}
          />
        ))}
      </div>
    </section>
  );
}
