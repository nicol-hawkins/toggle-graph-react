import React, { Component } from 'react';
import './CountryList.css';

import CountryButton from '../CountryButton/CountryButton';


class CountryList extends Component {

  onButtonClick = (index) => {
    if(this.props.isVisible) {
      this.props.onHide(index);
    } else {
      this.props.onShow(index);
    }
  }

  render() {
    //might not be necessary!

    // let barStyle = {
    //   visibility: 'hidden',
    //   maxHeight: '0px'
    // };

    // if (this.props.isVisible) {
    //   barStyle = {
    //     visibility: 'visible'
    //   }
    // };
    
    return (    
      <div className="CountryCheckbox">
        {
          this.props.data.map((info, index) => (
            <CountryButton
              gotClicked={() => this.onButtonClick(index)}
              text={info.Country}
              key={index}>
                {info.Country}
            </CountryButton>
          ))
        }
      </div>

    );
  }
}

export default CountryList;