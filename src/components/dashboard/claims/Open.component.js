import {
  CalendarIcon,
  OfficeBuildingIcon,
  UsersIcon,
  PlusIcon,
} from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { claimStore } from '../../../global/claim.global';
import { navStore } from '../../../global/nav.global';
import { staffStore } from '../../../global/staff.global';
import { claims } from '../../../static/data/dashClaim.data';
import useFetch from '../../../hooks/useFetch';

export default function Open() {
  const router = useRouter();
  const { staff } = staffStore();
  const { setCurrent } = navStore();
  const [claimList, setClaimList] = useState([]);
  const claimQuery = useFetch('GET-CLAIMS');
  const { setClaim, claim } = claimStore();

  // ======= handle create claim -->
  const handleCreate = () => {
    router.replace('staff');
    setCurrent('Staff');
  };

  // ======= monitorc laim -->
  useEffect(() => {
    if (claimQuery.status === 'success') {
      setClaimList(claimQuery.data.data.data);
    }
  }, [claimQuery.status, claimQuery.data]);

  useEffect(() => {
    console.log('claims refreshed');
    claimQuery.status === 'success' && setClaimList(claimQuery.data.data.data);
    console.log(claimList);
  }, [claimList]);

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
        {/* ====== is loading */}
        {claimQuery.isLoading && (
          <p className='ml-4 font-secondary my-4'>Loading...</p>
        )}
        {/* ====== No claim data */}
        {claimQuery.isSuccess && claimList.length === 0 && (
          <div className='text-center py-12 border-2 border-dashed border-gray-300'>
            <svg
              className='mx-auto h-12 w-12 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                vectorEffect='non-scaling-stroke'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z'
              />
            </svg>
            <h3 className='mt-2 text-sm font-medium text-gray-900'>
              No open claims
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
              Get started by creating a new claim.
            </p>
            <div className='mt-6'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                onClick={handleCreate}
              >
                <PlusIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
                New Claim
              </button>
            </div>
          </div>
        )}
        {/* ====== Successfully fetched data */}
        {claimQuery.isSuccess && claimList.length > 0 && (
          <ul role='list' className='divide-y divide-gray-200'>
            {claimList.map((claim) => (
              <li key={claim.id}>
                <div
                  className='block hover:bg-indigo-50 transition-all hover:shadow-md hover:scale-105 cursor-pointer'
                  onClick={() => setClaim(claim)}
                >
                  <div className='px-4 py-4 sm:px-6'>
                    <div className='flex items-center justify-between'>
                      <p className='text-sm font-medium text-indigo-600 truncate'>
                        {claim.short_desc}
                      </p>
                      <div className='ml-2 flex-shrink-0 flex'>
                        <p className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                          {claim.state}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className='text-gray-600 text-md font-bold font-secondary'>
                        #{claim.payb_amt?.toLocaleString()}
                      </p>
                    </div>

                    <div className='mt-2 sm:flex sm:justify-between'>
                      <div className='sm:flex'>
                        <p className='flex items-center text-sm text-gray-500'>
                          <UsersIcon
                            className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                            aria-hidden='true'
                          />
                          {claim?.staff?.first_name || 'No staff'}
                        </p>
                        <p className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6'>
                          <OfficeBuildingIcon
                            className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                            aria-hidden='true'
                          />
                          {claim?.staff?.account?.bank || 'No staff'}
                        </p>
                      </div>
                      <div className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0'>
                        <CalendarIcon
                          className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                          aria-hidden='true'
                        />
                        <p>
                          {claim?.duration?.from} -- {claim?.duration?.to}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
