import React, { useState }from 'react';
import logo from './logo.svg';
import './App.css';

import TimeBar from './components/TimeBar'
import MainContent from './components/MainContent'
import StockDetail from './components/StockDetail'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  let[stockMap, setStockMap] = useState({
    "MOMO": 0,
    "TPL": 0,
    "MU": 0,
    "CORT": 0,
    "NFLX": 0,
    "PAYC": 0,
    "NVDA": 0,
    "NXST": 0,
    "TRTN": 0,
    "SSNC": 0
 })

 const changeFavorite = (key, value) => {

  setStockMap((prevStockMap) => ({
    ...prevStockMap,
    [key]: value
  }))
 }

  return (
    <Router>
      <div className="App">
        <header>Stock-App</header>
        <TimeBar/>
        <Switch>
          <Route exact path="/" 
                 render={(props) => ( <MainContent {...props} stockMap={stockMap} /> )}
          />
          <Route path="/stock/:id" 
                 render={(props) => ( <StockDetail {...props} stockMap={stockMap} changeFavorite={changeFavorite}/> )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
