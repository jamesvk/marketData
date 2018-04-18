import React from 'react'
import { connect } from 'react-redux'
import MarketMostActive from './market_news_most_active'
import MarketTopGainers from './market_news_top_gainers'
import MarketTopLosers from './market_news_top_losers'

export class MarketNews extends React.Component {

    render() {
        let {mostActive} = this.props
        return (
            <div>
            <div className="Market-news-cont Flex-row-cent" >
                <MarketMostActive />
                <MarketTopGainers />
                <MarketTopLosers />
            </div>
                <div className="Flex-row-cent">
                    <h6 className="Cite-and-update">Data provided for free by <a href="https://iextrading.com/developer/">IEX</a>.</h6>
                    {mostActive.length && <h6 className="Cite-and-update">{`Last updated ${mostActive[0].latestTime}`}</h6>}
                </div>
            </div>
        )
    }
}


const mapState = (state) => {
    return {
        mostActive: state.marketCompanies.marketMostActive
    }
}


const mapDispatch = (dispatch) => {return {}}


export default connect(mapState, mapDispatch)(MarketNews)