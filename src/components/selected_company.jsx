import React from 'react'
import { connect } from 'react-redux'
import SelCompNameAndPrice from './sel_comp_name_and_price'
import SelCompSum from './sel_comp_sum'
import SelCompAbout from './sel_comp_about'
import MarketNews from './market_news'
import { fetchMarketMostActive, fetchMarketTopGainers, fetchMarketTopLosers, fetchCompanyInfo, fetchCompanyQuotes, fetchCompanyStats } from '../store/market_companies'

export const SelectedCompany = (props) => {
    let { companyQuote } = props;
    let latestTime = 0;
    if (companyQuote.latestTime) latestTime = companyQuote.latestTime

    return (
        <div>
            <div className="Sel-comp-cont Flex-row-cent">
                <SelCompAbout />
                <SelCompNameAndPrice />
                <SelCompSum />
            </div>
            <div className="Flex-row-cent">
                <h6 className="Cite-and-update">Data provided for free by <a href="https://iextrading.com/developer/">IEX</a>.</h6>
                {latestTime && <h6 className="Cite-and-update">{`Last updated ${companyQuote.latestTime}`}</h6>}
            </div>
        </div>
    )
}


class Loader extends React.Component {
    componentDidMount() {
        this.props.getMarketNews();
        if (this.props.match.params.CompanySymbol) this.props.getSelectedCompany(this.props.match.params.CompanySymbol)
    }

    render() {
        if (!Object.keys(this.props.aboutCompany).length) return <MarketNews />
        const Render = this.props.Render
        return <Render companyQuote={this.props.companyQuote} />
    }
}


const mapState = (state) => {
    return {
        aboutCompany: state.marketCompanies.companyInfo,
        companyQuote: state.marketCompanies.companyQuote,
        Render: SelectedCompany
    }
}


const mapDispatch = (dispatch) => {
    return {
        getSelectedCompany(symbol) {
            dispatch(fetchCompanyInfo(symbol))
            dispatch(fetchCompanyQuotes(symbol))
            dispatch(fetchCompanyStats(symbol))
        },
        getMarketNews() {
            dispatch(fetchMarketMostActive())
            dispatch(fetchMarketTopGainers())
            dispatch(fetchMarketTopLosers())
        }
    }
}


export default connect(mapState, mapDispatch)(Loader)