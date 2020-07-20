import React from 'react';
import { useRecoilState } from 'recoil';
import { totalAtom, markets } from '../atoms';

const MarketDisplay = ({ marketId, location, cards }) => {
   const [market, setMarket] = useRecoilState(markets)


  const addCard = () => {
    console.log(market);
    // market.forEach(el => console.log(el.cards, marketId))
    let test = market.map((el) => {
      console.log(el)
      if (el.marketId === marketId) {
        el.cards = el.cards + 1;
      }
      return el;
    })
    console.log(test);
    // setMarket(market.map((el) => {
    //   console.log(el)
    //   if (el.marketId === marketId) {
    //     // console.log(
    //     //   'yes'
    //     // )
    //     el.cards = el.cards + 1;
    //   }
    // }))
  }

  const deleteCard = () => {
    console.log(market)
  }

   return (
      <div className='marketBox'>
        <h3>Market Id: {marketId}</h3>
        <h3>Location: {location}</h3>
        <h3>Cards: {cards}</h3>
        <h3>% of total: 100</h3>
        <button onClick={addCard} >Add Card</button>
        <button onClick={deleteCard} >Delete Card</button>
      </div>
  )
}

export default MarketDisplay