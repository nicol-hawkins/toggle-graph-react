import React, { Component } from 'react';
import './App.css';

import CountryList from './components/CountryList/CountryList.js';




class App extends Component {
  state = {
    isVisible: false,
    year: '2016'
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data
        })
        console.log('got the data!', data[this.state.year])
       console.log(data[this.state.year]["Country"])
      })
  }

  onUpdateYear = (ev) => {
    let year = ev.target.value;
    this.setState({
      year: year
    });

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

       <h1>This is my app</h1>
      


     <div className="MainContainer">
      <div className="Country-Checkbox">
        {this.state.data[this.state.year] ?
          this.state.data[this.state.year].map((info, index)) (
            <CountryButtons
              onClick={() => this.onChooseCountry(info, index)}
              text={info.Country}>
                {info.Country}
            </CountryButtons>
          ): "NO DATA"
        }
      </div>
      </div>
      </div>
    


    );
  }
}

export default App;
