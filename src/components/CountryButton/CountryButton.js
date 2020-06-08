import React, { Component } from 'react';
import './CountryButton.css';

class CountryButton extends Component {

  // onButtonClick = () => {
  //   if(this.props.isVisible) {
  //     this.props.onHide();
  //   } else {
  //     this.props.onShow();
  //   }
  // }
  render() {
    let className = 'Country-Button';
    const style = {};


   
    return (
    
        <div 
          className={className} 
          onClick={this.props.gotClicked}
          onChange={this.props.onChange}
          >
            {this.props.children || this.props.onToggle}
        </div>
    
        );
      }
    }

export default CountryButton;