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

//   toggleCountry = (indexOfCountry) => {
//     const chosenCountries = this.state.chosenCountries.slice(); // duplicate chosenCountries array

//     // Check if the chosenCountries array is listing this country as chosen
//     if (chosenCountries.includes(indexOfCountry)) {
//         // Presently chosen, remove from array
//         // (This is the way you remove a particular value from an array in
//         // JavaScript, sadly there is no "remove" method.)
//         chosenCountries.splice(chosenCountries.indexOf(indexOfCountry), 1);

//     } else {
//         // Not presently chosen, add to array
//         chosenCountries.push(chosenCountries);
//     }

//     // Finally, set the state with the new chosenCountries
//     this.setState({
//         chosenCountries: chosenCountries,
//         isVisible: !this.state.isVisible
//     });
//     console.log('Array Chosen Countries: ', this.state.chosenCountries)
//     console.log('Index of Country: ',  indexOfCountry)
    
//     // Object.entries(this.state.data).map(([year, info]) => {
//     //   console.log(year, info)
//     // }
//     // )
// }

 toggleCountry = (data, info) => {   
    const chosenCountries = this.state.chosenCountries  
    const chosenCountry = info.Country;
    chosenCountries.push(chosenCountry);

    console.log('Country Toggled: ', chosenCountry)
    console.log('List of Chosen: ', chosenCountries)
    console.log(info.Percentage)
    
    
    
    this.setState({
      isVisible: !this.state.isVisible,
      data: this.state.data,
      chosenCountries: this.state.chosenCountries
    }, () => {console.log(chosenCountry,': ', this.state.isVisible)});

  };

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

      <div className="BarChart" id="results">
      {
            this.state.isVisible && (
              this.state.chosenCountries ?
              this.state.data.map((info, index) => (
                <BarChart
                  className="bar--show bar"
                  info={info}
                  data={this.state.data}
                  year={this.state.year}>
                </BarChart>
              )) : "NO DATA"  
            )
          }

      </div>

      </div>
      </div>
    
    );
  }
}

export default App;
