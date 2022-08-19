import { useState, useEffect, useRef } from 'react';

import { staffStore } from '../../../../../global/staff.global';
import { claimStore } from '../../../../../global/claim.global';
import claimCalc from './claimLogic';
import useFetch from '../../../../../hooks/useFetch';

export default function FoundClaim() {
  const { staff } = staffStore();
  const { claim, editClaim } = claimStore();
  const [claimStaff, setClaimStaff] = useState({});
  const createClaimQuery = useFetch('CREATE-CLAIM', claim);
  const claimDeduct = new claimCalc(
    claim.gross_amt,
    typeof claim.staff === 'string' && staff && staff.type === 'staff'
      ? true
      : false || (claim.staff && claim.staff.type === 'staff')
      ? true
      : false
  );

  const claimStaffQuery = useFetch('GET-STAFF-BY-ID', claim.staff);
  /* ====== Handle create claim */
  const handleCreateClaim = (e) => {
    e.preventDefault();
    createClaimQuery.refetch();
  };

  /* ====== check claim create status */
  useEffect(() => {
    if (createClaimQuery.status === 'success') {
      console.log(createClaimQuery.data.data);
      createClaimQuery.remove();
    }

    if (createClaimQuery.status === 'error') {
      console.log(createClaimQuery.error);
    }
  }, [createClaimQuery.status]);

  /* ====== check claim staff status */
  useEffect(() => {
    if (typeof claim.staff === 'string') {
      if (claimStaffQuery.status === 'success') {
        setClaimStaff(claimStaffQuery.data.data.data);
      }
    } else setClaimStaff(claim.staff);

    if (claimStaffQuery.status === 'error') {
      console.log(claimStaffQuery.error);
    }
  }, [claimStaffQuery.status, claimStaffQuery.data, claim]);

  /* ====== set payb, vat and wht on claim change */
  useEffect(() => {
    editClaim('payb_amt', claimDeduct.payable);
    editClaim('vat', claimDeduct.vat);
    editClaim('wht', claimDeduct.wht);
  }, [claim.gross_amt]);

  return (
    <form className='space-y-6 w-full ' action='#' method='POST'>
      <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              Claim information
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className='mt-5 grid grid-cols-6 gap-x-4 space-y-6 md:mt-0 md:col-span-2'>
            <div className='grid grid-cols-5 gap-6 col-span-6'>
              <div className='col-span-5 sm:col-span-4'>
                <label
                  htmlFor='claim-title'
                  className='block text-sm font-medium text-gray-700'
                >
                  Claim title
                </label>
                <div className='mt-1 flex rounded-md shadow-sm'>
                  <input
                    type='text'
                    name='claim-title'
                    id='claim-title'
                    value={claim.short_desc}
                    onChange={(e) => {
                      editClaim('short_desc', e.target.value);
                    }}
                    className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm  border-gray-300'
                    placeholder='purpose...'
                  />
                </div>
              </div>
            </div>
            {/* ====== long description */}
            <div className='col-span-6 sm:col-span-6'>
              <label
                htmlFor='long-desc'
                className='block text-sm font-medium text-gray-700'
              >
                Long description
              </label>
              <div className='mt-1'>
                <textarea
                  id='long-desc'
                  name='long-desc'
                  rows={3}
                  value={claim.long_desc}
                  className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md'
                  placeholder='Extended explanation of claim...'
                  onChange={(e) => editClaim('long_desc', e.target.value)}
                />
              </div>
            </div>
            {/* ====== pi reference */}
            <div className='col-span-5 sm:col-span-4'>
              <label
                htmlFor='pi-ref'
                className='block text-sm font-medium text-gray-700'
              >
                PI Ref Number
              </label>
              <div className='mt-1 flex rounded-md shadow-sm'>
                <input
                  type='text'
                  name='pi-ref'
                  id='pi-ref'
                  value={claim.pi_ref_no}
                  onChange={(e) => {
                    editClaim('pi_ref_no', e.target.value);
                  }}
                  className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm  border-gray-300'
                  placeholder='Pi reference number'
                />
              </div>
            </div>
            {/* ====== aprover 1 */}
            <div className='col-span-6 sm:col-span-3'>
              <label
                htmlFor='appr-1'
                className='block text-sm font-medium text-gray-700'
              >
                Approver 1
              </label>
              <input
                type='text'
                name='appr-1'
                id='appr-1'
                value={claim.approver1}
                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                onChange={(e) => editClaim('approver1', e.target.value)}
              />
            </div>
            {/* ====== Approver 2 */}
            <div className='col-span-6 sm:col-span-3'>
              <label
                htmlFor='appr-2'
                className='block text-sm font-medium text-gray-700'
              >
                Approver 2
              </label>
              <input
                type='text'
                name='appr-2'
                id='appr-2'
                value={claim.approver2}
                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md col-span-2'
                onChange={(e) => editClaim('approver2', e.target.value)}
              />
            </div>
            {/* ====== start date */}
            <div className='col-span-6 sm:col-span-3'>
              <label
                htmlFor='start-date'
                className='block text-sm font-medium text-gray-700'
              >
                Start date
              </label>
              <input
                type='date'
                name='start-date'
                id='start-date'
                value={claim.duration?.from}
                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 cursor-pointer rounded-md col-span-2'
                onChange={(e) =>
                  editClaim('from', e.target.value, false, 'duration')
                }
              />
            </div>
            {/* ====== end date */}
            <div className='col-span-6 sm:col-span-3'>
              <label
                htmlFor='end-date'
                className='block text-sm font-medium text-gray-700'
              >
                End date
              </label>
              <input
                type='date'
                name='end-date'
                id='end-date'
                value={claim.duration?.to}
                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 cursor-pointer rounded-md col-span-2'
                onChange={(e) =>
                  editClaim('to', e.target.value, false, 'duration')
                }
              />
            </div>

            {/* ====== acct to debit */}
            <div className='col-span-6 sm:col-span-3'>
              <label
                htmlFor='acct-to-debit'
                className='block text-sm font-medium text-gray-700'
              >
                Account to Debit
              </label>
              <input
                type='number'
                name='acct-to-debit'
                id='acct-to-debit'
                value={claim.acct_to_debit}
                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md col-span-2'
                onChange={(e) =>
                  editClaim('acct_to_debit', e.target.value, true)
                }
              />
            </div>

            {/* ====== initiator */}
            <div className='col-span-6 sm:col-span-3'>
              <label
                htmlFor='end-date'
                className='block text-sm font-medium text-gray-700'
              >
                Initiator
              </label>
              <input
                type='text'
                name='end-date'
                id='end-date'
                value={claim.initiator}
                disabled={claim.state === 'new' ? false : true}
                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md col-span-2'
                onChange={(e) => editClaim('initiator', e.target.value, false)}
              />
            </div>

            {/* ====== gross amount */}
            <div className='col-span-6 sm:col-span-5'>
              <label
                htmlFor='gross-amt'
                className='block text-sm font-medium text-gray-700'
              >
                Gross amount
              </label>
              <input
                type='number'
                name='gross-amt'
                id='gross-amt'
                value={claim.gross_amt}
                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md col-span-2'
                onChange={(e) => {
                  editClaim('gross_amt', e.target.value, true);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ====== Account info section */}
      <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              Account Information
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
              Information about staff account.
            </p>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <div className='grid grid-cols-6 gap-6'>
              {/* ====== Bank name */}
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
                  disabled
                  value={claimStaff?.account?.bank || 'null'}
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>

              {/* ====== Account number  */}
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='acct_no'
                  className='block text-sm font-medium text-gray-700'
                >
                  Account number
                </label>
                <input
                  type='text'
                  name='acct_no'
                  id='acct_no'
                  disabled
                  value={claimStaff?.account?.acct_no || 'null'}
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>

              {/* ====== Name on account */}
              <div className='col-span-6'>
                <label
                  htmlFor='full-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Name on account
                </label>
                <input
                  type='text'
                  name='full-name'
                  id='full-name'
                  disabled
                  value={
                    `${claimStaff?.first_name}   ${claimStaff?.last_name}    ${claimStaff?.other_names}` ||
                    'null'
                  }
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>

              {/* ====== Account type */}
              <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                <label
                  htmlFor='acct_type'
                  className='block text-sm font-medium text-gray-700'
                >
                  Account type
                </label>
                <input
                  type='text'
                  name='acct_type'
                  disabled
                  value={claimStaff?.account?.acct_type || 'null'}
                  id='acct_type'
                  autoComplete='address-level2'
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>

              {/* ====== bank code */}
              <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
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
                  disabled
                  value={claimStaff?.account?.bank_code || 'null'}
                  autoComplete='address-level1'
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>

              {/* ====== staff type */}
              <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                <label
                  htmlFor='staff-type'
                  className='block text-sm font-medium text-gray-700'
                >
                  Staff type
                </label>
                <input
                  type='text'
                  name='staff-type'
                  id='staff-type'
                  disabled
                  value={claimStaff?.type || 'null'}
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== VAT and WHT section */}
      <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              VAT & WHT
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
              VAT & withholding tax (WHT). These are calculated automatically.
            </p>
          </div>
          <div className='mt-5 space-y-6 md:mt-0 md:col-span-2'>
            {/* ====== VAT  */}
            <fieldset>
              <legend className='contents text-base font-medium text-gray-900'>
                VAT
              </legend>
              <p className='text-md text-gray-500'>
                Calculated VAT is: &nbsp; &nbsp;
                {claim && claimStaff.type === '3rd party' && (
                  <b className='font-bold font-primary text-red-400'>
                    - #{claimDeduct.vat?.toLocaleString()}
                  </b>
                )}
                {claim && claimStaff.type === 'staff' && (
                  <b className='font-bold font-primary text-green-600'>#0</b>
                )}
                {!claim?.staff && 'null'}
              </p>
            </fieldset>

            {/* ====== WHT */}
            <fieldset>
              <legend className='contents text-base font-medium text-gray-900'>
                WHT
              </legend>
              <p className='text-md text-gray-500'>
                Calculated WHT is: &nbsp; &nbsp;
                {claim && claimStaff.type === '3rd party' && (
                  <b className='font-bold font-primary text-red-400'>
                    - #{claimDeduct.wht?.toLocaleString()}
                  </b>
                )}
                {claim && claimStaff.type === 'staff' && (
                  <b className='font-bold font-primary text-green-600'>#0</b>
                )}
                {!claim?.staff && 'null'}
              </p>
            </fieldset>

            {/* ====== payable amount */}
            <fieldset>
              <legend className='contents text-base font-medium text-gray-900'>
                Payable Amt.
              </legend>
              <p className='text-md text-gray-500'>
                Total payable amount is: &nbsp; &nbsp;
                <b className='font-bold font-primary text-green-600'>
                  #{claimDeduct?.payable?.toLocaleString()}
                </b>
              </p>
            </fieldset>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-4 md:gap-1 md:justify-end items-center'>
        {claim.state === 'new' && (
          <button
            type='button'
            className='bg-white py-3 md:py-2 w-2/3 md:w-auto px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Cancel
          </button>
        )}

        <button
          type='submit'
          className='ml-3 inline-flex justify-center py-3 md:py-2 w-2/3 md:w-auto px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={claim.state === 'new' ? handleCreateClaim : ''}
        >
          {claim.state === 'new' ? 'Open' : 'save'} claim
        </button>

        {claim.state === 'open' && (
          <button
            type='submit'
            className='ml-3 inline-flex justify-center py-3 md:py-2 w-2/3 md:w-auto px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Generate report
          </button>
        )}

        {claim.state === 'open' && (
          <button
            type='submit'
            className='ml-3 inline-flex justify-center py-3 md:py-2 w-2/3 md:w-auto px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Close claim
          </button>
        )}
      </div>
    </form>
  );
}
