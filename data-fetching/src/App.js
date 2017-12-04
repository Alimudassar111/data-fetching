import React, { Component } from 'react';
import CountriesList from './Components/CountriesList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      country: {},
    }
  }
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/alpha/DE")
    .then(d => d.json())
    .then(d => {
      this.setState({
        country: d
      })
    })
  }

  render() {
    return (
      <div>
            <h1>Data Fetching</h1>
            <CountriesList country={this.state.country} />
      </div>
    );
  }
}
