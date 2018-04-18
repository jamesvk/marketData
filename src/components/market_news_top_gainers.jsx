import React from 'react'
import { connect } from 'react-redux'

export class MarketTopGainers extends React.Component {
    
    render() {
        let { topGainers } = this.props
        let priceChangeConvert = this.props.priceChangeConvert;
        let companyNameConvert = this.props.companyNameConvert;

        return (
            <div className="Info-box" >
                <h3 className="Market-news-topic"><span className="star2">{"☆ "}</span>Top Gainers</h3>
                <table className="Market-news-table">
                    <thead>
                        <tr className="Flex-row-sb">
                            <th className="Market-news-topic-s Left">Symbol</th>
                            <th className="Market-news-topic-c Left">Change</th>
                            <th className="Market-news-topic-lp Right">Last price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topGainers.map((company,index) =>
                            <tr key={company.symbol} >
                                <tr className={`Flex-row-sb ${'Market-news-box-b' + index}`}>

                                    <td className="Market-news-comp-s Roboto">{company.symbol}</td>
                                    {priceChangeConvert(company.change, company.changePercent)}
                                    <td className="Market-news-comp-p Right Roboto">{company.latestPrice}</td>
                                </tr>
                                <tr>
                                    <td className="Market-news-company Tajawal">{companyNameConvert(company.companyName)}</td>
                                </tr>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapState = (state) => {
    return {
        topGainers: state.marketCompanies.marketTopGainers
    }
}


const mapDispatch = (dispatch) => {
    return {
        priceChangeConvert(change, changePercent) {
            if (change > 0) return <td className="Market-news-comp-change Left"><span className="Roboto Positive Market-news-comp-c">{`${change}`}</span><span className="Roboto Positive Market-news-comp-cp">{` (${Math.round(changePercent * 100) / 100}%)`}</span></td>
            else if (change < 0) return <td className="Market-news-comp-change Left"><span className="Roboto Negative Market-news-comp-c">{`${change}`}</span><span className="Roboto Negative Market-news-comp-cp">{` (${Math.round(changePercent * 100) / 100}%)`}</span></td>
            else return <td className="Market-news-comp-change Left"><span className="Roboto Market-news-comp-c">{`${change}`}</span><span className="Roboto Market-news-comp-cp">{` (${Math.round(changePercent * 100) / 100}%)`}</span></td>

        },
        companyNameConvert(companyName) {
            return companyName.length > 30
                ? companyName.slice(0, 31) + '...'
                : companyName
        }
    }
}


export default connect(mapState, mapDispatch)(MarketTopGainers)