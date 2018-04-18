import axios from 'axios'

const initialState = {
    marketCompanies: [],
    marketMostActive: [],
    marketTopGainers: [],
    marketTopLosers: [],
    companyInfo: {},
    companyQuote: {},
    companyStats: {},
}

const GET_MARKET_COMPANIES = 'GET_MARKET_COMPANIES'
const GET_MARKET_MOST_ACTIVE = 'GET_MARKET_MOST_ACTIVE'
const GET_MARKET_TOP_GAINERS = 'GET_MARKET_TOP_GAINERS'
const GET_MARKET_TOP_LOSERS = 'GET_MARKET_TOP_LOSERS'
const GET_ABOUT_COMPANY = 'GET_ABOUT_COMPANY'
const GET_COMPANY_QUOTE = 'GET_COMPANY_QUOTE'
const GET_COMPANY_STATS = 'GET_COMPANY_STATS'

const getMarketCompanies = companies => ({ type: GET_MARKET_COMPANIES, companies })
const getMarketMostActive = companies => ({ type: GET_MARKET_MOST_ACTIVE, companies})
const getMarketTopGainers = companies => ({ type: GET_MARKET_TOP_GAINERS, companies})
const getMarketTopLosers = companies => ({ type: GET_MARKET_TOP_LOSERS, companies})
const getAboutCompany = companyInfo => ({ type: GET_ABOUT_COMPANY, companyInfo })
const getCompanyQuote = companyQuote => ({ type: GET_COMPANY_QUOTE, companyQuote })
const getCompanyStats = companyStats => ({ type: GET_COMPANY_STATS, companyStats})

export const fetchMarketCompanies = () => {
    return dispatch => {
        axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
            .then(res => res.data)
            .then(companies => dispatch(getMarketCompanies(companies)))
            .catch(console.error)
    }
}

export const fetchMarketMostActive = () => {
    return dispatch => {
        axios.get('https://api.iextrading.com/1.0/stock/market/list/mostactive')
            .then(res => res.data)
            .then(companies => dispatch(getMarketMostActive(companies)))
            .catch(console.error)
    }
}
export const fetchMarketTopGainers = () => {
    return dispatch => {
        axios.get('https://api.iextrading.com/1.0/stock/market/list/gainers')
            .then(res => res.data)
            .then(companies => dispatch(getMarketTopGainers(companies)))
            .catch(console.error)
    }
}
export const fetchMarketTopLosers = () => {
    return dispatch => {
        axios.get('https://api.iextrading.com/1.0/stock/market/list/losers')
            .then(res => res.data)
            .then(companies => dispatch(getMarketTopLosers(companies)))
            .catch(console.error)
    }
}
export const fetchCompanyInfo = (symbol) => {
  return dispatch => {
    axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/company`)
      .then(res => res.data)
      .then(companyInfo => dispatch(getAboutCompany(companyInfo)))
      .catch(console.error)
  }
}

export const fetchCompanyQuotes = (symbol) => {
    return dispatch => {
        axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
        .then(res => res.data)
        .then(companyQuote => dispatch(getCompanyQuote(companyQuote)))
        .catch(console.error)
    }
}

export const fetchCompanyStats = (symbol) => {
    return dispatch => {
        axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/stats`)
        .then(res => res.data)
        .then(companyStats => dispatch(getCompanyStats(companyStats)))
        .catch(console.error)
    }
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_MARKET_COMPANIES:
        return Object.assign({}, state, {marketCompanies: action.companies})

        case GET_MARKET_MOST_ACTIVE:
        return Object.assign({}, state, {marketMostActive: action.companies})

        case GET_MARKET_TOP_GAINERS:
        return Object.assign({}, state, {marketTopGainers: action.companies})

        case GET_MARKET_TOP_LOSERS:
        return Object.assign({}, state, {marketTopLosers: action.companies})

        case GET_ABOUT_COMPANY:
        return Object.assign({}, state, {companyInfo: action.companyInfo})

        case GET_COMPANY_QUOTE:
        return Object.assign({}, state, {companyQuote: action.companyQuote})

        case GET_COMPANY_STATS:
        return Object.assign({}, state, {companyStats: action.companyStats})

        default: 
        return state
    }
} 

export default reducer
