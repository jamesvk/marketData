import React from 'react'
import { connect } from 'react-redux'

export class SelectedCompanyNameAndPrice extends React.Component {
    
    render() {
        let { companyInfo, companyQuote } = this.props
        let companyName = this.props.companyNameConvert(companyInfo.companyName);
        let changePercent = this.props.changePercentConvert(companyQuote.changePercent)
        let change = this.props.change(companyQuote.change, changePercent)

        return (
            <div className="Info-box Flex-col-cent" >
                <p className="Center">
                    <span className="Comp-name-n Playfair-display">{companyName}</span>
                    <span className="Comp-name-s Playfair-display">{` (${companyInfo.symbol})`}</span>
                </p>
                <div className="Flex-col-cent">
                    <p className="Comp-price-p Center Playfair-display">{companyQuote.latestPrice}</p>
                    <p className="Comp-price-c Center">
                        {change}
                    </p>
                </div>
            </div>
        )
    }
}


const mapState = (state) => {
    return {
        companyInfo: state.marketCompanies.companyInfo,
        companyQuote: state.marketCompanies.companyQuote
    }
}


const mapDispatch = (dispatch) => {
    return {
        companyNameConvert(companyName) {
            return companyName.length > 30
                ? companyName.slice(0, 31) + '...'
                : companyName
        },
        changePercentConvert(change) {
            return Math.round((change * 100) * 100) / 100
        },
        change(change, changePercent) {
            if (change > 0) return <span className="Comp-price-c-c Positive Playfair-display"> {`${change} (${changePercent}%)`}</span>
            else if (change < 0) return <span className="Comp-price-c-c Negative Playfair-display"> {`${change} (${changePercent}%)`}</span>
            else return <span className="Comp-price-c-c Playfair-display"> {`${change} (${changePercent}%)`}</span>
        }
    }
}


export default connect(mapState, mapDispatch)(SelectedCompanyNameAndPrice)