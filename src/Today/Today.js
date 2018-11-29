/**
 * Created by Nikita Mittal
 * 28th Nov 2018
 */

import React, { PureComponent } from 'react'
import axios from 'axios'

//import css
import './Today.css'

class Today extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            btcAmount: '',
            ethAmount: '',
            ltcAmount: ''
        }
    }

    componentWillMount(){
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
                .then(response => {
                    // We set the latest prices in the state to the prices gotten from Cryptocurrency.
                    //console.log("API calling success", response)
                    this.setState({ btcAmount: response.data.BTC.USD });
                    this.setState({ ethAmount: response.data.ETH.USD });
                    this.setState({ ltcAmount: response.data.LTC.USD });
                })
                // Catch any error here
                .catch(error => {
                    console.log(error)
                })
    }
    render() {
        const {btcAmount, ethAmount, ltcAmount} = this.state;
        return (
            <div className="today-container">
                <div className="today-btc-container">
                    <div className="today-btc-data-container">
                        <div className="today-amount-container">${btcAmount}</div>
                        <div className="today-unit-container"> 1 BTC</div>
                    </div>
                </div>
                <div className="today-eth-container">
                    <div className="today-eth-data-container">
                        <div className="today-amount-container">${ethAmount}</div>
                        <div className="today-unit-container"> 1 ETH</div>
                    </div>

                </div>
                <div className="today-ltc-container">
                    <div className="today-ltc-data-container">
                        <div className="today-amount-container">${ltcAmount}</div>
                        <div className="today-unit-container"> 1 LTC</div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Today