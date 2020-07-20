import React from 'react';
import TotalsDisplay from './TotalsDisplay'
import CreateMarketContainer from './CreateMarketContainer'

const MasterContainer = () => {
  return (
    <div>
      <h2>MegaMarket Loyalty Cards</h2>
      <TotalsDisplay/>
      <CreateMarketContainer />
    </div>
  )
}

export default MasterContainer