import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import SelectedCompany from './components/selected_company'

class Routes extends Component {
    render() {
      return (
        <Switch>
          <Route exact path="/" component={SelectedCompany} />
          <Route exact path="/:CompanySymbol" component={SelectedCompany} />
        </Switch>
      )
    }
}

const mapState = () => {return {}}
const mapDispatch = () => {return {}}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))