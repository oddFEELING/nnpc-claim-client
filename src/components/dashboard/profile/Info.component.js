import { PaperClipIcon } from '@heroicons/react/solid';

export default function Example() {
  return (
    <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>
          User Information
        </h3>
        <p className='mt-1 max-w-2xl text-sm text-gray-500'>
          Current user profile.
        </p>
      </div>
      <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
        <dl className='sm:divide-y sm:divide-gray-200'>
          {/* ====== full name */}
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Full name</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              Margot Foster
            </dd>
          </div>

          {/* ====== Role */}
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Role</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              Admin
            </dd>
          </div>

          {/* ====== email */}
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Email address</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              margotfoster@example.com
            </dd>
          </div>

          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>
              Salary expectation
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              $120,000
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
