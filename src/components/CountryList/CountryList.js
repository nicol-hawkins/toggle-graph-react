import React, { Component } from 'react';
import './CountryList.css';

import CountryButton from '../CountryButton/CountryButton';

class CountryList extends Component {
  render() {
    
    return (
    
      <div className="CountryCheckbox">
        {/* {this.props.data[this.props.year] ?
          this.props.data[this.props.year].map((info, index) => (
            <CountryButton
              onToggleCountry={() => this.props.onToggleCountry(info, index)}
              text={info.Country}
              key={index}
              >
                {console.log(index)}
                {info.Country}
            </CountryButton>
          )) : "NO DATA"
        } */}

        <CountryButton/>
 
      </div>

    );
  }
}

export default CountryList;