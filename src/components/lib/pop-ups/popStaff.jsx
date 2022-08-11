import { Fragment } from 'react';
import { staffStore } from '../../../global/staff.global';
import { Dialog, Transition } from '@headlessui/react';

export default function PopStaff({ state, setState }) {
  const { staff } = staffStore();
  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setState}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-end sm:items-center justify-center min-h-full p-8 text-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative bg-white rounded-lg px-4 pt-5 pb-4 text-left w-full  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl sm:w-full sm:p-6'>
                {/* ====== close btn */}
                <div
                  className='close__btn'
                  onClick={() => setState((state) => !state)}
                >
                  <p>close</p>
                </div>

                {/* ====== component start */}
                <div className='mt-3 text-left sm:mt-5 w-full'>
                  <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
                    <div className='px-4 py-5 sm:px-6'>
                      <h3 className='text-lg leading-6 font-medium text-gray-900'>
                        Staff Information
                      </h3>
                      <p className='mt-1 max-w-2xl text-sm text-gray-500 font-secondary'>
                        Personal details and profile of staff
                      </p>
                    </div>
                    <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
                      <dl className='sm:divide-y sm:divide-gray-200'>
                        {/* ====== full name */}
                        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Full name
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2  font-secondary'>
                            {staff
                              ? `${staff.first_name} ${staff.last_name} ${staff.middle_name}`
                              : 'null'}
                          </dd>
                        </div>

                        {/* ====== Department and level */}
                        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Department
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2  font-secondary'>
                            {staff ? staff.department : 'null'}
                            &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;
                            Level: {staff ? staff.level : 'null'}
                          </dd>
                        </div>

                        {/* ====== Staff Id */}
                        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Staff ID
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2  font-secondary'>
                            {staff ? staff.staff_id : 'null'}
                          </dd>
                        </div>

                        {/* ====== Type of staff */}
                        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Staff type
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2  font-secondary'>
                            {staff ? staff.type : 'null'}
                          </dd>
                        </div>

                        {/* ====== Bank name */}
                        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Bank name
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2  font-secondary'>
                            {staff ? staff.account?.bank : 'null'}
                          </dd>
                        </div>

                        {/* ====== Account number*/}
                        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Account number
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2  font-secondary'>
                            {staff ? staff.account?.acct_no : 'null'}
                          </dd>
                        </div>

                        {/* ====== TBank code */}
                        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Bank code
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2  font-secondary'>
                            {staff ? staff.account?.bank_code : 'null'}
                          </dd>
                        </div>

                        {/* ====== Account type*/}
                        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Account type
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2  font-secondary'>
                            {staff ? staff.account?.acct_type : 'null'}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
