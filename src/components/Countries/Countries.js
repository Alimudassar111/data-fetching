import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Countries extends Component {
  render() {
    return (
      <div>
        <h3>All Countries</h3>
        <ul className="list-group">
        {this.props.countries.map((country) => {
          return (
          <li key={country.alpha2Code}
              className="list-group-item"
              onClick={() => this.props.handlePress(country.alpha2Code)}>
            <Link to={`country/` + country.alpha2Code}>{country.name}</Link>
          </li>
          )
        })}
        </ul>
      </div>
    );
  }
}
