import { CheckCircleIcon, XIcon } from '@heroicons/react/solid';
import { useEffect } from 'react';

export default function AlertSuccess({ message, state, setState }) {
  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 6000);
  });

  return (
    <>
      {state && (
        <div className=' fixed bottom-5 right-5 z-50 rounded-md bg-green-50 p-4 w-2/3 md:w-1/3'>
          <div className='flex'>
            <div className='flex-shrink-0'>
              <CheckCircleIcon
                className='h-5 w-5 text-green-400'
                aria-hidden='true'
              />
            </div>
            <div className='ml-3'>
              <p className='text-sm font-medium text-green-800 mr-24'>
                {message}
              </p>
            </div>
            <div className='ml-auto pl-3'>
              <div className='-mx-1.5 -my-1.5'>
                <button
                  type='button'
                  className='inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600'
                  onClick={() => setState((state) => !state)}
                >
                  <span className='sr-only'>Dismiss</span>
                  <XIcon className='h-5 w-5' aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
