import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

// Don't really need this atom
// We used selector instead for TotalsDisplay 
export const totalAtom = atom({
  key: 'total',
  default: {'totalCards': 1, 'totalMarkets': 1}
})

// export const totalCardsSelector = selector({
//   key: 'totalCards',
//   get: ({get}) => {
//     const totalCardsArr = get(markets);
//     const totalCardsLength = totalCardsArr.length;
//     const totalCards = totalCardsArr.reduce((acc, cur) => {
//       console.log('inside totalcardsSelector:', totalCardsArr)
//       return acc + cur.cards
//     }, 0)
//     return { totalCards, totalCardsLength }
//   }
// })

export const markets = atom({
  key:'markets',
  default: [{
    "marketId": 10000,
    "location": 'Fuck u',
    "cards": 1,
  }]
})

export default { markets, totalAtom };
