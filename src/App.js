import React, { Component } from 'react';
import './App.css';




class App extends Component {
  state = {
    isVisible: false
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data
        })
        console.log('got the data!', data)
      })
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
