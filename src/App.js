import React, { PureComponent } from 'react';
import './App.css';

//Custom Import 
import Today from './Today';
import History from './History';


class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <div className="top-header">
        <div className="top-header-name">Adsana</div>
        <div className="top-header-link">
          <a className="top-header-link-name" href="http://adsana.io/?reqp=1&reqr=" target="_blank" rel="noopener noreferrer">Adsana.io</a>
        </div>
        </div>
        <div className="page-content-container">
          {/* <div className="sidebar">
          <div className="side-bar-data">
            Side bar data
          </div>
          </div> */}
          <div className="main-content">
          <div className="main-content-data">
          <div className="main-content-heading">
            PusherCoins is a realtime price information about <br/>
            BTC, ETH and LTC
          </div>
          <div className="current-price-text">Current price</div>
           <Today/>
           <div className="history-text">History (Past 5 days)</div>
           <History/>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
