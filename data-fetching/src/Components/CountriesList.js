import React, { Component } from 'react';

export default class CountriesList extends Component {
  render() {
    return (
      <div>
           {this.props.country.name}
      </div>
    );
  }
}
