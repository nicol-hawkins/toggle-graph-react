import React, { Component } from 'react';
import './App.css';

import CountryList from './components/CountryList/CountryList.js';
import TitleBar from './components/TitleBar/TitleBar';
import BarChart from './components/BarChart/BarChart';


class App extends Component {
  state = {
    isVisible: false,
    year: "2016",
    data: [],
    chosenCountries: []
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data[this.state.year]
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
    this.chooseCountry()
    console.log('Index of Country: ', data)
    console.log('Name of Country: ', )

    this.setState({
      isVisible: !this.state.isVisible,
      chosenCountries: this.state.chosenCountries
    });
  }

  chooseCountry = (data, index, info) => {
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

  render(){
    return (
      <div className="App">
        <div className="TitleBar">
          <TitleBar
            onChange={this.onUpdateYear}
            year={this.state.year}>
          </TitleBar>
        </div>
    
        <div className="MainContainer">
          <CountryList
            isVisible={this.state.isVisible}
            onShow={this.showBar}
            onHide={this.hideBar}
            data={this.state.data}>
          </CountryList>

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
      </div>
    </div>
    
    );
  }
}

export default App;
