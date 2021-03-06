import React, { useState, useEffect }from 'react';
import './App.css';

import TimeBar from './components/TimeBar'
import MainContent from './components/MainContent'
import StockDetail from './components/StockDetail'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  // global state that determines if stocks are favorited or not
  // 1  = favorite
  // 0 = not favorite
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

 // fetch data from local storage when the page reloads
 useEffect(() => {
  
  const backup = localStorage.getItem("stockMap")

  if(backup !== null)
    setStockMap(JSON.parse(backup))
  
 }, [])

 // update if a stock is favorited or not
 const changeFavorite = (key, value) => {

  localStorage.setItem('stockMap', JSON.stringify({
    ...stockMap,
    [key]: value
  }));

  setStockMap(JSON.parse(localStorage.getItem("stockMap")))
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
