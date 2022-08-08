import Image from 'next/image';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';

const profile = {
  name: 'Ricardo Cooper',
  email: 'ricardo.cooper@example.com',

  avatar:
    'https://images.pexels.com/photos/1887792/pexels-photo-1887792.jpeg?auto=compress&cs=tinysrgb&w=1024',

  backgroundImage:
    'https://images.pexels.com/photos/1089455/pexels-photo-1089455.jpeg?auto=compress&cs=tinysrgb&w=1600',

  fields: [
    ['Phone', '(555) 123-4567'],
    ['Email', 'ricardocooper@example.com'],
    ['Title', 'Senior Front-End Developer'],
    ['Team', 'Product Development'],
    ['Location', 'San Francisco'],
    ['Sits', 'Oasis, 4th floor'],
    ['Salary', '$145,000'],
    ['Birthday', 'June 8, 1990'],
  ],
};

export default function Hero() {
  return (
    <div>
      <div className='relative h-32 w-full object-cover lg:h-48'>
        <Image
          src={profile.backgroundImage}
          alt=''
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
          <div className='flex relative h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 overflow-hidden'>
            <Image layout='fill' src={profile.avatar} alt='' />
          </div>
          <div className='mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
            <div className='sm:hidden md:block mt-6 min-w-0 flex-1'>
              <h1 className='text-2xl font-bold text-gray-900 truncate'>
                {profile.name}
              </h1>
            </div>
            <div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4'>
              <button
                type='button'
                className='inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
              >
                <MailIcon
                  className='-ml-1 mr-2 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
                <span>Message</span>
              </button>
              <button
                type='button'
                className='inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
              >
                <PhoneIcon
                  className='-ml-1 mr-2 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
                <span>Call</span>
              </button>
            </div>
          </div>
        </div>
        <div className='hidden sm:block md:hidden mt-6 min-w-0 flex-1'>
          <h1 className='text-2xl font-bold text-gray-900 truncate'>
            {profile.name}
          </h1>
        </div>
      </div>
    </div>
  );
}
