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

import MasterContainer from './Components/MasterContainer'
import './styles.css'

// import {} from './atoms'
// Recoil has two concepts, atoms which are units of state


function App (){
  return ( 
    <RecoilRoot>
        <MasterContainer />
     </RecoilRoot>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
