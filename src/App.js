import React, { Component } from 'react';
import './App.css';




class App extends Component {
  state = {
    isVisible: false
  }

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
        
      </div>
    );
  }
}

export default App;
