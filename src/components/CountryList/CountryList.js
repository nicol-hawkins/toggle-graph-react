import React, { Component } from 'react';
import './CountryList.css';

import CountryButton from '../CountryButton/CountryButton';
import BarChart from '../BarChart/BarChart';

class CountryList extends Component {

  toggleBar = () => {
    if(this.props.isVisible) {
      return `<div className='testBar' style={barStyle}>
      <h1>HELLLO WORLD</H1>
    </div>`
    } else {
      return null
    }
  }

  onButtonClick = () => {
    if(this.props.isVisible) {
      this.props.onHide();
    } else {
      this.props.onShow();
    }
  }
  render() {

    let barStyle = {
      visibility: 'hidden',
      maxHeight: '0px'
    };

    if (this.props.isVisible) {
      barStyle = {
        visibility: 'visible',
        maxHeight: '100px'
      }
    };
    
    return (    
      <div className="CountryCheckbox">
        {
          this.props.data.map((info, index) => (
            <CountryButton
              // onToggleCountry={() => this.props.onToggleCountry(info, index)}
              gotClicked={this.onButtonClick}
              text={info.Country}
              key={index}
              onToggle={this.toggleBar()}
              >
                {info.Country}
            </CountryButton>
          ))
        }

        <div className='testBar' style={barStyle}>
          {this.props.children}
        </div>
      </div>

    );
  }
}

export default CountryList;