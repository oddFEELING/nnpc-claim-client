import { XCircleIcon } from '@heroicons/react/solid';
import { useEffect } from 'react';

export default function AlertError({ message, state, setState }) {
  useEffect(() => {
    setTimeout(() => {
      setState(() => false);
    }, 6000);
  });

  return (
    <>
      {state && (
        <div className='fixed bottom-5 right-5 z-50 rounded-md bg-red-50 p-4 w-2/3 md:w-1/3'>
          <div className='flex'>
            <div className='flex-shrink-0'>
              <XCircleIcon
                className='h-5 w-5 text-red-400'
                aria-hidden='true'
              />
            </div>
            <div className='ml-3'>
              <h3 className='text-sm font-medium text-red-800'>
                An error occurred
              </h3>
              <div className='mt-2 text-sm text-red-700'>
                <ul role='list' className='list-disc pl-5 space-y-1'>
                  <li>{message}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
