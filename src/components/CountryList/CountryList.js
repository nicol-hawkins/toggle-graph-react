import React, { Component } from 'react';
import './CountryList.css';

import CountryButton from '../CountryButton/CountryButton';

class CountryList extends Component {
  render() {
    
    return (    
      <div className="CountryCheckbox">
        {
          this.props.data.map((info, index) => (
            <CountryButton
              onToggleCountry={() => this.props.onToggleCountry(info, index)}
              text={info.Country}
              key={index}
              >
                {info.Country}
            </CountryButton>
          ))
        }
      </div>

    );
  }
}

export default CountryList;