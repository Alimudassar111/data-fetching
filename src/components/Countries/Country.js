import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Country extends Component {
  constructor(props) {
    super(props)
    this.state = {
      country: "",
    }
  }
  componentDidMount(){
    const {alpha2Code} = this.props.match.params
     fetch("https://restcountries.eu/rest/v2/alpha/" + alpha2Code)
     .then(response => {
      if (!response.ok) {
        throw Error("Fetching failed");
      }
      return response
     })
    .then(response => response.json())
    .then(response => {
      this.setState({
        country: response,
      })
    })
  }
  render() {
    return (
            <div>

            {!this.state.country ? <p>Loading</p>

            : <div className="media">
              <div className="media-left">
                  <img style={{ width:150, height:100}} src={this.state.country.flag} alt="flag" />
              </div>
              <div className="media-body">
                <h4 className="media-heading">{this.state.country.name}</h4>
                <p>Capital: {this.state.country.capital}</p>
                <p>CallingCode: {this.state.country.callingCodes} </p>
                <p>Region: {this.state.country.region}</p>
              </div>
            </div>
          }
          <Link to="/">
          <button className="btn">Back</button>
          </Link>
      </div>
    );
  }
  }

