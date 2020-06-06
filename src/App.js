import React, { Component } from 'react';
import './App.css';

import CountryList from './components/CountryList/CountryList.js';
import TitleBar from './components/TitleBar/TitleBar';

class App extends Component {
  state = {
    isVisible: false,
    year: "2016",
    data: []
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data[this.state.year]
        })
        console.log('got the data!', this.state.data)
        console.log('Data for :', this.state.year)
      })
  }

  onUpdateYear = (ev, data) => {
    let year = ev.target.value;
    this.setState({
      year: year,            
    }, () => {
      console.log(this.state.year)
    })
    
    console.log('Data for :', this.state.year)
    console.log(this.state.data)
  }

  //try messing with filter 
  //get one entry from the list and use js function in the console.
  // look into only returning the data for one year initially
  //data["2010"].filter(name => name.Country === "Bolivia")[0]


  // showBar = () => {
  //   this.setSate({
  //     isVisible: true
  //   });
  // }

  // hideBar = () => {
  //   this.setState({
  //     isVisible: false
  //   });
  // }



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
      <CountryList
        data={this.state.data}
        year={this.state.year}
        onToggleCountry={this.toggleCountry} />
      </div>
      </div>
    
    );
  }
}

export default App;
