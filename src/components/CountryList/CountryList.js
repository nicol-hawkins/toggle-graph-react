import React, { Component } from 'react';
import './CountryList.css';

import CountryButton from '../CountryButton/CountryButton';


class CountryList extends Component {

  state = {
    chosenCountries: []
  }

  onButtonClick = (index) => {
    // const chosenCountries
    this.props.data.map((index) => (
      
      console.log(index.Country)
           
    ))  
    console.log(index)

    const chosenCountries = this.state.chosenCountries;
    const chosenCountry = index.Country;
    chosenCountries.push(chosenCountry);

    console.log(chosenCountries)

    this.setState({
      chosenCountries: this.state.chosenCountries
    })


    if(this.props.isVisible) {
      this.props.onHide(index);
    } else {
      this.props.onShow(index);
    }
    console.log('onButtonClick: ', index, '(index)')
  };

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