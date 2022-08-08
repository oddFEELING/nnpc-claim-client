import { useRouter } from 'next/router';
import { stats } from '../../../static/data/dashHome.data';
import { navStore } from '../../../global/nav.global';
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function InfoCards() {
  const router = useRouter();
  const { setCurrent } = navStore();

  // ======= handle view more button -->
  const handleViewMore = (link) => {
    router.replace(link);
    const newLink = link.charAt(0).toUpperCase() + link.slice(1);
    setCurrent(newLink);
  };

  return (
    <div className='w-full flex flex-col'>
      <h3 className='text-lg leading-6 font-medium text-gray-500'>
        All time data
      </h3>

      <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {stats.map((item) => (
          <div
            key={item.id}
            className='relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden'
          >
            <dt>
              <div className='absolute bg-indigo-500 rounded-md p-3'>
                <item.icon className='h-6 w-6 text-white' aria-hidden='true' />
              </div>
              <p className='ml-16 text-sm font-medium text-gray-500 truncate'>
                {item.name}
              </p>
            </dt>
            <dd className='ml-16 pb-6 flex items-baseline sm:pb-7'>
              <p className='text-2xl font-semibold text-gray-900'>
                {item.stat}
              </p>
              <p
                className={classNames(
                  item.changeType === 'increase'
                    ? 'text-green-600'
                    : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowSmUpIcon
                    className='self-center flex-shrink-0 h-5 w-5 text-green-500'
                    aria-hidden='true'
                  />
                ) : (
                  <ArrowSmDownIcon
                    className='self-center flex-shrink-0 h-5 w-5 text-red-500'
                    aria-hidden='true'
                  />
                )}

                <span className='sr-only'>
                  {item.changeType === 'increase' ? 'Increased' : 'Decreased'}{' '}
                  by
                </span>
                {item.change}
              </p>
              <div className='absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6'>
                <div
                  className='text-sm'
                  onClick={() => handleViewMore(item.link)}
                >
                  <p className='font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer'>
                    View all
                    <span className='sr-only'> {item.name} stats</span>
                  </p>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
