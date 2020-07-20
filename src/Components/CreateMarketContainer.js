import React, { useRef } from 'react';
import MarketDisplay from './MarketDisplay'
import { markets } from '../atoms';
import { useRecoilState } from 'recoil';

const CreateMarketContainer = () => {
    const [card, addNewCard] = useRecoilState(markets)
    const inputEl = useRef(null);

    const addCard = (e) => {
        e.preventDefault()
        const location = inputEl.current.value
        addNewCard([
          ...card,
          {
            "marketId": card[card.length-1].marketId + 1,
            "location": location,
            "cards": 1,
          }
        ])
        inputEl.current.value = '';
      }
    


    return (
      <div className='innerbox'>
        <h2>Create New Market</h2>
        <form onSubmit={addCard}>
            <label>Location: </label>
            <input ref={inputEl} placeholder='Enter Location'/>
            <button type="submit">Add Market</button>
        </form>
        {card.map((el) => 
            <MarketDisplay cards={el.cards} location={el.location} marketId={el.marketId} />
        )}
      </div>
    )
  }
  
  export default CreateMarketContainer