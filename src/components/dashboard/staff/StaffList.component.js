import { useState, useEffect } from 'react';
import Image from 'next/image';
import PopDelete from '../../lib/pop-ups/popDelete';
import { people } from '../../../static/data/dashStaff.data';
import { PlusIcon, TrashIcon } from '@heroicons/react/solid';
import PopAddStaff from '../../lib/pop-ups/popAddStaff.jsx';

export default function Example() {
  const [selectedStaff, setSelecetdStaff] = useState({});
  const [popDeleteOpen, setPopDeleteOpen] = useState(false);
  const [popAddOpen, setPopAddOpen] = useState(false);

  // ======= Effect to check selected staff -->
  useEffect(() => {
    console.log(selectedStaff);
  }, [selectedStaff]);

  return (
    <div>
      {/* ====== Delete staff pop-up */}
      {popDeleteOpen && (
        <PopDelete
          title='Delete Staff'
          message='Are you sure you want to delete this staff? All of the staff details would be permanently lost forever.'
          state={popDeleteOpen}
          setState={setPopDeleteOpen}
        />
      )}

      {/* ====== Add staff pop-up */}
      {popAddOpen && (
        <PopAddStaff state={popAddOpen} setState={setPopAddOpen} />
      )}

      {/* ====== Section header */}
      <div className='bg-white px-4 py-5 border-b border-gray-200 sm:px-6 mb-1'>
        <div className='-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap'>
          <div className='ml-4 mt-2'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              All staff
            </h3>
          </div>
          <div className='ml-4 mt-2 flex-shrink-0'>
            <button
              type='button'
              className='relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={() => setPopAddOpen((state) => !state)}
            >
              Add staff
            </button>
          </div>
        </div>
      </div>

      {/* ====== Div holding the staff list */}
      <div className='bg-gray-100 py-5 px-3 rounded-md overflow-y-scroll h-[800px]'>
        <ul
          role='list'
          className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
        >
          {people.map((person, index) => (
            <li
              key={index}
              className='col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200'
            >
              <div
                className='w-full hover:bg-gray-100 cursor-pointer flex items-center justify-between p-6 space-x-6'
                onClick={() => {
                  setSelecetdStaff(person);
                }}
              >
                <div className='flex-1 truncate'>
                  <div className='flex items-center space-x-3'>
                    <h3 className='text-gray-900 text-md font-primary truncate font-medium'>
                      {person.first_name} {person.last_name}
                    </h3>
                    <span className='flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                      {person.role}
                    </span>
                  </div>
                  <p className='mt-1 text-gray-900 text-sm truncate font-secondary'>
                    {person.bank}:
                  </p>
                  <p className='mt-1 text-gray-500 text-sm truncate font-secondary'>
                    {person.acct_no}
                  </p>
                </div>
                <div className='w-10 h-10 bg-gray-300 rounded-full flex-shrink-0 relative overflow-hidden'>
                  <Image
                    src={person.imageUrl}
                    layout='fill'
                    alt=''
                    objectFit='cover'
                  />
                </div>
              </div>

              {/* ====== Buttons section */}
              <div>
                <div className='-mt-px flex divide-x divide-gray-200'>
                  <div className='w-0 flex-1 flex'>
                    <p className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border cursor-pointer border-transparent rounded-bl-lg hover:text-clr-4'>
                      <PlusIcon
                        className='w-5 h-5 text-gray-400'
                        aria-hidden='true'
                      />
                      <span className='ml-3'>Create claim</span>
                    </p>
                  </div>
                  <div
                    className='-ml-px w-0 flex-1 flex'
                    onClick={() => setPopDeleteOpen((state) => !state)}
                  >
                    <p className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm cursor-pointer text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-clr-1'>
                      <TrashIcon
                        className='w-5 h-5 text-gray-400'
                        aria-hidden='true'
                      />
                      <span className='ml-3'>Delete</span>
                    </p>
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