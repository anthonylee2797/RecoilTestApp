import React from 'react';
import { useRecoilValue } from 'recoil';
import { totalAtom } from '../atoms';

const TotalsDisplay = () => {
    const total = useRecoilValue(totalAtom)

    return (
      <div>
        <h3>Total Cards: {total.totalCards}</h3>
        <h3>Total Markets: {total.totalMarkets}</h3>
      </div>
    )
  }
  
  export default TotalsDisplay