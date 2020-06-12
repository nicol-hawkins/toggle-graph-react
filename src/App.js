import React, { Component } from 'react';
import './App.css';

import TitleBar from './components/TitleBar/TitleBar';
import BarChart from './components/BarChart/BarChart';


class App extends Component {
  state = {
    year: "2016",
    data: []
  };

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data[this.state.year]
        });
      });
  };

  onUpdateYear = (ev, data) => {
    let year = ev.target.value;
    this.setState({
      year: year       
    }, () => {})
    this.componentDidMount()
  };


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
          <div className="BarChart" id="results">
            {              
              this.state.data.map((info, index) => (
                <BarChart
                  info={info}
                  data={this.state.data}
                  year={this.state.year}
                  key={index}/>                
              )) 
            }
          </div>
      </div>
    </div>
    
    )
  }
};

export default App;
