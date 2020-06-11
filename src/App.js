import React, { Component } from 'react';
import './App.css';

import CountryList from './components/CountryList/CountryList.js';
import TitleBar from './components/TitleBar/TitleBar';
import BarChart from './components/BarChart/BarChart';
import CountryButton from './components/CountryButton/CountryButton'

class App extends Component {
  state = {
    isVisible: false,
    year: "2016",
    data: [],
    chosenCountries: [],
    availableCountries: []
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data[this.state.year],
          availableCountries: data[this.state.year]
        })
        console.log('got the data!', this.state.year, this.state.data)
      })
  }

  onUpdateYear = (ev, data) => {
    let year = ev.target.value;
    this.setState({
      year: year       
    }, () => {console.log('Current Year: ', this.state.year)})
    this.componentDidMount()
  };

  showBar = (data, info, index) => {
    // console.log('Show Bar')
    // const chosenCountries = this.state.chosenCountries
    // const chosenCountry = data.Country;
    // chosenCountries.push(chosenCountry);

    // console.log('Country Toggled: ', chosenCountry)
    // console.log('Chosen Countries: ', chosenCountries)
    // console.log(data.Country)

    // this.testData()

     //duplicate the two arrays
     const chosenCountries = this.state.chosenCountries.slice();
     const availableCountries = this.state.availableCountries.slice();
 
     //retrieve country of choice
     const chosenCountry = availableCountries[index];
 
     //add to chosen list
     chosenCountries.push(chosenCountry);
     availableCountries.splice(index, 1);

     console.log(chosenCountries)

    this.setState({
      isVisible: !this.state.isVisible,
      availableCountries: this.state.availableCountries,
      chosenCountries: this.state.chosenCountries
      // chosenCountries: this.state.chosenCountries
    });
  }

  testData = () => {
    this.state.data.map((info) => (
      console.log(info.Country)
    ))
  
  }



  hideBar = () => {
    console.log('Hide Bar')
    this.setState({
      isVisible: !this.state.isVisible
    });
  }


  onButtonClick = (data) => {
    if(this.props.isVisible) {
      this.props.onHide(data);
    } else {
      this.props.onShow(data);
    }
  }


  render(){
    return (
      <div className="App">
        <div className="TitleBar">
          <TitleBar
            onChange={this.onUpdateYear}
            currentYear={this.state.year}
            year={this.state.year}>
          </TitleBar>
        </div>
    


        <div className="MainContainer">
          {/* <CountryList
            data={this.state.data}
            year={this.state.year}
            onToggleCountry={this.toggleCountry}
            /> */}

          <CountryList
            isVisible={this.state.isVisible}
            onShow={this.showBar}
            onHide={this.hideBar}
            data={this.state.data}>

            <div className="BarChart" id="results">
              {
                this.state.isVisible ?
                this.state.data.map((info, index) => (
                  <BarChart
                    className="bar--show bar"
                    info={info}
                    data={this.state.data}
                    year={this.state.year}
                    key={index}
                    chosenCountries={this.state.chosenCountries}
                  >
                </BarChart>
                )) : null
              }
            </div>
      
            {/* {
              this.state.data.map((info, index) => (
                <CountryButton
                  // onToggleCountry={() => this.props.onToggleCountry(info, index)}
                  gotClicked={this.onButtonClick}
                  text={info.Country}
                  key={index}
                  >
                    {info.Country}
                </CountryButton>
              ))
            } */}
            </CountryList>

      </div>
    </div>
    
    );
  }
}

export default App;
