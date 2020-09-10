import React from 'react';
import logo from './logo.svg';
import './App.css';

import TimeBar from './components/TimeBar'
import MainContent from './components/MainContent'
import StockDetail from './components/StockDetail'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <header>Stock-App</header>
        <TimeBar/>
        <Switch>
          <Route exact path="/" component={MainContent}/>
          <Route path="/stock/:id" component={StockDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
