/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function PopAddStaff({ state, setState }) {
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
          <div className='flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative bg-gray-200 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-6xl sm:w-full font-primary  sm:p-6'>
                {/* ====== cancel btn */}
                <div
                  className='close__btn'
                  onClick={() => setState((state) => !state)}
                >
                  <p>cancel</p>
                </div>
                <div>
                  <div className='mt-3 mb-6 text-center sm:mt-5 font-bold  '>
                    <Dialog.Title
                      as='h3'
                      className='text-2xl leading-6 font-medium text-gray-900'
                    >
                      New Staff
                    </Dialog.Title>
                  </div>
                </div>

                {/* ====== form */}
                <>
                  <div>
                    {' '}
                    {/* ====== personal information */}
                    <div className='mt-10 sm:mt-0'>
                      <div className='md:grid md:grid-cols-3 md:gap-6'>
                        <div className='md:col-span-1'>
                          <div className='px-4 sm:px-0'>
                            <h3 className='text-lg font-medium leading-6 text-gray-900'>
                              Personal Information
                            </h3>
                            <p className='mt-1 text-sm text-gray-600'>
                              This contains personal info of the staff.
                            </p>
                          </div>
                        </div>
                        <div className='mt-5 md:mt-0 md:col-span-2'>
                          <form action='#' method='POST'>
                            <div className='shadow overflow-hidden sm:rounded-md'>
                              <div className='px-4 py-5 bg-white sm:p-6'>
                                <div className='grid grid-cols-6 gap-6'>
                                  {/* ====== firstname */}
                                  <div className='col-span-6 sm:col-span-3'>
                                    <label
                                      htmlFor='first-name'
                                      className='block text-sm font-medium text-gray-700'
                                    >
                                      First name
                                    </label>
                                    <input
                                      type='text'
                                      name='first-name'
                                      id='first-name'
                                      autoComplete='given-name'
                                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md'
                                    />
                                  </div>

                                  {/* ====== last name */}
                                  <div className='col-span-6 sm:col-span-3'>
                                    <label
                                      htmlFor='last-name'
                                      className='block text-sm font-medium text-gray-700'
                                    >
                                      Last name
                                    </label>
                                    <input
                                      type='text'
                                      name='last-name'
                                      id='last-name'
                                      autoComplete='family-name'
                                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md'
                                    />
                                  </div>

                                  {/* ====== other names */}
                                  <div className='col-span-6 sm:col-span-3'>
                                    <label
                                      htmlFor='other-names'
                                      className='block text-sm font-medium text-gray-700'
                                    >
                                      Other names
                                    </label>
                                    <input
                                      type='text'
                                      name='other-names'
                                      id='other-names'
                                      autoComplete='family-name'
                                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md'
                                    />
                                  </div>

                                  {/* ====== department*/}
                                  <div className='col-span-6 sm:col-span-3'>
                                    <label
                                      htmlFor='department'
                                      className='block text-sm font-medium text-gray-700'
                                    >
                                      Department
                                    </label>
                                    <input
                                      type='text'
                                      name='department'
                                      id='department'
                                      autoComplete='family-name'
                                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md'
                                    />
                                  </div>

                                  {/* ====== Staff Id */}
                                  <div className='col-span-6 sm:col-span-3'>
                                    <label
                                      htmlFor='staff-id'
                                      className='block text-sm font-medium text-gray-700'
                                    >
                                      Staff ID
                                    </label>
                                    <input
                                      type='text'
                                      name='staff-id'
                                      id='level'
                                      autoComplete='email'
                                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md'
                                    />
                                  </div>

                                  {/* ====== Level */}
                                  <div className='col-span-6 sm:col-span-2'>
                                    <label
                                      htmlFor='level'
                                      className='block text-sm font-medium text-gray-700'
                                    >
                                      Level
                                    </label>
                                    <input
                                      type='text'
                                      name='level'
                                      id='level'
                                      autoComplete='email'
                                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md'
                                    />
                                  </div>

                                  {/* ====== Type of staff  */}
                                  <div className='col-span-6 sm:col-span-3'>
                                    <label
                                      htmlFor='country'
                                      className='block text-sm font-medium text-gray-700'
                                    >
                                      Type
                                    </label>
                                    <select
                                      id='bank'
                                      name='bank'
                                      autoComplete='bank-name'
                                      className='mt-1 block w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                    >
                                      <option value='staff'>Staff</option>
                                      <option value='3rd party'>
                                        3rd Party
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* ====== divider */}
                    <div className='hidden sm:block' aria-hidden='true'>
                      <div className='py-5'>
                        <div className='border-t border-gray-300' />
                      </div>
                    </div>
                    {/* ====== Account information */}
                    <div className='md:grid md:grid-cols-3 md:gap-6 mt-4'>
                      <div className='md:col-span-1'>
                        <div className='px-4 sm:px-0'>
                          <h3 className='text-lg font-medium leading-6 text-gray-900'>
                            Account info
                          </h3>
                          <p className='mt-1 text-sm text-gray-600'>
                            This contains information about the account to be
                            added.
                          </p>
                        </div>
                      </div>
                      <div className='mt-5 md:mt-0 md:col-span-2'>
                        <form action='#' method='POST'>
                          <div className='shadow sm:rounded-md sm:overflow-hidden'>
                            <div className='px-4 py-5 bg-white space-y-3 sm:p-6 grid grid-cols-6 gap-6'>
                              {/* ====== Account number */}
                              <div className='col-span-6 sm:col-span-4'>
                                <label
                                  htmlFor='acct-num'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  Account number
                                </label>
                                <input
                                  type='text'
                                  name='acct-num'
                                  id='acct-num'
                                  autoComplete='email'
                                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md'
                                />
                              </div>

                              {/* ====== bank names */}
                              <div className='col-span-6 sm:col-span-3'>
                                <label
                                  htmlFor='bank-name'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  Bank name
                                </label>
                                <input
                                  type='text'
                                  name='bank-name'
                                  id='bank-name'
                                  autoComplete='bank'
                                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md'
                                />
                              </div>
                              <div className='flex gap-3 col-span-4'>
                                {' '}
                                {/* ====== account type  */}
                                <div className='col-span-6 sm:col-span-4'>
                                  <label
                                    htmlFor='acct-type'
                                    className='block text-sm font-medium text-gray-700'
                                  >
                                    Account type
                                  </label>
                                  <input
                                    type='text'
                                    name='acct-type'
                                    id='acct-type'
                                    autoComplete='email'
                                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md'
                                  />
                                </div>
                                {/* ====== bank code */}
                                <div className='col-span-6 sm:col-span-4'>
                                  <label
                                    htmlFor='bank-code'
                                    className='block text-sm font-medium text-gray-700'
                                  >
                                    Bank code
                                  </label>
                                  <input
                                    type='text'
                                    name='bank-code'
                                    id='bank-code'
                                    autoComplete='email'
                                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md'
                                  />
                                </div>
                              </div>

                              {/* ====== save button */}
                              <div className='px-4 py-3 bg-gray-50 text-right sm:px-6 col-span-6'>
                                <button
                                  type='submit'
                                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                >
                                  Add Staff
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
