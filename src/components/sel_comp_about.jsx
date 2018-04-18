import React from 'react'
import { connect } from 'react-redux'

export class SelectedCompanyAbout extends React.Component {

    render() {
        let { companyInfo } = this.props
        let companyWebsite = this.props.companyWebsiteConvert(companyInfo.website)

        return (
            <div className="Info-box Flex-col-cent" >
                <p className="Comp-about-d Left Playfair-display">{companyInfo.description}</p>
                <table className="Comp-table">
                    <tbody>
                        <tr className="Flex-row-sb">
                            <td className="C-a-trc-t Playfair-display">Exchange</td>
                            <td className="C-a-trc-i Playfair-display">{companyInfo.exchange}</td>
                        </tr>
                        <tr className="Flex-row-sb">
                            <td className="C-a-trc-t Playfair-display">Sector</td>
                            <td className="C-a-trc-i Playfair-display">{companyInfo.sector}</td>
                        </tr>
                        <tr className="Flex-row-sb">
                            <td className="C-a-trc-t Playfair-display">Industry</td>
                            <td className="C-a-trc-i Playfair-display">{companyInfo.industry}</td>
                        </tr>
                        <tr className="Flex-row-sb">
                            <td className="C-a-trc-t Playfair-display">CEO</td>
                            <td className="C-a-trc-i Playfair-display">{companyInfo.CEO}</td>
                        </tr>
                        <tr className="Flex-row-sb">
                            <td className="C-a-trc-t Playfair-display">Website</td>
                            <td className="C-a-trc-i Playfair-display"><a className="link" href={companyInfo.website}>{companyWebsite}</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapState = (state) => {
    return {
        companyInfo: state.marketCompanies.companyInfo
    }
}


const mapDispatch = (dispatch) => {
    return {
        companyWebsiteConvert(companyName) {
            let dot = companyName.indexOf('.')
            companyName = companyName.slice(dot + 1)
            return companyName.length > 15
                ? companyName.slice(0, 16) + '...'
                : companyName
        }
    }
}


export default connect(mapState, mapDispatch)(SelectedCompanyAbout)