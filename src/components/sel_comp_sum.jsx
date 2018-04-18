import React from 'react'
import { connect } from 'react-redux'

export class SelectedCompanySummary extends React.Component {
    
    render() {
        let { companyQuote, companyStats } = this.props
        let marketCapNum = this.props.marketCapNumConvert(companyQuote.marketCap)
        let dividendAndYield = this.props.dividendAndYieldConvert(companyStats.dividendRate,companyStats.dividendYield)
        let exDivDate = this.props.exDivDateConvert(companyStats.exDividendDate);

        return (
            <div className="Info-box Flex-col-cent">
                <table className="Comp-table">
                    <tbody>
                        <tr className="Comp-sum-ts Flex-row-sb Playfair-display">
                            <td className="Comp-sum-t">Volume</td>
                            <td className="Comp-sum-s">{companyQuote.latestVolume}</td>
                        </tr>
                        <tr className="Comp-sum-ts Flex-row-sb Playfair-display">
                            <td className="Comp-sum-t">Avg daily volume </td>
                            <td className="Comp-sum-s">{companyQuote.avgTotalVolume}</td>
                        </tr>
                        <tr className="Comp-sum-ts Flex-row-sb Playfair-display">
                            <td className="Comp-sum-t">Previous Close</td>
                            <td className="Comp-sum-s">{companyQuote.previousClose}</td>
                        </tr>
                        <tr className="Comp-sum-ts Flex-row-sb Playfair-display">
                            <td className="Comp-sum-t">52 week range</td>
                            <td className="Comp-sum-s">{`${companyQuote.week52Low} - ${companyQuote.week52High}`}</td>
                        </tr>
                        <tr className="Comp-sum-ts Flex-row-sb Playfair-display">
                            <td className="Comp-sum-t">Market cap</td>
                            <td className="Comp-sum-s">{marketCapNum}</td>
                        </tr>
                        <tr className="Comp-sum-ts Flex-row-sb Playfair-display">
                        <td className="Comp-sum-t">Beta</td>
                            <td className="Comp-sum-s">{companyStats.beta}</td>
                        </tr>
                        <tr className="Comp-sum-ts Flex-row-sb Playfair-display">
                        <td className="Comp-sum-t">Latest EPS</td>
                            <td className="Comp-sum-s">{companyStats.latestEPSDate}</td>
                        </tr>
                        <tr className="Comp-sum-ts Flex-row-sb Playfair-display">
                        <td className="Comp-sum-t">{"Dividend & Yield"}</td>
                            <td className="Comp-sum-s">{dividendAndYield}</td>
                        </tr>
                        <tr className="Comp-sum-ts Flex-row-sb Playfair-display">
                        <td className="Comp-sum-t">Ex-dividend date</td>
                            <td className="Comp-sum-s">{exDivDate}</td>
                        </tr>
                        <tr className="Comp-sum-ts Flex-row-sb Playfair-display">
                        <td className="Comp-sum-t">P/E ratio</td>
                            <td className="Comp-sum-s">{companyQuote.peRatio}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapState = (state) => {
    return {
        companyQuote: state.marketCompanies.companyQuote,
        companyStats: state.marketCompanies.companyStats
    }
}


const mapDispatch = (dispatch) => {
    return {
        marketCapNumConvert(marketCap) {
            if (marketCap > 999999999999) return Math.round((marketCap / 1000000000000) * 1000) / 1000 + 'T'
            if (marketCap > 999999999) return Math.round((marketCap / 1000000000) * 1000) / 1000 + 'B'
            if (marketCap > 999999) return Math.round((marketCap / 1000000) * 1000) / 1000 + 'M'
        },
        dividendAndYieldConvert(dividendRate, dividendYield) {
            return `${dividendRate}(${Math.round(dividendYield * 1000) / 1000})`
        },
        exDivDateConvert(exDivDate) {
            if (exDivDate) return exDivDate.slice(0, 10)
            else return exDivDate
        }
    }
}


export default connect(mapState, mapDispatch)(SelectedCompanySummary)