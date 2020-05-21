import React, { Component } from 'react';
import './App.css';
import Bar from './components/Bar/Bar.js';



class App extends Component () {
  state = {
    isVisible: false
  }

  showBar = () => {
    this.setSate({
      isVisible: true
    });
  }

  hideBar = () => {
    this.setState({
      isVisible: false
    });
  }



  render(){
    return (
      <div className="App">

        <div>
          <Bar
            show={this.state.isVisible}
            onShow={this.showBar}
            onHide={this.hideBar}
            text={"see more"}>

          </Bar>
          </div>
        
      </div>
    );
  }
}

export default App;
