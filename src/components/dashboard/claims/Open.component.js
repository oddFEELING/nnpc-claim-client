import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { claimStore } from '../../../global/claim.global';
import { navStore } from '../../../global/nav.global';
import { positions } from '../../../static/data/dashClaim.data';

export default function Open() {
  const router = useRouter();
  const { setCurrent } = navStore();
  const { setClaim } = claimStore();

  // ======= handle create claim -->
  const handleCreate = () => {
    router.replace('staff');
    setCurrent('Staff');
  };
  return (
    <div className='w-full flex col-span-5 rounded-md shadow-sm flex-col lg:col-span-2'>
      <div className='bg-white px-4 py-5 border-b border-gray-200 sm:px-6 w-full'>
        <div className='-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap'>
          <div className='ml-4 mt-2'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Open claims
            </h3>
          </div>
          <div className='ml-4 mt-2 flex-shrink-0'>
            <button
              type='button'
              className='relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={handleCreate}
            >
              Add claim
            </button>
          </div>
        </div>
      </div>

      {/* ====== content */}
      <div className='bg-white shadow overflow-hidden sm:rounded-md'>
        <ul role='list' className='divide-y divide-gray-200'>
          {positions.map((position) => (
            <li key={position.id}>
              <div
                className='block hover:bg-gray-100 cursor-pointer'
                onClick={() => setClaim(position)}
              >
                <div className='px-4 py-4 sm:px-6'>
                  <div className='flex items-center justify-between'>
                    <p className='text-sm font-medium text-indigo-600 truncate'>
                      {position.title}
                    </p>
                    <div className='ml-2 flex-shrink-0 flex'>
                      <p className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                        {position.type}
                      </p>
                    </div>
                  </div>
                  <div className='mt-2 sm:flex sm:justify-between'>
                    <div className='sm:flex'>
                      <p className='flex items-center text-sm text-gray-500'>
                        <UsersIcon
                          className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                          aria-hidden='true'
                        />
                        {position.department}
                      </p>
                      <p className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6'>
                        <LocationMarkerIcon
                          className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                          aria-hidden='true'
                        />
                        {position.location}
                      </p>
                    </div>
                    <div className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0'>
                      <CalendarIcon
                        className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                      <p>
                        Closing on{' '}
                        <time dateTime={position.closeDate}>
                          {position.closeDateFull}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
