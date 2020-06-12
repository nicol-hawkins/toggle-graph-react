import React, { Component } from 'react';
import './CountryList.css';

import CountryButton from '../CountryButton/CountryButton';


class CountryList extends Component {

  state = {
    chosenCountries: []
  }

  onButtonClick = (index) => {

    if(this.props.isVisible) {
      this.props.onHide(index);
    } else {
      this.props.onShow(index);
    }
    console.log('index: ', index)
    // const chosenCountries
    this.props.data.map((index) => (   
      console.log(index.Country)          
    ))  
    
    //simple approach, appends to list but contents undefined
    // const chosenCountries = this.state.chosenCountries;
    // const chosenCountry = index.Country;
    // chosenCountries.push(chosenCountry);

    // console.log('Chosen Countries: ', chosenCountries)


    //slicing/splice method, logs chosen country but doesnt append to array
    const chosenCountries = this.state.chosenCountries.slice();
    const availableCountries = this.props.data.slice();

    //retrieve country of choice
    const chosenCountry = availableCountries[index];
    console.log(chosenCountry)

    //add to chosen list
    chosenCountries.push(chosenCountry);
    availableCountries.splice(index, 1);
    console.log('Chosen Countries: ', chosenCountries)

    this.setState({
      chosenCountries: [...this.state.chosenCountries, chosenCountry]
    })

    
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