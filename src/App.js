import React, { Component } from 'react';
import './App.css';
import Routes from './routes'
import history from './history'
import CompanyList from './components/company_list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header Center">
          <h1 className="App-title Montserrat">.marketDATA</h1>
        </header>
        <div className="Main-container">
          <CompanyList history={history} />
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;