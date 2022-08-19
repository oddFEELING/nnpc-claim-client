import React from 'react';
import * as GC from '@grapecity/spread-sheets';
import { SpreadSheets, Worksheet } from '@grapecity/spread-sheets-react';

const SpreadComponent = () => {
  /* ====== handle initial load */
  const initSPread = (spread) => {
    let sheet = spread.getActiveSheet();

    /* ====== setting titles */
    sheet.setValue(1, 0, 'REMITA E-PAYMENT SCHEDULE');
    sheet.setValue(2, 0, 'PI REFRENCE No.');
    sheet.setValue(3, 0, 'Date:');
    sheet.setValue(4, 0, 'Account to Debit:');
  };
  return (
    <div className='w-full h-[800px] flex items-center justify-center'>
      {document && (
        <SpreadSheets
          hotStyle={{ width: '100%', height: '100%' }}
          workbookInitialized={(spread) => initSPread(spread)}
        >
          <Worksheet name='Random sheet'></Worksheet>
        </SpreadSheets>
      )}
    </div>
  );
};

export default SpreadComponent;
