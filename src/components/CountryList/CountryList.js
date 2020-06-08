import React, { Component } from 'react';
import './CountryList.css';

import CountryButton from '../CountryButton/CountryButton';

class CountryList extends Component {
  onButtonClick = () => {
    if(this.props.isVisible) {
      this.props.onHide();
    } else {
      this.props.onShow();
    }
  }
  render() {
    
    return (    
      <div className="CountryCheckbox">
        {
          this.props.data.map((info, index) => (
            <CountryButton
              // onToggleCountry={() => this.props.onToggleCountry(info, index)}
              onShow={this.onButtonClick}
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