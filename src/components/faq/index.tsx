import { faqItem } from '../../utils/constans/faq';
import Accordion from './accordion';

export default function FaQ() {
  return (
    <section
      id='faq'
      className='max-w-6xl mx-auto px-4 space-y-3 text-center mt-36 md:mt-44'
      data-aos='fade-up'
    >
      <h1 className='text-2xl text-start md:text-3xl lg:text-4xl font-semibold tracking-tight mb-10'>
        Frequently Asked{' '}
        <span className='text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight animate-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
          Questions
        </span>
      </h1>
      {faqItem.map((item) => (
        <Accordion
          key={item.question}
          title={item.question}
        >
          <p className='text-start'>{item.answer}</p>
        </Accordion>
      ))}
    </section>
  );
}
