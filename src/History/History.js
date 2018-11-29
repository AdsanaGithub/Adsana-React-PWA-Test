/**
 * Created by Nikita Mittal
 * 28th Nov 2018
 */

import React, { PureComponent } from 'react';
import moment from 'moment'
import map from 'lodash/map'
import axios from 'axios';

//import css
import './History.css';

class History extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            historyList : []
        }
    }

    getETHPrices = (date) => {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=' + date);
    }
    // This function gets the BTC price for a specific timestamp/date. The date is passed in as an argument
    getBTCPrices = (date) => {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' + date);
    }
    // This function gets the LTC price for a specific timestamp/date. The date is passed in as an argument
    getLTCPrices = (date) => {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts=' + date);
    }


    // This function gets the prices for the current date.
    getTodayPrice = () => {
        const {historyList} = this.state;
        let t = moment().unix()
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                historyList.push({
                    date: moment().format("DD MMM YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
                })
                this.setState({
                    historyList: [...historyList]
                })
                
            }));
    }
    // This function gets the prices for the yesterday.
    getYesterdayPrice = () => {
        const {historyList} = this.state;
        let t = moment().subtract(1, 'days').unix();
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                historyList.push({
                    date: moment().subtract(1, 'days').format("DD MMM YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
                })
                this.setState({
                    historyList: [...historyList]
                })
            }));
    }
    // This function gets the prices for the two days ago.
    getTwoDaysPrice = () => {
        let t = moment().subtract(2, 'days').unix();
        const {historyList} = this.state
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                historyList.push({
                    date: moment().subtract(2, 'days').format("DD MMM YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
                })
                this.setState({
                    historyList: [...historyList]
                })
            }));
    }
    // This function gets the prices for the three days ago.
    getThreeDaysPrice = () => {
        const {historyList} = this.state
        let t = moment().subtract(3, 'days').unix();
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                historyList.push({
                    date: moment().subtract(3, 'days').format("DD MMM YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
                })
                this.setState({
                    historyList: [...historyList]
                })
            }));
    }
    // This function gets the prices for the four days ago.
    getFourDaysPrice = () => {
        const {historyList} = this.state;
        let t = moment().subtract(4, 'days').unix();
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                historyList.push({
                    date: moment().subtract(4, 'days').format("DD MMM YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
                })
                this.setState({
                    historyList: [...historyList]
                })
            }));
    }
    componentWillMount() {
        this.getTodayPrice();
        this.getYesterdayPrice();
        this.getTwoDaysPrice();
        this.getThreeDaysPrice();
        this.getFourDaysPrice();
    }
    render() {
        const {historyList} = this.state;
        console.log("History LIst", historyList);
        return (
            <div className="history-container">
            {historyList && historyList.length && map(historyList, (historyData, index) => {
                return (
                    <div key={index} className="history-date-data-container">
                    <div className="history-btc-container">
                        <div className="history-date-container">{historyData.date}</div>
                        <div className="history-data-container">1 BTC = ${historyData.btc}</div>
                    </div>
                    <div className="history-eth-container">
                        <div>1 ETH = ${historyData.eth}</div>
                    </div>
                    <div className="history-ltc-container">
                        <div>1 LTC = ${historyData.ltc}</div>
                    </div>
                  </div>
                )

            })}
              
            </div>
        )
    }
}

export default History

