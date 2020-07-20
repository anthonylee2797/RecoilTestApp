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
  default: {'totalCards': 0, 'totalMarkets': 0, 'lastMarketId': 10000}
})


export const markets = atom({
  key:'markets',
  default: []
})

export default { markets, totalAtom };
