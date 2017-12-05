import React, { Component } from 'react';
import Countries from './Countries/Countries'

class App extends Component {
    constructor() {
    super()
    this.state = {
      countries: [],
    }
  }
  handleClick(alpha2Code) {
      console.log(alpha2Code);
  }
  componentDidMount(){
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(response => {
      this.setState({
        countries: response,
      })
    })
  }
  render() {
    return (
      <div>
        <header className="header">
          <h1>React-router data fetching App</h1>
        </header>
        <Countries handlePress={this.handleClick.bind(this)}
          countries={this.state.countries} />
      </div>
    );
  }
}

export default App;
