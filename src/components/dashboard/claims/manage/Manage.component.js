import { claimStore } from '../../../../global/claim.global';
import FoundClaim from './partials/foundClaim.component';
import NoClaim from './partials/noClaim.component';

export default function Manage() {
  const { claim } = claimStore();
  return (
    <div className='flex items-center col-span-5 lg:col-span-3'>
      {/* ====== If there is no claim */}
      {!claim.title && <NoClaim />}

      {/* ====== if there is a claim selected */}
      {claim.title && <FoundClaim />}
    </div>
  );
}
