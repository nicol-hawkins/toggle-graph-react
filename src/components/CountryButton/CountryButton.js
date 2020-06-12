import React, { Component } from 'react';
import './CountryButton.css';

class CountryButton extends Component {

  render() {
    let className = 'Country-Button';   
    
    return (
        <div 
          className={className} 
          onClick={this.props.gotClicked}
          onChange={this.props.onChange}>
            {this.props.children}
        </div>    
    );
  }
};

export default CountryButton;