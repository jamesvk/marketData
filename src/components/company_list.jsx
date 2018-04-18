import React from 'react'
import { connect } from 'react-redux'
import { fetchMarketCompanies } from '../store'

export const CompanyList = (props) => {
    const companies = props.companies

    return (
        <div className="Market-company-container">
            <form className="Form-container Center">
                <input
                    className="Form-input Center Montserrat"
                    type="text"
                    list="companies"
                    placeholder="Start typing a symbol or company. Click the symbol or company. Press Enter."
                    onChange={(event) => {
                        props.handleChange(event)
                    }} />
                <datalist id="companies">
                    {
                        companies.map(company => {
                            let {name} = company;
                            if (name.length > 50) name = name.slice(0, 51)
                            return <option value={company.symbol} key={company.symbol} >{name}</option>
                        })
                    }
                </datalist>
            </form>
        </div>
    )
}

class Loader extends React.Component {
    componentDidMount() {
        this.props.getMarketCompanies();
    }

    render() {
        const Render = this.props.Render
        return (<Render
            companies={this.props.companies}
            inputValue={this.props.inputValue}
            handleChange={this.props.handleChange}

        />)
    }
}

const mapState = (state) => {
    return {
        companies: state.marketCompanies.marketCompanies,
        Render: CompanyList
    }
}


const mapDispatch = (dispatch, ownProps) => {
    return {
        getMarketCompanies() {
            dispatch(fetchMarketCompanies())
        },
        handleChange(event) {
            const value = event.target.value;
            ownProps.history.push(`/${value}`)
        }
    }
}


export default connect(mapState, mapDispatch)(Loader)