import React from 'react';
import { useRecoilValue } from 'recoil';
import { totalAtom } from '../atoms';

const TotalsDisplay = () => {
  // const totals = useRecoilValue(totalAtom);
  // const { totalCards, totalCardsLength } = useRecoilValue(totalCardsSelector)

    return (
      <div>
        <h3>Total Cards: 1</h3>
        <h3>Total Markets: 123</h3>
      </div>
    )
  }
  
  export default TotalsDisplay