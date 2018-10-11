import React, { Component } from 'react';
import './App.css';

import CurrencyHOC from "./Components/CurrencyHOC"
import CurrencyRP from "./Components/CurrencyRP"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Higher Order Component</h1>
          <CurrencyHOC currency={`AUD`} exchangeRate={1.4} />
          <CurrencyHOC currency={`CAD`} exchangeRate={1.3} />
          <CurrencyHOC currency={`Piso`} exchangeRate={54.05} />
          <CurrencyHOC currency={`BTC`} exchangeRate={0.00016} />
          <CurrencyHOC currency={`V-Bucks`} exchangeRate={100}/>
        </div>
        <div>
          <h1>Render Props</h1>
          <CurrencyRP render={(data) => (
            <p>
              USD ${data.amount.toFixed(2)} - AUD {(data.amount * 1.4).toFixed(2)}
            </p>
          )} />
        </div>
      </div>
    );
  }
}

export default App;
