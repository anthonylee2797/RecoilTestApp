import React from 'react';
import { useRecoilState } from 'recoil';
import { totalAtom, markets } from '../atoms';

const MarketDisplay = ({ marketId, location, cards }) => {
   const [atom, setAtom] = useRecoilState(totalAtom)
   const [market, setMarket] = useRecoilState(markets)

   const addCard = () => {
       setAtom({
           'totalCards': atom.totalCards + 1,
       'totalMarkets': atom.totalMarkets,
       'lastMarketId': atom.lastMarketId
    })

    let copy = JSON.parse(JSON.stringify(market))
    copy.map((el) => {
        if (el.marketId === marketId){
            el.cards++
        }
    })

    setMarket(copy)
   }

   const deleteCard = () => {
    setAtom({
        'totalCards': atom.totalCards - 1,
        'totalMarkets': atom.totalMarkets,
        'lastMarketId': atom.lastMarketId
    })

    let copy = JSON.parse(JSON.stringify(market))
    copy.map((el) => {
        if (el.marketId === marketId){
            el.cards--
        }
    })

    setMarket(copy)
 
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